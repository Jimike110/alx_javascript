#!/usr/bin/node

const request = require('request');
async function status (url) {
    request({url}, function (error, response) {
    console.error('error:', error); // Print the error if one occurred
    console.log('code:', response && response.statusCode); // Print the response status code if a response was received
    });
}

module.exports = status;

// Write a script that display the status code of a GET request.
// The first argument is the URL to request (GET)
// The status code must be printed like this: code: <status code>
// You must use the module request (NB: It must be installed if you haven’t already installed it)
