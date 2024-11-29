// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// the error I cannot redeclare a variable (str) that already exists as a argument in scope function
// the let str conflicts with existing variable.
// How to Fix
// I don't need to redeclare str the code will look like this:
      
      //  function capitalise(str) {
      //  str = `${str[0].toUpperCase()}${str.slice(1)}`;
      //  return str;
      //  }

// I Removed the let and returns the capitalized result. there's no conflict.
