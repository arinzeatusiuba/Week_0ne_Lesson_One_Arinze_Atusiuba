const hasValue = true;
const lacksValue = false;

let result = hasValue && lacksValue;
console.log(result); //  returns false

result = hasValue || lacksValue;
console.log(result); //  returns true

result = !hasValue && lacksValue;
console.log(result); //  returns false

result = hasValue && !lacksValue;
console.log(result); //  returns true

result = !hasValue || lacksValue;
console.log(result); //  returns false

result = hasValue || !lacksValue;
console.log(result); //  returns true

result = !(hasValue && lacksValue);
console.log(result); //  returns true

result = !(hasValue || lacksValue);
console.log(result); //  returns false

if (hasValue && lacksValue) {
  console.log('Both hasValue and lacksValue are true');
} else if (hasValue || lacksValue) {
  console.log('Either hasValue or lacksValue is true'); //  returns "Either hasValue or lacksValue is true"
} else {
  console.log('Neither hasValue nor lacksValue is true');
}
