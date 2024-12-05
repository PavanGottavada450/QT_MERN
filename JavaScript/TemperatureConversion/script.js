const textbox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
const Submit = document.getElementById("Submit")
let temp;

Submit.addEventListener('click' , () => {
    if(toFahrenheit.checked){
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp + "°F";
    }
    else if(toCelsius.checked){
        temp = Number(textbox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp + "°C";
    }
    else{
        result.textContent = "Select a unit";
    }
});
