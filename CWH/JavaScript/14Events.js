let button = document.getElementById("btn");

button.addEventListener("click",() =>{

    document.querySelector(".box").innerHTML = "<b>Bye !</b> Have a nice day";
 
})

button.addEventListener("dblclick", () =>{

    document.querySelector("body").style.backgroundColor = "beige";

})

button.addEventListener("contextmenu", () =>{

    alert("Right click is not Allowed")

})

button.addEventListener("keyup", (e) =>{

    console.log(e.key, e.keyCode);
    alert(`key : ${e.key}`)

})