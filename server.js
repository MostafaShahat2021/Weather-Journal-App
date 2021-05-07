// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();
// include body-parser to project || require body-parser
const bodyParser = require("body-parser"); 
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// Setup Server
const port = 3030;
const Server = app.listen(port,()=>{
    console.log("Server Runing");
    console.log(`Runing on local host: ${port}`);
})

app.post("/post", (req, res)=>{
    projectData.temp = req.body.temp;
    console.log(projectData.temp)
    projectData.date = req.body.date;
    console.log(projectData.date)
    projectData.feelings = req.body.feelings;
    console.log(projectData.feelings)
})