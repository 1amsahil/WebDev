// for in 
console.log("For In : ")
object = {
    a : 1,
    b : 2,
    c : 3
};

for (const key in object)
{
    if (Object.prototype.hasOwnProperty.call(object, key))
    {
        const element = object[key];
        console.log(element);
    }
}

// for of 
console.log("For Of : ")
const obj = [9,8,7,6,5,4];

for (const element of obj) {
    console.log(element);
}

// Map function

console.log("Map Function : ");
var array = [1,2,3,4,5,6]; 

let newArray = array.map( (e) => { return e**2 } );
console.log(newArray);

// Filter function

console.log("Filter Function : ");
array = [1,8,27,23,19,5,11];

const greaterThan = e =>
    {
        if(e>7)
            {
                return true;
            }

        return false;
    }
console.log(array.filter(greaterThan));

// Reduce function

console.log("Reduce Function : ");
array = [1,2,3,4,5,6];

const fac = (a,b) =>
    {
    return a+b;
}
console.log(array.reduce(fac));

// from Method

Name = Array.from("Sahil");
console.log(Name);