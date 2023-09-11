#!/usr/bin/node

// Import the request module
const request = require("request");

// Get the URL from the first argument
const id = process.argv[2];

const requestURL = `https://swapi-api.alx-tools.com/api/films/${id}`;
const request = new Request(requestURL);

const response = await fetch(request);
const movieText = await response.text();

const movie = JSON.parse(movieText);
console.log(movie.title);

// Write a script that prints the title of a Star Wars movie where the episode number matches a given integer.
// The first argument is the movie ID
// You must use the Star wars API with the endpoint https://swapi-api.alx-tools.com/api/films/:id
// You must use the module request
