let ID = document.getElementById("para");

ID.innerText="paragragh!";

let h1 = document.getElementsByTagName("h1");

h1[1].textContent = "noob"

let btn = document.getElementById("btn");


function change(){
    if(btn.textContent === "dark mode"){
        btn.textContent = "light mode";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
    // btn.innerHTML = btn.textContent === "dark" ? "white" : "dark" ;
    // document.body.style.backgroundColor = "black";
    // document.body.style.color = "white";
    else{
        btn.textContent = "dark mode";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
}
