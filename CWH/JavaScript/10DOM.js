bodyNode = document.body.childNodes;
console.log(bodyNode);

console.log(document.body.childNodes[1].childNodes);

let array = document.body.childNodes[1];

console.log("firstChild : "+array.firstChild);
console.log("lastChild : "+array.lastChild);
console.log("firstElementChild : "+array.firstElementChild);

console.log("chilNodes : "+document.body.firstElementChild.childNodes);

console.log("children : "+document.body.firstElementChild.children);
console.log("children[0] : "+document.body.firstElementChild.children[0]);
console.log("children[1] : "+document.body.firstElementChild.children[1]);
console.log("children[2] : "+document.body.firstElementChild.children[2]);

console.log("nextElementSilbling : "+document.body.firstElementChild.children[2].nextElementSibling);
console.log("previousElementSilbling : "+document.body.firstElementChild.children[2].previousElementSibling);

console.log("parent : "+document.body.firstElementChild.children[2].parentElement);
