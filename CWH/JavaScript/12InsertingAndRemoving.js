console.log("Inserting And Removing")

let cont = document.querySelector(".container")
console.log("1.) innerHTML : "+cont.innerHTML);

console.log("2.) innerText : "+cont.innerText);

console.log("3.) outerHTML : "+cont.outerHTML);

console.log("4.) tagName : "+cont.tagName);

console.log("5.) nodeName : "+cont.nodeName);

console.log("6.) textContent : "+cont.textContent);

console.log("7.) hidden : fasle"); cont.hidden = false;


let box = document.querySelector(".box")

console.log("8.) innerHTML : "); box.innerHTML = "Hey i am E-Box !"

console.log("9.) hasAttribute : "+box.hasAttribute("style"));

console.log("10.) getAttribute : "+box.getAttribute("style"));

box.setAttribute("style","display : inline ;"); console.log("11.) setAttribute : "+box.getAttribute("style"));

console.log("12.) attributes : "); console.log(box.attributes);

console.log("13.) removeAttribute : "+box.removeAttribute("style"));

// Inserting 

let div = document.createElement("div");
div.innerHTML = "I have been inserted <b>by Sahil</b>";
div.setAttribute("class", "e-box");
div.setAttribute("id", "i-box");

// document.querySelector(".container").append(div); // at the end
document.querySelector(".container").prepend(div); // at the beginning
// document.querySelector(".container").before(div); // before the selected node
// document.querySelector(".container").after(div); // after the selected node
// document.querySelector(".container").replaceWith("I have replaced"); // after the selected node


// Inserting Adjacent HTML/Text/Element

let n = document.querySelector(".n-Box");
n.insertAdjacentHTML("beforebegin", "<p>Hello added through insertAdjacentHTML</p>");
n.insertAdjacentHTML("afterend", "<p>Bye added through insertAdjacentHTML</p>");

// Remove

let newBox = document.createElement("div")
newBox.setAttribute("class","r-Box");
document.querySelector(".f-Box").after(newBox)

let b = document.querySelector(".r-Box");
b.innerHTML = "Remove Box";

b.remove();

// ClassName And ClassList

let self = document.createElement("div")
self.setAttribute("class","s-Box a-Box b-Box c-Box");
document.querySelector(".container").after(self);
document.querySelector(".s-Box").innerHTML= " <br>hey ! i am created <b>By Eternity</b>" ;

console.log("14.) classList :  " + document.querySelector(".b-Box").classList);

// // Remove ClassList

document.querySelector(".s-Box").classList.add("d-Box");
console.log("15.) classList.add() :  " + document.querySelector(".b-Box").classList);

document.querySelector(".s-Box").classList.remove("d-Box");
console.log("16.) classList.remove() :  " + document.querySelector(".b-Box").classList);

// // Toggle ClassList

console.log("17.) classList.toggle : "+n.classList.toggle("color"));



