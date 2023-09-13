// Write a script that computes the number of tasks completed by user id.
// The first argument is the API URL: https://jsonplaceholder.typicode.com/todos
// Only print users with completed task
// You must use the module request

const request = require("request");

const api_url = process.argv[2];

request(api_url, (error, response, body) => {
    if (error) {
        console.log("An error occured: ", error);
    }
    const data = JSON.parse(body);


    data.forEach(user => {
        let completed_tasks = 0;
        if (user.userId === 1 && user.completed === true) {
            completed_tasks++;
        }
        user.userId++;
    });
    let output = JSON.stringify(user, completed_tasks);
    console.log(output);
    // for (let i = 0; i < data.length; i++) {
    //     if (i.completed === true) {
    //         completed_tasks++;
    //     }
    // }
});