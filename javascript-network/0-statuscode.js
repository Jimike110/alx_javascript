#!/usr/bin/node

const status = require('.request');

async function main(url) {
    try {
        const statusCode = await status({ url });
        console.log('code:', statusCode);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();


// Write a script that display the status code of a GET request.
// The first argument is the URL to request (GET)
// The status code must be printed like this: code: <status code>
// You must use the module request (NB: It must be installed if you haven’t already installed it)
