// Predict and explain first...
//  =============> write your prediction here

   ///  The code will throw error because there is a variable redeclaration issue

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here
    
   /// To fix I have to remove the let so that str is modified without being redeclared

// =============> write your new code here

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}