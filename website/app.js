/* Global Variables */

// get generate button
const btn = document.getElementById("generate");

// get user zip code
const zipCode = document.getElementById("zip");

// Personal API Key for OpenWeatherMap API
const apiKey = "db946a07f453749c571d0f55fe825d5b";

// get API url
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode.value}&appid=${apiKey}&units=metric`

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

const felingText= document.getElementById("feelings");
// get dtae,temp,and content
let date = document.getElementById("date");
let temp = document.getElementById("temp");
let content = document.getElementById("content");

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

        //calling getData Function
        getData().then((data)=>{
            // chain & call postData Function
            postData("/post", {temp:data.main.temp, date: newDate, feelings: felingText.value})
        })// chain updateUi Function
        .then(()=> updateUi())

        //       ****FOR TEST ONLY****

        // get user fellings & date
        //.then(()=>{
            // postData("/post", {temp:data.main.temp})
            // const felingText= document.getElementById("feelings");
            // const getUserInput = felingText.value
            // let d = new Date();
            // let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();
            // console.log(getUserInput);
            // console.log(newDate);
            
            
        // })
        //       ****FOR TEST ONLY****
    }
}
//Function to get web API data using async -await promises
const getData = async () => {
    // get API url
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode.value}&appid=${apiKey}&units=metric`
    const req = await fetch(apiUrl)
    try{
        const data = await req.json()
        // const temp = data.main.temp **tetst**
        // console log to check
     console.log(data.main.temp)
     return data
    } catch (error) {
        console.log(error);
    }
};

// Function to post data using async - await promises

const postData = async (url = "", data = {})=>{// using empty value as default parameters
    // fetch route url & detremine request method,credentials,headers,body
    const res = await fetch(url,{
        "method": "POST",
        "credentials": "same-origin",
        headers:{
            "content-type": "application/json",
        },
        body:JSON.stringify(data), // convert JS object into a string
    });
    try{
        return;
    } catch (error){
        console.log("Error",error);
    }
}
// postData("/post", {temp:data.main.temp})

// Function to GET Project Data 
const updateUi = async()=>{
    const req = await fetch("/get")
    try{
        const udata = await req.json()
        console.log(udata)
        date.innerHTML = udata.date
        temp.innerHTML = udata.temp
        content.innerHTML = udata.feelings
    } catch (error) {
        console.log(error)
    }
}
// updateUi()