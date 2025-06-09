// Predict and explain first...

/// The code has a syntax error. The function have declaration sum with 2 arguments (a,b) the return statement ends the function immediately.
/// Anything after return on a new line is ignored and returns undefined every time it is called.

// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here

/// The sum function has a return statement before a + b which means the function stoped immediately  and returns undefined,
///    because a + b is unreachable.

// Finally, correct the code to fix the problem

/// To fix: Return statement should be on the same line with a + b.

//  =============> write your new code here

 function sum(a, b){
  return a + b;
 }
 console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
