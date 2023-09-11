#!/usr/bin/node

// Import the request module
const request = require('request');

// Get the movie ID from the first argument
const id = process.argv[2];

// Construct the URL with the endpoint and the ID
const url = `https://swapi-api.alx-tools.com/api/films/${id}`;

// Make a GET request to the URL
request.get(url, (error, body) => {
  // If there is an error, print it
  if (error) {
    console.error(error);
  } else {
    // Otherwise, parse the body as JSON
    const data = body.body;
    // Print the title of the movie
    console.log(JSON.parse(data).title);
  }
});

// Write a script that prints the title of a Star Wars movie where the episode number matches a given integer.
// The first argument is the movie ID
// You must use the Star wars API with the endpoint https://swapi-api.alx-tools.com/api/films/:id
// You must use the module request
