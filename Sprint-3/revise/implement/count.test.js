// implement a function countChar that counts the number of times a character occurs in a string

// Given a string str and a single character char to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string str,
// And a character char that may occur multiple times with overlaps within str (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count overlapping occurrences of char (e.g., 'a' appears five times in 'aaaaa').

// Scenario: No Occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.

// Function to count the number of times a character occurs in a string
function countChar(str, char) {
  // Ensure valid inputs
  if (
    typeof str !== "string" ||
    typeof char !== "string" ||
    char.length !== 1
  ) {
    throw new Error(
      "Invalid input: str must be a string, and char must be a single character."
    );
  }

  // Use the split method to count occurrences
  const parts = str.split(char);
  return parts.length - 1;
}

// Example test cases
console.log(countChar("aaaaa", "a")); // Output: 5 (multiple occurrences)
console.log(countChar("hello world", "o")); // Output: 2
console.log(countChar("hello world", "z")); // Output: 0 (no occurrences)
console.log(countChar("CaseSensitive", "s")); // Output: 1 (case-sensitive check)
console.log(countChar("CaseSensitive", "S")); // Output: 0 (case-sensitive check)
