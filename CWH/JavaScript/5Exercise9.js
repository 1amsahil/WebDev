
let ran = Math.random();
console.log(ran);

alert("Faulty Calculator")

let a = prompt("Enter a Number : ")
let c = prompt("Operator : ")
let b = prompt("Enter a Number : ")

let obj = {
    "+" : "*",
    "-" : "/",
};

if(ran > 0.35)
{
    console.log("${a} ${c} ${b}");
    result = eval(`${a} ${c} ${b}`);
    alert(result);
}
else
{
    c = obj[c]

    console.log(`${a} ${c} ${b}`);
    result = eval(`${a} ${c} ${b}`);
    alert(result);
}



