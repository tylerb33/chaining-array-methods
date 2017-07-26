console.log ("chaining.js");
// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

let completedManips = integers

// Sort the numbers in descending order (10, 9, 8, 7, etc).
.sort((a, b) => {return b-a})
// Remove any integers greater than 19.
.filter((num) => {return num < 19})
// Multiply each remaining number by 1.5 and then subtract 1.
.map((num) => {return (num * 1.5) - 1})
// Then output (either in the DOM or the console) the sum of all the resulting numbers.
.reduce((previous, current) => {return previous + current});


console.log ("completedManips", completedManips);


// Note that this actually is one line of code... just broken into different lines for readibility. There are no semi-colons to close each line.








