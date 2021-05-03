/* Global Variables */

// get generate button
const btn = document.getElementById("generate");

// get user zip code
const zipCode = document.getElementById("zip");

// Personal API Key for OpenWeatherMap API
const apiKey = "db946a07f453749c571d0f55fe825d5b";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();


// useing click event listener on the Generate Button 
btn.addEventListener('click', handlBtnClk);

// Function called by event listener 
function handlBtnClk(){
    // const aipCode again to fix the If condition
    const zipCode = document.getElementById("zip");

    // make acondition to make sure that user enter a value in the text input
    if( zipCode.value === ""){
        alert("Please Enter a Valid ZIP Code"); 
    } else {
        //start calling our 3 functions

        //calling getData
        getData()

        // get user fellings & date
        .then(()=>{
            const felingText= document.getElementById("feelings");
            const getUserInput = felingText.value
            let d = new Date();
            let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();
            console.log(getUserInput);
            console.log(newDate);

        })
    }
}
//Function to get web API data
const getData = async () => {
    // get API url
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode.value}&appid=${apiKey}&units=metric`
    const res = await fetch(apiUrl)
    try{
        const data = await res.json()
     console.log(data.main.temp)
     return
    } catch (error) {
        console.log(error);
    }
};

