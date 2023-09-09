#!/usr/bin/node

const Square5 = require('./5-square.js');

class Square extends Square5 {
    constructor(size) {
        super(size);
    }
    
    charPrint(c) {
        if (c === undefined) {
            c = "X";
        }
        for (let i = 0; i < this.size; i++) {
            process.stdout.write(c);
            for (let j = 1; j < this.size; j++) {
                process.stdout.write(c)
            }
            console.log("");
        }
    }
}

module.exports = Square;

// Write a class Square that defines a square and inherits from Square of 5-square.js:
// You must use the class notation for defining your class and extends
// Create an instance method called charPrint(c) that prints the rectangle using the character c
// If c is undefined, use the character X
