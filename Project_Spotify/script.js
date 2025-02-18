console.log("Javascript");

let currentSong = new Audio;
let songs;

async function getSongs()
{
    // Fetching Songs
    let link = await fetch("http://127.0.0.1:3000/Project_Spotify/songs/");
    let response = await link.text();

    let div = document.createElement("div");
    div.innerHTML = response;

    let list = div.getElementsByTagName("a");

    // Adding Songs in (songs) Array
    let songs = [];
    for(let index = 0; index<list.length; index++)
    {
        const element = list[index];
        
        if(element.href.endsWith(".mp3"))
        {
            songs.push(element.innerText);
        }
    }

    return (songs);
}

// Play Music function
playMusic = (track)=>{
    currentSong.src = "/Project_Spotify/songs/"+track;
    currentSong.play();

    document.querySelector(".song-info").innerHTML = `<label>${track}</label>`;
}

// Main Function
async function main()
{
    songs = await getSongs();
    console.log(songs[0]);
    
    currentSong.src = "/Project_Spotify/songs/"+songs[0];
    document.querySelector(".song-info").innerHTML = `<label>${songs[0]}</label>`;

    // Showing all Songs in Playlist
    let songUL = document.querySelector(".song-list").getElementsByTagName("ul")[0];

    for(var s of songs)
    {
        songUL.innerHTML = songUL.innerHTML + `<li>
                                <img src="svg/music.svg" class="invert" alt="">
                                <div class="song">
                                    <div>${s}</div>
                                </div>
                                <img src="svg/play.svg" class="invert play-btn" alt="">
                            </li>`
    }

    // Add an Event-Listener to song-list (li)
    Array.from(document.querySelector(".song-list").getElementsByTagName("li")).forEach(e=>{
        
        e.addEventListener("click", element => {
            playMusic(e.querySelector(".song").firstElementChild.innerHTML);

            if(currentSong.play)
            {
                play.src = "svg/pause.svg"
            }
        })
    })

    // Click Play button Event-Listener
    play.addEventListener("click", () => {
        
        if(currentSong.paused)
        {               
            currentSong.play();
            play.src = "svg/pause.svg";
            play.alt = "pause"
        }
        else
        {
            currentSong.pause();
            play.src = "svg/play.svg";
        }
    })

    // Add an Event-Listener to seekbar
    document.querySelector(".seekbar").addEventListener("click", e => {
        let percent = (e.offsetX/e.target.getBoundingClientRect().width) * 100;

        document.querySelector(".circle").style.left = percent + "%";
        currentSong.currentTime = ((currentSong.duration)*percent)/100;
    })

    // Add an Event-Listener to previous
    previous.addEventListener("click", () => {

        var index = songs.indexOf(currentSong.src.split("/")[5].replaceAll("%20"," "));

        if(index == 0)
        {
            currentSong.src = "/Project_Spotify/songs/"+songs[songs.length-1];
            currentSong.play();

            document.querySelector(".song-info").innerHTML = `<label>${songs[songs.length-1]}</label>`;
        }
        else
        {
            currentSong.src = "/Project_Spotify/songs/"+songs[index-1];
            currentSong.play();

            document.querySelector(".song-info").innerHTML = `<label>${songs[index-1]}</label>`;
        }


        if(currentSong.play)
        {
            play.src = "svg/pause.svg"
        }
    })

    // Add an Event-Listener to next
    next.addEventListener("click", () => {

        var index = songs.indexOf(currentSong.src.split("/")[5].replaceAll("%20"," "));

        if(index == songs.length-1)
        {
            currentSong.src = "/Project_Spotify/songs/"+songs[0];
            currentSong.play();

            document.querySelector(".song-info").innerHTML = `<label>${songs[0]}</label>`;
        }
        else
        {
            currentSong.src = "/Project_Spotify/songs/"+songs[index+1];
            currentSong.play();

            document.querySelector(".song-info").innerHTML = `<label>${songs[index+1]}</label>`;
        }


        if(currentSong.play)
        {
            play.src = "svg/pause.svg"
        }
    })

    // Song Timelaspe Event-Listener
    currentSong.addEventListener("timeupdate", () => {

        var curr = secondsToMinutes(currentSong.currentTime);
        var total = secondsToMinutes(currentSong.duration);

        console.log(curr,total);
        if(total == `${NaN}:${NaN}`)
        {
            total = "00:00";
        }

        document.querySelector(".song-duration").innerHTML = `<label>${curr} | ${total}</label>`;
        document.querySelector(".circle").style.left = (currentSong.currentTime/ currentSong.duration) * 100 +"%"

        if(currentSong.paused)
        {
            play.src = "svg/play.svg";
        }
    });

    // seconds to minutes converter
    function secondsToMinutes(time)
    {
        const minutes = Math.floor(time/60);
        const seconds = Math.floor(time%60);
        
        return `${(minutes.toString()).padStart(2,"0")}:${(seconds.toString()).padStart(2,"0")}`;
    }

}

main();