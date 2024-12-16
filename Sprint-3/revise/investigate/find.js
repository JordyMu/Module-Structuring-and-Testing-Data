function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
  }
  return -1;
}

console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
// The index increases by 1 (index++) to check the next character in the string.

// b) What is the if statement used to check
// The if statement if (str[index] === char) checks whether the character at the current index position in the string str is equal to the character char we are looking for.

// c) Why is index++ being used?
//  This ensures that the loop moves through each character in the string one at a time.
//  Without index++, the loop would be stuck on the first character, checking it repeatedly.

// d) What is the condition index < str.length used for?
// The condition index < str.length is used to check if the index is still within the bounds of the string.
