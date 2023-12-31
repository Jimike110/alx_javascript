// Write a script that computes the number of tasks completed by user id.
// The first argument is the API URL: https://jsonplaceholder.typicode.com/todos
// Only print users with completed tasks
// You must use the module request

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
  data.forEach((task) => {
    // Get the user id and the completed status
    const user_id = task.userId;
    const completed = task.completed;

    // If the user id is not in the object, initialize it with zero
    // if (!completed_tasks[user_id]) {
    //   completed_tasks[user_id] = 0;
    // }

    // If the task is completed, increment the count by one
    if (completed) {
      completed_tasks[user_id]++;
    }
  });

  // Filter out users with no completed tasks
  const usersWithCompletedTasks = Object.keys(completed_tasks).reduce(
    (acc, userId) => {
      if (completed_tasks[userId] > 0) {
        acc[userId] = completed_tasks[userId];
      }
      return acc;
    },
    {}
  );

  // Print the completed tasks object
  console.log(usersWithCompletedTasks);
});
