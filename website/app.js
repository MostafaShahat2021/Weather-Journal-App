/* Global Variables */

// get generate button
const btn = document.getElementById("generate");
// get user zip code
const zipCode = document.getElementById("zip");
// get user fellings
let felingText= document.getElementById("feelings").value;
// Personal API Key for OpenWeatherMap API
const apiKey = "db946a07f453749c571d0f55fe825d5b";
// Base URL
// const apiUrl = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode.value}&appid=${apiKey}&units=metric`;
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
// useing click event listener on the Generate Button
btn.addEventListener('click', handlBtnClk);
function handlBtnClk(){
    // make acondition to make sure that user enter a value in the text input
    if( zipCode.value === " "){
        alert("Please Enter a Valid ZIP Code"); 
    } else {
        //start calling our 3 functions
        getData()
    }
}
const getData = async () => {
    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode.value}&appid=${apiKey}&units=metric`)
    try{
        const data = await res.json()
     console.log(data.main.temp)
     return
    } catch (error) {
        console.log(error);
    }
};