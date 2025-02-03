// callback :- 
console.log("1.) CallBack :- ");

function call(msg)
{
    console.log(msg)
}

const employee = (id, callback) =>
{
    console.log("id :",id);
    callback("success");
}
employee(47,call);

// promise
console.log("2.) Promise :-")

var prom1 = new Promise((resolve, reject) => {
    ran = Math.random()
    if(ran>0.5)
    {
        reject("First Less than 0.5");
    }

    else{
        setTimeout(() =>{
            resolve("First Promise resolved successfully");
        }, 2000)
    }
});

// Then And Catch
prom1.then((element) => 
{
    console.log("Then :",element);
    
}).catch((error) => 
    {
        console.log("Catch :",error)  
    });

var prom2 = new Promise((resolve, reject) => {
    ran = Math.random()
    if(ran>0.5)
    {
        reject("Second Less than 0.5");
    }

    else{
        setTimeout(() =>{
            resolve("Second Promise resolved successfully");
        }, 3000)
    }
});

// Promise All
console.log("3.) Promise All :");
var prom3 = Promise.all([prom1,prom2]);

prom3.then((element) => {
    console.log("Promise All Element :",element);
}).catch( error => {
    console.log("Promise All Error : ",error)
})
