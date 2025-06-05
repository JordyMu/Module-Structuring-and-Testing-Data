const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
      // 6 variable declarations

// b) How many function calls are there?
      // 1 function calls

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

    // The expression movieLength % 60 is modulus operation in programming, The module operator(%) returns the remaider after division

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
     ///  The expressionin 4 the (movieLength - remainingSeconds) / 60;
     ///  removes the leftover seconds, dividing by 60 converts theramaining seconds to minutes,
     ///  This gives us the total number of complete minutes in the movie duration

// e) What do you think the variable result represents? Can you think of a better name for this variable?
      ///  I think the better name for this variable is a time duration formatted as Hours:Minutes:Seconds

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
      /// It doesn't work perfectly for all values, works well for positive integers
