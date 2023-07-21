const values = [50, 75, 100, 125, 150];
const outcome = values;
console.log(outcome[0]); //  returns the number at index 0

outcome.push(175);
console.log(outcome); //  adds a number to the end of the array

outcome.pop();
console.log(outcome); //  removes the last number from the array

outcome.shift();
console.log(outcome); //  removes the first number from the array

outcome.unshift(25);
console.log(outcome); //  adds a number to the beginning of the array
