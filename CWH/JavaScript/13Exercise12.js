console.log("Javascript working");

let boxes = document.querySelector(".container").children;

function getRandomColor()
{
    let val1 = Math.random()*255;
    let val2 = Math.random()*255;
    let val3 = Math.random()*255;

    return `rgb(${val1}, ${val2}, ${val3})`;
}

Array.from(boxes).forEach(e => {
    
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
});