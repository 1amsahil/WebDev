console.log("Javascript");

let currentSong = new Audio;
let songs;
let currFolder;
let duration;
let volumeValue = 50

async function getSongs(folder)
{
    currFolder = folder;
    // Fetching Songs
    let link = await fetch(`http://127.0.0.1:3000/Project_Spotify/${folder}`);
    
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
    currentSong.src = `/Project_Spotify/${currFolder}/`+track;
    currentSong.play();

    document.querySelector(".song-info").innerHTML = `<label>${track}</label>`;
}

// Next Song Play logic
nextSong = () =>
{
    var index = songs.indexOf(currentSong.src.split("/")[6].replaceAll("%20"," "));

    if(index == songs.length-1)
    {
        currentSong.src = `/Project_Spotify/${currFolder}/`+songs[0];
        currentSong.play();

        document.querySelector(".song-info").innerHTML = `<label>${songs[0]}</label>`;
    }
    else
    {
        currentSong.src = `/Project_Spotify/${currFolder}/`+songs[index+1];
        currentSong.play();

        document.querySelector(".song-info").innerHTML = `<label>${songs[index+1]}</label>`;
    }

    if(currentSong.play)
    {
        play.src = "svg/pause.svg"
    }
}

// Main Function
async function main()
{
    songs = await getSongs("songs/Mix");
    console.log("Playlist : Mix");
    console.log("Song Name :",songs[0]);
    
    // metadata load
    currentSong.src = `/Project_Spotify/${currFolder}/`+songs[0];
    currentSong.preload = "metadata";

    document.querySelector(".song-info").innerHTML = `<label>${songs[0]}</label>`;
    
    // Add Event-Listener to PlayList
    Array.from(document.getElementsByClassName("card")).forEach(e => {
        e.addEventListener("click", async item => {
            console.log("Playlist : ",item.currentTarget.dataset.folder);

            songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`);

            // Showing all Songs in Playlist
            let songUL = document.querySelector(".song-list").getElementsByTagName("ul")[0];
            songUL.innerHTML = "";

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
            console.log("Song Name :",songs[0]);
            
            document.querySelector(".song-info").innerHTML = `<label>${songs[0]}</label>`;
            
            currentSong.src = `/Project_Spotify/${currFolder}/`+songs[0];

        })
    }) 
    
    // Showing all Songs in Playlist
    let songUL = document.querySelector(".song-list").getElementsByTagName("ul")[0];
    songUL.innerHTML = "";

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

    // song duration without play
    duration = currentSong.addEventListener("loadedmetadata",() => {
        console.log("Song Duration :",secondsToMinutes(currentSong.duration));
        document.querySelector(".song-duration").innerHTML = `<label>00:00 | ${secondsToMinutes(currentSong.duration)}</label>`;
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

        var index = songs.indexOf(currentSong.src.split("/")[6].replaceAll("%20"," "));

        if(index == 0)
        {
            currentSong.src = `/Project_Spotify/${currFolder}/`+songs[songs.length-1];
            currentSong.play();

            document.querySelector(".song-info").innerHTML = `<label>${songs[songs.length-1]}</label>`;
        }
        else
        {
            currentSong.src = `/Project_Spotify/${currFolder}/`+songs[index-1];
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
        nextSong();
    })

    // Add an Event-Listener to create Volume-bar
    document.querySelector(".volume-range").addEventListener("click", () => {

        document.querySelector(".volume-range").innerHTML = `<input id="volume" type="range" value="${volumeValue}" >${volumeValue}`;
    })

    // Add an Event-Listener to remove Volume-bar
    document.querySelector(".volume-range").addEventListener("change", (e) => {
                
        console.log("volume value : ",e.target.value);

        volumeValue = parseInt(e.target.value);   
        currentSong.volume = volumeValue/100;
    
        document.querySelector(".volume-range").innerHTML = `<img class="playbar-btns" id="volume" src="svg/volume.svg" alt="volume-btn">`;
    })
    document.querySelector(".playbar").addEventListener("dblclick", (e) => {

        if(volumeValue == NaN)
        {
            currentSong.volume = parseInt(50);
            volumeValue = currentSong.volume;
        }
        
        document.querySelector(".volume-range").innerHTML = `<img class="playbar-btns" id="volume" src="svg/volume.svg" alt="volume-btn">`;
    })

    // Song Timelaspe Event-Listener
    currentSong.addEventListener("timeupdate", () => {

        var curr = secondsToMinutes(currentSong.currentTime);
        var total = secondsToMinutes(currentSong.duration);

        if(total == `${NaN}:${NaN}`)
        {
            total = "00:00";
            document.querySelector(".circle").style.left = "0%"
        }

        document.querySelector(".song-duration").innerHTML = `<label>${curr} | ${total}</label>`;
        document.querySelector(".circle").style.left = (currentSong.currentTime/ currentSong.duration) * 100 +"%"

        if(currentSong.paused)
        {
            play.src = "svg/play.svg";
        }

        if(currentSong.currentTime == currentSong.duration)
        {
            nextSong();
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