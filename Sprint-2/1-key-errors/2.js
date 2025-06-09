
// Predict and explain first BEFORE you run any code...

/// The predition is the function will will throw a syntaxError, the function declaration function square(3) is invalid because 3 is a literal number.
/// The error occurs because expectation i a valid parameter name in the function declaration



// function square(3) {
//     return num * num;
// }

// =============> write the error message here

/// This is the error message: syntaxErro: unexpected number

// =============> explain this error message here

/// This error occurs because expectationsis a valid parameter name (num) in the function declaration, but instead find number 3.

// Finally, correct the code to fix the problem

 function square(num){
    return num * num;
 }
 console.log(square(3));




