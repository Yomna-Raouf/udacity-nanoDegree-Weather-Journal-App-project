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
generateButton.addEventListener("click", () => {
  console.log("Clicked");
  console.log(zipCodeInput.value);
  console.log(userFeelingsInput.value);
 // fetchWeatherData(apiKey, "21648");
  /*  fetchWeather(url, zip.value, APIKey)
    .then((temp) => {
      return { date: newDate, temp, content: feelings.value };
    })
    .then((data) => {
      saveData("/api/projectdata", data);
      return data;
    })
    .then(({ temp, date, content }) => updateUI(temp, date, content))
    .catch((e) => {
      // There can be proper error handling with UI
      console.error(e);
    }); */
});

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

/* Function called by event listener */

/* Function to GET Web API Data*/
const fetchWeatherData = async (apiKey, zipCode) => {
  const fetchUrl = `${apiBaseUrl}?zip=${zipCode},us&units=metric&appid=${apiKey}`;
  try {
    const request = await fetch(fetchUrl);
    const response = await request.json();
    console.log(response);
    const { main } = response;
    console.log(main.temp);
    return main.temp;
  } catch (e) {
    alert("an Error occured", e);
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
