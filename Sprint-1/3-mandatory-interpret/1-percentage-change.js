let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
     /*the are 3 function calls 
      carPrice.replaceAll(",", "")
      Number(carPrice.replaceAll(",", ""))
      console.log();*/

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
    /* The error is on the line 5
       because missing comma between the two arguments
       It should be (priceAfterOneYear.replaceAll(",", "")); */

// c) Identify all the lines that are variable reassignment statements
      /* Line 4: carPrice = Number(carPrice.replaceAll(",",""));
         Line 5: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));

// d) Identify all the lines that are variable declarations
    /* Lines: 1 2 7 8 */

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
      /*carPrice.replaceAll(",", "") removes all commas from carPrice
        ex: "10,000" = "10000"
        Number("10000") converts the string "10000" to number 10000 */

