const countLabel = document.getElementById("countlabel");
const decBtn = document.getElementById("decBtn");
const resetBtn = document.getElementById("resetBtn");
const incBtn = document.getElementById("incBtn");

let count = 0;

incBtn.addEventListener("click", ()=>{
    count++;
    countLabel.textContent = count;
});

decBtn.addEventListener("click",()=>{
    count--;
    countLabel.textContent = count;
});

resetBtn.addEventListener("click", ()=>{
    count = 0;
    countLabel.textContent = count;
});