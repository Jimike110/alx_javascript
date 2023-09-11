#!/usr

// Import the request module
const request = require('request');

// Get the URL from the first argument
const id = process.argv[2];

// Make a GET request to the API endpoint
request.get(`https://swapi-api.alx-tools.com/api/films/${id}`, (error, response) => {
  // If there is an error, print it
  if (error) {
    console.error(error);
  } else {
    // Otherwise, print the title
    console.log(response.title);
  }
});

// Write a script that prints the title of a Star Wars movie where the episode number matches a given integer.
// The first argument is the movie ID
// You must use the Star wars API with the endpoint https://swapi-api.alx-tools.com/api/films/:id
// You must use the module request
