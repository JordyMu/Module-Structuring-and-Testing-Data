// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);


// Error
// decimalNumber is already exists in the function scope. redeclaring it using const results in a Error.
// Fix
// I have to remove the redeclaration of decimalNumber
    // Ex: function convertToPercentage(decimalNumber) {
      //   const percentage = `${decimalNumber * 100}%`;
      //   return percentage;
       // }
       // console.log(convertToPercentage(0.5));
