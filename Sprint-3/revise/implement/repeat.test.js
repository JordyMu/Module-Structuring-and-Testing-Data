// Implement a function repeat

// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:

// case: repeat String:
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

// case: handle Count of 1:
// Given a target string str and a count equal to 1,
// When the repeat function is called with these inputs,
// Then it should return the original str without repetition, ensuring that a count of 1 results in no repetition.

// case: Handle Count of 0:
// Given a target string str and a count equal to 0,
// When the repeat function is called with these inputs,
// Then it should return an empty string, ensuring that a count of 0 results in an empty output.

// case: Negative Count:
// Given a target string str and a negative integer count,
// When the repeat function is called with these inputs,
// Then it should throw an error or return an appropriate error message, as negative counts are not valid.

function repeat(str, count) {
  if (count < 0) {
    return "Count cannot be negative"; // Return an error message if count is negative
  }
  if (count === 0) {
    return ""; // Return an empty string if count is 0
  }
  return str.repeat(count); // Use the built-in repeat method to repeat the string count times
}

// Test cases
console.log(repeat("abc", 3)); // Output: "abcabcabc"
console.log(repeat("abc", 1)); // Output: "abc"
console.log(repeat("abc", 0)); // Output: ""
console.log(repeat("abc", -2)); // Output: "Count cannot be negative"
