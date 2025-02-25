const { clear } = require("console");
const fs = require("fs");

console.log(fs);

console.log("starting"); 
// fs.writeFileSync("eternity.txt","Important File created by Eternity",()=>{
//      console.log("Done");
// });


// fs.writeFile("owner.txt","File Own by Eternity",() => {
//     console.log("Done");

//     fs.readFile("owner.txt", (error,data) => {
//             console.log(error,data.toString())            
//     })

// });

fs.appendFile("owner.txt"," !", (e,d) => {
});

fs.readFile("owner.txt", (error,data) => {
    console.log(error,data.toString())            
});

console.log("ending");