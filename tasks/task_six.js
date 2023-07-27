//Convert a string to a number using the parseInt() or parseFloat() functions:
const numericString = '123';
const parsedIntValue = parseInt(numericString);
console.log(parsedIntValue); // returns 123

const floatString = '3.14';
const parsedFloatValue = parseFloat(floatString);
console.log(parsedFloatValue); //  returns 3.14


//Convert a number to a string using the toString() method or string concatenation

const numberValue = 42;
const stringValueUsingToString = numberValue.toString();
console.log(stringValueUsingToString); //  returns "42"

const stringValueUsingConcatenation = '' + numberValue;
console.log(stringValueUsingConcatenation); //  returns "42"


//Convert a string to an array using the split() method.
const commaSeparatedString = 'apple,banana,orange';
const arrayFromSplit = commaSeparatedString.split(',');
console.log(arrayFromSplit); //  returns ["apple", "banana", "orange"]

