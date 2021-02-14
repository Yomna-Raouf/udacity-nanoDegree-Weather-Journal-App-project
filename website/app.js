/* Global Variables */

// Personal API Key for OpenWeatherMap API
const apiKey = "c431f0e320da85979032024b0c0da633";
const apiBaseUrl = "https://api.openweathermap.org/data/2.5/weather";
// api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}

// Elements to read User Inputs
const zipCodeInput = document.querySelector("#zip");
const userFeelingsInput = document.querySelector("#feelings");
const generateButton = document.querySelector("#generate");

// Elemnts to Display the output to the user
const date = document.querySelector("#date");
const temprature = document.querySelector("#temp");
const content = document.querySelector("#content");

// Event listener to add function to existing HTML DOM element


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

/* Function called by event listener */

/* Function to GET Web API Data*/

/* Function to POST data */


/* Function to GET Project Data */