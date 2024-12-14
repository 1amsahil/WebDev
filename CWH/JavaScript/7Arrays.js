
let arr = [5,7,8,3];
console.log(arr);

// toString Method
console.log("toString Method : "+arr.toString());

// join Method (replaces ',' and add "add" )
console.log("join Method : "+arr.join(" and "));

// pop Method (remove last element)
console.log("pop Method : "+arr.pop());

// push Method (Add element in last)
console.log("push Method : "+arr.push("jack"))
console.log(arr);

// shift Method (remove first element)
console.log("shift Method : "+arr.shift());
console.log(arr);

// unshift Method (Add element in first)
console.log("unshift Method : "+arr.unshift("Hello"));
console.log(arr);

// delete a[0] (delete element at a[0])
delete arr[2];

console.log("Length : "+arr.length);
console.log(arr);

// concat Method (Used to join Array)
let a = [3,2,1];
let b = [4,5,6];
let c = [9,8,7];

concat = a.concat(b,c);
console.log("Concat Method : "+ concat);

// sort Method : 
var array = [4,8,1,3];
console.log("sort Method : "+ array.sort());

// slice Method : take element at specific index
var array = [9,4,3,7,6];
console.log("Slice Method : "+array.slice(2,3));

// splice Method : remove element at specific element
array = [7,9,5,3,1,4,6];
console.log("Splice Method : "+array.splice(2,4));