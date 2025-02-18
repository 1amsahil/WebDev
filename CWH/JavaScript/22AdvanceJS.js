// Immediately Invoked Function Expressions (IIFE)

async function sleep()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(200);
        },1000)
    })
}

(async function main(){

    let a = await sleep()
    console.log("sleep a :",a);
    
    let b = await sleep()
    console.log("sleep b :",b)
    
})()

// Destructuring

var [x,y] = [2,4];
console.log("Destructuring\nx :",x,"y :",y);

var [x,y, ...rest] = [4,6,9,1,3,8];
console.log("x :",x,"y :",y,"rest :",rest);

let obj = {
    x : 1,
    y : 2,
    z : 3,
    s : 4
}

var {x, y } = obj
console.log("Object Destructuring \nx :",x,"y :",y);

// Spread Operator

function sum(a,b,c)
{
    return a+b+c;
}

var arr = [2,7,4];
console.log("Spread Operator \nsum : ",sum(...arr));
