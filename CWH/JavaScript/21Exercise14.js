let text = ["Initializing CodeX","Fetching Files","Meta-Data Collected","Sending Reports", "Receiving Bugs"];

var randomDelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + (Math.random()*5);
        console.log(timeout);
        
        setTimeout(() => {
            resolve();
        },timeout*1000)
    })
}

const addItem = async (item) => {

    await randomDelay();
    
    let msg = document.createElement("div");
    msg.innerHTML = item;

    document.querySelector("body").append(msg);
}

async function main()
{
    let interval =  setInterval(()=>
    {
        last = document.body.lastElementChild;
        if(last.innerHTML.endsWith("..."))
        {
            last.innerHTML = last.innerHTML.slice(0,last.innerHTML.length - 3);
        }
        else
        {
            last.innerHTML = last.innerHTML + ".";
        }

    },200)

    for(item of text)
    {
        console.log(item);
        await addItem(item);
    }

    clearInterval(interval);
}

main();