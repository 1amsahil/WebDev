document.querySelector(".child").addEventListener("click", (e) => {

    e.stopPropagation();
    document.querySelector(".child").innerHTML = "<b> child called </b>"
    
})

document.querySelector(".childContainer").addEventListener("click", (e) => {
    
    e.stopPropagation();
    document.querySelector(".child").innerHTML = "<b> childContainer called </b>"
    
})

document.querySelector(".container").addEventListener("click", (e) => {
    
    document.querySelector(".child").innerHTML = "<b> container called </b>"

})

// Interval

function getRandomColor()
{
    val1 = Math.random()*255 ;
    val2 = Math.random()*255 ;
    val3 = Math.random()*255 ; 

    return `rgb(${val1},${val2},${val3})` ;
}

ran = setInterval( () => {

    document.querySelector(".child").style.color = getRandomColor();

},5000);

// clearInterval(ran) ; //// It stops the process or clear thr interval

ran = setTimeout( () => {

    document.querySelector(".child").style.color = getRandomColor();

}, 1000);