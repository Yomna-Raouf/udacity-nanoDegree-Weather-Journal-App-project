// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Initialize all route with a callback function

// Callback function to complete GET '/all'
app.get("/api/projectData", (req, res) => {
  res.status(200).send(projectData);
});


// Post Route

// Setup Server
app.listen(process.env.PORT || 8000, () =>
  console.log(`Server running on port 8000 or ${process.env.PORT}`)
);




