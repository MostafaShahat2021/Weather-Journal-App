/* Global Variables */

// get generate button
const btn = document.getElementById("generate");
// get user zip code
let zipCode = document.getElementById("zip").value;
// get user fellings
let felingText= document.getElementById("feelings").value;
// Personal API Key for OpenWeatherMap API
const apiKey = "db946a07f453749c571d0f55fe825d5b";
// Base URL
const apiUrl = "http://api.openweathermap.org/data/2.5/weather?zip={zipCode}&appid={apiKey}&units=metric";
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();