#!/usr/bin/node

const request = require("request");

// Get the movie ID from the first argument
const url = process.argv[2];

// Construct the URL with the endpoint and the ID
const id = "18";

// Make a GET request to the URL
request.get(url, (error, body) => {
  // If there is an error, print it
  if (error) {
    console.error(error);
  } else {
    // Otherwise, parse the body as JSON
    const data = body.body;

    // Initialize the count variable
    let count = 0;

    // Loop through the data array
    for (let i = 0; i < data.length; i++) {
      // Get the characters array of the current movie
      const characters = data[i].characters;
      console.log(characters);
      
      // Loop through the characters array
      for (let j = 0; j < characters.length; j++) {
        // Check if the character ID is 18
        if (characters[j].includes(id)) {
          // Increment the count variable
          count++;
        }
      }
    }

    // Print the count variable
    console.log(count);
  }
});

// Write a script that prints the number of movies where the character “Wedge Antilles” is present.
// The first argument is the API URL of the Star wars API: https://swapi-api.alx-tools.com/api/films/
// Wedge Antilles is character ID 18 - your script must use this ID for filtering the result of the API
// You must use the module request
