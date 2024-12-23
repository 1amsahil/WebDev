let x = document.getElementsByClassName("box");
console.log(x);

x[2].style.backgroundColor = "red";

document.querySelector(".box").style.backgroundColor = "green";

document.querySelectorAll(".box").forEach(e =>
    {
       e. style.backgroundColor = "green";
    }
)

let a = document.getElementsByTagName("div")

console.log("matches : "+a[1].matches("#redbox"));
closest = a[1].closest("html");

console.log("contains : "+document.querySelector(".container").contains(a[1]));
console.log("contains : "+document.querySelector(".container").contains(document.querySelector(".body")));