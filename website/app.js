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

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "/" + d.getDate() + "/" + d.getFullYear();

/* Function called by event listener */
const handleSubmit = () => {
  fetchWeatherData(apiKey, zipCodeInput.value)
    .then((response) => {
      return {
        date: newDate,
        temprature: response,
        content: userFeelingsInput.value,
      };
    })
    .then((data) => {
      postData("/api/projectData", data);
      displayMostRecentEntry();
    })
    .catch((err) => console.log(err));
};

// Event listener to add function to existing HTML DOM element
generateButton.addEventListener("click", handleSubmit);

/* Function to GET OpenWeatherMap Web API Data*/
const fetchWeatherData = async (apiKey, zipCode) => {
  const fetchUrl = `${apiBaseUrl}?zip=${zipCode},us&units=metric&appid=${apiKey}`;
  try {
    const request = await fetch(fetchUrl);
    const response = await request.json();
    const { main } = response;
    return main.temp;
  } catch (e) {
    alert("Ooops! we couldn't find this zip code 😕", e);
  }
};

/* Function to POST data */
const postData = async (route, data) => {
  try {
    await fetch(route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (e) {
    alert("an error occured while processing your data", e);
  }
};

/* Function to GET Project Data */
const getData = async (route) => {
  try {
    const request = await fetch(route);
    const response = await request.json();
    return response;
  } catch (e) {
    alert("an error occured while processing your data", e);
  }
};

// Display Most Recent Entry on the web page
const displayMostRecentEntry = async () => {
  const projectData = await getData("/all");
  // display date
  date.innerText = Object.keys(projectData)[0];
  // Display temprature value
  temp.innerText = projectData[Object.keys(projectData)[0]].temprature
    ? `${projectData[Object.keys(projectData)[0]].temprature} deg`
    : "";
  // Display User Feelings
  content.innerText = projectData[Object.keys(projectData)[0]].content
    ? projectData[Object.keys(projectData)[0]].content
    : "Hope you're doing great ✌😄";
};
