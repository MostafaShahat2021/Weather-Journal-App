/* Global Variables */
const apiUrl = "http://api.openweathermap.org/data/2.5/weather?zip={zip code}&appid={API key}";
const apiKey = "db946a07f453749c571d0f55fe825d5b";
const btn = document.getElementById("generate");
let zipCode = document.getElementById("zip").value;
let felingText= document.getElementById("feelings").value;
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

