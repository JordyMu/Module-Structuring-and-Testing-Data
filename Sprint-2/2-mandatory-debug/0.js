// Predict and explain first...

/// The prediction is  the code will print undefined in the string because it contains 2 console.log statements.


// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here

/// The function declares multiply and take 2 arguments (a,b)
/// the console.log of a*b will prints 320
/// but console.log of The result of multiplying 10 and 32 is undefined, because  the function doesn't return a value.


// Finally, correct the code to fix the problem

/// To fix I will replace the first console statement: console.log(a * b); with a return statement: return a * b;

function mutiply(a, b){
  return a * b;
}
console.log(`The result of multiplying 10 and32 is ${multiply(10, 32)}`);
