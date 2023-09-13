// Import the request module
const request = require("request");

// Get the API URL from the argument
const api_url = process.argv[2];

// Use the request function to get the data from the API
request(api_url, (error, response, body) => {
  // Check for errors
  if (error) {
    console.error(error);
    return;
  }

  // Parse the body as a JSON array
  const data = JSON.parse(body);

  // Initialize an empty object to store the completed tasks by user id
  const completed_tasks = {};

  // Loop through each element of the data array
  data.forEach((user) => {
    // Get the user id and the completed status
    const user_id = user.userId;
    const completed = user.completed;

    // If the user id is not in the object, initialize it with zero
    if (!completed_tasks[user_id]) {
      completed_tasks[user_id] = 0;
    }

    // If the task is completed, increment the count by one
    if (completed) {
      completed_tasks[user_id]++;
    }
  });

  // Print the completed tasks object
  console.log(completed_tasks);
});

// Write a script that prints the number of movies where the character “Wedge Antilles” is present.
// The first argument is the API URL of the Star wars API: https://swapi-api.alx-tools.com/api/films/
// Wedge Antilles is character ID 18 - your script must use this ID for filtering the result of the API
// You must use the module request
