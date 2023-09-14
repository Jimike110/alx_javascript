// Create a function divideBy:
//     It takes into argument firstNumber (number)
//     It returns a function that takes into argument secondNumber (number)
//          It returns the second number divided by the first number
// Create a function addBy:
//     It takes into argument firstNumber (number)
//     It returns a function that takes into argument secondNumber (number)
//          It returns the sum of the two numbers
// Create four closures:
//     addBy100, that uses the function addBy with the number 100
//     addBy1000, that uses the function addBy with the number 1000
//     divideBy10, that uses the function divideBy with the number 10
//     divideBy100, that uses the function divideBy with the number 100

function divideBy (firstNumber=Number) {
    return function (secondNumber=Number) {
        return secondNumber / firstNumber;
    }
}

function addBy (firstNumber=Number) {
    return function (secondNumber=Number) {
        return firstNumber + secondNumber;
    }
}

var addBy100 = addBy(100);

var addBy1000 = addBy(1000);

var divideBy10 = divideBy(10);

var divideBy100 = divideBy(100);