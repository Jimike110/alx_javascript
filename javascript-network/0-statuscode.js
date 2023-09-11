#!/usr/bin/node

const request = require('request');

function status(url) {
    return new Promise((resolve, reject) => {
        request({ url }, function (error, response) {
            if (error) {
                reject(error); // Reject the promise if there's an error
            } else {
                resolve(response && response.statusCode); // Resolve with the status code if successful
            }
        });
    });
}

module.exports = status;

// Write a script that display the status code of a GET request.
// The first argument is the URL to request (GET)
// The status code must be printed like this: code: <status code>
// You must use the module request (NB: It must be installed if you haven’t already installed it)
