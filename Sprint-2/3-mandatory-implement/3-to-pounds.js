// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(penceString) {
  const penceValue = penceString.slice(0, -1);

  const paddedPenceString = penceValue.padStart(3, "0");

  const pounds = paddedPenceString.slice(0, -2);

  const pence = paddedPenceString.slice(-2);

  return `£${pounds}.${pence}`;
}

console.log(toPounds("399p"));
console.log(toPounds("50p"));
console.log(toPounds("9p"));
console.log(toPounds("1200p"));
console.log(toPounds("5p"));
