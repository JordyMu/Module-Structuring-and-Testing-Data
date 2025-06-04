const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

/*
   Num generates a random integer between 1 and 100
 
   Math.random():returns a decimal between 0 (inclusive) and 1 (exclusive)

   (maximum - minimum + 1): Calculates the total number of (100 - 1 + 1) = 100 possible values

   Math.random() * (maximum - minimum + 1): Scales the random number to our desired range

   Math.floor(): Rounds down to the nearest integer

   + minimum shifts up by adding 1 giving us 1 to 100

   