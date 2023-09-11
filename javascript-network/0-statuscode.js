#!/usr/bin/node

// Import the request module
const request = require('request');

// Get the URL from the first argument
const url = process.argv[2];

// Make a GET request to the URL
request.get(url, (error, response) => {
  // If there is an error, print it
  if (error) {
    console.error(error);
  } else {
    // Otherwise, print the status code like this: code: <status code>
    console.log(`code: ${response.statusCode}`);
  }
});


// Write a script that display the status code of a GET request.
// The first argument is the URL to request (GET)
// The status code must be printed like this: code: <status code>
// You must use the module request (NB: It must be installed if you haven’t already installed it)
