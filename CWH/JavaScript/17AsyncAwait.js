// Async

async function getData()
{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(500);
        },3000);
    })
}

(async function main()
{
    console.log("Loading Modules");
    console.log("Loading Data , Wait 3 seconds");

    let data = await getData();
    
    console.log(data);
    console.log("Data Process Successully.");
})()