let msd = document.getElementById("dhoni");
let cr7 = document.getElementById("cr7");

msd.addEventListener("click", ()=>{
    document.getElementById("name").textContent="MS Dhoni";
    document.getElementById("gender").textContent="Male";
    document.getElementById("mail").textContent="dhoni@gmail.com";
    document.getElementById("image").src = "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg";
});

cr7.addEventListener("click", ()=>{
    document.getElementById("name").textContent="Cristiano Ronaldo";
    document.getElementById("gender").textContent="Male";
    document.getElementById("mail").textContent="ronaldo@gmail.com";
    document.getElementById("image").src = "https://upload.wikimedia.org/wikipedia/commons/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg";
});