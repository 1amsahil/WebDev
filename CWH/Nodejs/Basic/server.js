console.log("hello world");

var slug = require("slugify");
 
let a = slug("Some String");
console.log(a);

let b = slug("Some &^$(*String","_");
console.log(b);
