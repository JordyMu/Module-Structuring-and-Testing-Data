// Predict and explain first...

// Why will an error occur when this program runs?

   /// The code throw errors due to redeclaring of the decimalNumber
   /// The error is due because of redeclaring decimalNumber, using const results in a error

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here

/// decimaNumer is already declared as a function, then const decimalNumber = 0.5; trying also to redeclare it

   
//I have to remove the redeclaration of decimalNumber
 Ex: function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
 console.log(convertToPercentage(0.5));