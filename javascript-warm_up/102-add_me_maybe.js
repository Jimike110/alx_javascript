// Write a function that increments and calls a function.
// The function must be visible from outside
// Prototype: function (number, theFunction)
// You are not allowed to use var
// guillaume@ubuntu:~/$ cat 102-main.js
// #!/usr/bin/node
// const addMeMaybe = require('./102-add_me_maybe').addMeMaybe;
// addMeMaybe(4, function (nb) {
//   console.log('New value: ' + nb);
// });
// guillaume@ubuntu:~/$ ./102-main.js
// New value: 5
// guillaume@ubuntu:~/$

exports.addMeMaybe = function (number, theFunction) {
    number += 1;
    return theFunction();
}