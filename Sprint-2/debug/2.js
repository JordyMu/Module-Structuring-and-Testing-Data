// Predict and explain first...

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem


// it uses a global variable num.
// The function have an error because getLastDigit() don't have arguments
// return give the last digit 3 of 103

// to make the code to work
// I have to modify the getLastDigit function to accept an argument
   
//function getLastDigit(number) {
  //return number.toString().slice(-1);
//}

//console.log(`The last digit of 42 is ${getLastDigit(42)}`);
//console.log(`The last digit of 105 is ${getLastDigit(105)}`);
//console.log(`The last digit of 806 is ${getLastDigit(806)}`);

//The function now takes a parameter number,converts it to a string will extracts the last character using .slice(-1).
