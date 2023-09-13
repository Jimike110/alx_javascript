#!/usr/bin/node

// Import the request module
const request = require("request");

// Define the API URL and the character ID
const api_url = process.argv[2];
const character_id = 18;

// Use the request function to get the response from the API as a JSON object
request(api_url, (error, response, body) => {
  // Check for errors
  if (error) {
    console.error(error);
    return;
  }

  // Parse the body as a JSON object
  const data = JSON.parse(body);

  // Initialize a counter for the number of movies
  let movie_count = 0;

  // Loop through the results of the data
  for (let result of data.results) {
    // Check if the character ID is in the list of characters for each movie
    if (result.characters.some((url) => url.endsWith(`${character_id}/`))) {
      // Increment the movie count by one
      movie_count++;
    }
  }

  // Print the movie count
  console.log(movie_count);
});

// Write a script that prints the number of movies where the character “Wedge Antilles” is present.
// The first argument is the API URL of the Star wars API: https://swapi-api.alx-tools.com/api/films/
// Wedge Antilles is character ID 18 - your script must use this ID for filtering the result of the API
// You must use the module request
