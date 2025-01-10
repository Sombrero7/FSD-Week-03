// 1. Define and invoke an anonymous function square() which takes a number and returns its square.
const square = function(num) {
    return num * num;
};
console.log(square(2)); // Output: 4

// 2. Define an IIFE function which takes a personName as input and displays a greeting message containing the personName.
(function(personName) {
    console.log(`Hello ${personName}, Welcome to Great Learning!`);
})("Harry"); // Output: Hello Harry, Welcome to Great Learning!

// 3. Define a global array variable containing 3 numbers. 
// Define a function which increments the value of each of the elements of this array by 2. 
// Display the array after you have invoked this function.
let numbers = [1, 2, 3];
function incrementArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] += 2;
    }
}
incrementArray(numbers);
console.log(numbers); // Output: [3, 4, 5]

// 4. Create a "course" object having following information - 
// courseName as "Computer Science", durationInMonths as 24, level as "Beginner". 
// Display object information.
// Change the value of level as "Intermediate". 
// Display object information again.
let course = {
    courseName: "Computer Science",
    durationInMonths: 24,
    level: "Beginner"
};
console.log(course);
course.level = "Intermediate";
console.log(course);

// 5. Given an array "students" which is a collection of javascript objects where each object consists of information regarding 
//    one student. Write a code to iterate through each of these objects and extract first name and last name of each student.
var students = [
    { firstName: "Harry", lastName: "Potter", house: "Slytherin" },
    { firstName: "Ron", lastName: "Weasley", house: "Gryffindor" },
    { firstName: "Hermione", lastName: "Granger", house: "Gryffindor" }
];
students.forEach(student => {
    console.log(`${student.firstName} ${student.lastName}`);
});

// 6. Write a function which takes 2 arguments- 1st an array of numbers and 2nd the doubleNumber function as a callback function
// This function should iterate through each of the array number and use the doubleNumber function to double it.
function doubleNumber(num) {
    return num * 2;
}

function processArray(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = callback(arr[i]);
    }
}
let nums = [1, 2, 3];
processArray(nums, doubleNumber);
console.log(nums); // Output: [2, 4, 6]

// 7. Implement a function called `multiplyBy` that multiplies a number by a specific factor using an IIFE.
const multiplyBy = (function(factor) {
    return function(num) {
        return num * factor;
    };
})(3);
console.log(multiplyBy(5)); // Output: 15

// 8. Using the `apply` method, write a function that finds the maximum number in an array.
function findMax(arr) {
    return Math.max.apply(null, arr);
}
console.log(findMax([1, 5, 3, 9, 2])); // Output: 9

// 9. Declare an object named "car" with an empty object as its initial value. 
// Add the properties "make" and "model" with values "Toyota" and "Camry" respectively.
let car = {};
car.make = "Toyota";
car.model = "Camry";
console.log(car);

// 10. Define a function displayByKey() which takes this array of objects and a keyName(as string) as arguments and displays the value of the key for each of the JavaScript objects.
function displayByKey(arr, keyName) {
    arr.forEach(obj => {
        console.log(obj[keyName]);
    });
}
displayByKey(students, "house"); // Output: Slytherin, Gryffindor, Gryffindor
