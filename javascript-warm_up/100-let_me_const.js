// Write a file that modifies the value of myVar to 333
// guillaume@ubuntu:~/$ cat 100-main.js
// #!/usr/bin/node
// myVar = 89;
// require('./100-let_me_const')
// console.log(myVar);
// guillaume@ubuntu:~/$ ./100-main.js
// 333

const myVar = 333;
exports.modify = function () {
    return myVar;
}
