// Predict and explain first...

/// The code should tell us the output will always be the last digit of each number.
/// The explanation is the getLastDigit() is not working properly because  it completely ignores the parameter that's being passed to it

const num = 103;

// function getLastDigit() {
//   return num.toString().slice(-1);
// }

// console.log(`The last digit of 42 is ${getLastDigit(42)}`);
// console.log(`The last digit of 105 is ${getLastDigit(105)}`);
// console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction

/// I run the code, it produces this.
/// The last digit of 42 is 3
/// The last digit of 105 is 3
/// The last digit of 806 is 3

// Explain why the output is the way it is

/// getLastDigit() function supposed to return the last digit of a given number
/// but it does not have any arguments
/// it always refers to the global variable num, which is set to 103


// Finally, correct the code to fix the problem

/// To fix: I will add the num variable to the function

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);