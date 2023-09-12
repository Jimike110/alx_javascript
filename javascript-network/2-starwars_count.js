#!/usr/bin/node

const request = require('request');

// Get the movie ID from the first argument
const url = process.argv[2];

// Construct the URL with the endpoint and the ID
const id = '18';

// Make a GET request to the URL
request.get(url, (error, body) => {
  // If there is an error, print it
  if (error) {
    console.error(error);
  } else {
    // Otherwise, parse the body as JSON
    const data = body.body;
    const characters = data.characters;
    
    let count = 0;
    for (let i = 0; i < characters.length; i++) {
        if (characters[i].includes(id)) {
            count++;
        }
    }
    console.log(count);
  }
});

// Write a script that prints the number of movies where the character “Wedge Antilles” is present.
// The first argument is the API URL of the Star wars API: https://swapi-api.alx-tools.com/api/films/
// Wedge Antilles is character ID 18 - your script must use this ID for filtering the result of the API
// You must use the module request
