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
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// Setup Server
const port = 8000;
const Server = app.listen(port,()=>{
    console.log("Server Runing");
    console.log(`Runing on local host: ${port}`);
})
// app.get("/", function(rec, res){
//     res.send("Hello World");
// });