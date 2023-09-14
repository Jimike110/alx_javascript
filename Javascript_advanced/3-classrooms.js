// Write a function named createClassRoom:
    // It takes into argument numbersOfStudents (number)
    // Inside, it contains a function studentSeat, that takes into argument seat (number) and returns a function that returns the seat number
    // After the definition of studentSeat, create and populate a variable students (array)
    // Using a loop from 0 to numbersOfStudents, pass the number of iteration + 1 to studentSeat and add its return value to the students array
    // Returns the students array
// Create a closure classRoom, calling createClassRoom with 10 students

function createClassRoom(numbersOfStudents) {
    // Define the studentSeat function inside createClassRoom
    function studentSeat(seat) {
        // Return a function that returns the seat number
        return function () {
            return seat;
        }
    }

    // Create an empty students array
    var students = [];

    // Use a loop to populate the students array
    for (let i = 0; i < numbersOfStudents; i++) {
        // Call the studentSeat function with the seat number (i + 1) and add it to the students array
        students.push(studentSeat(i + 1));
    }

    // Return the populated students array
    return students;
}

// Create a closure classRoom by calling createClassRoom with 10 students
var classRoom = createClassRoom(10);
