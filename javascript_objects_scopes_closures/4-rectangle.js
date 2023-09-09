#!/usr/bin/node

class Rectangle {
    constructor(w, h) {
        if (w <= 0 || h <= 0 || isNaN(w) || isNaN(h)) {
            return;
        }
        this.width = w;
        this.height = h;
    }
    print() {
        for (let i = 0; i < this.height; i++) {
            process.stdout.write("X");
            for (let j = 1; j < this.width; j++) {
                process.stdout.write("X");
            }
            console.log("");
        }
    }
    rotate() {
        this.width = this.height;
        this.height = this.width + 1;
    }
    double() {
        this.width = this.width * 2;
        this.height = this.height * 2;
    }
}

module.exports = Rectangle;

// Write a class Rectangle that defines a rectangle:
// You must use the class notation for defining your class
// The constructor must take 2 arguments: w and h
// Initialize the instance attribute width with the value of w
// Initialize the instance attribute height with the value of h
// If w or h is equal to 0 or not a positive integer, create an empty object
// Create an instance method called print() that prints the rectangle using the character X
// Create an instance method called rotate() that exchanges the width and the height of the rectangle
// Create an instance method called double() that multiples the width and the height of the rectangle by 2
