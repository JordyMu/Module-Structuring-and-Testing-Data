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
    return "Count cannot be negative"; // Return error message for negative count
  }
  if (count === 0) {
    return ""; // Return empty string for count 0
  }
  return str.repeat(count); // Repeat the string for count > 0
}

// Example usage
console.log(repeat("abc", 3)); // "abcabcabc"
console.log(repeat("abc", 1)); // "abc"
console.log(repeat("abc", 0)); // ""
console.log(repeat("abc", -2)); // "Count cannot be negative"
