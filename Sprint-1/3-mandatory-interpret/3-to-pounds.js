const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 3. Removes the 'P' character by taking a substring from the start up to one character before the end. Result: "399"
// 8. Ensures the pence string is at least 3 characters long. Result with "399"
// 9. Extracts the pounds portion. Result:"3"
// 14. Extracts the last 2 characters as Result: "99"
// 18. Outputs the formatted price in pounds and pence format. Returns the amount

