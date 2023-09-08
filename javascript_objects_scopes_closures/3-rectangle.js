#!/usr/bin/node

class Rectangle {
  constructor(w, h) {
    if (w <= 0 || h <= 0 || isNaN(w) || isNaN(h)) {
      // Check if w or h is less than or equal to 0, or if they are not valid numbers (NaN)
      return;
    }
    this.width = w;
    this.height = h;
    this.print = function () {
      for (let i = 0; i < h; i++) {
        console.log("X", end="");
        for (let j = 0; j < w - 1; j++) {
          console.log("X", end="");
        }
        console.log("");
      }
    };
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
