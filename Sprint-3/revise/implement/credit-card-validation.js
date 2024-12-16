// Function to validate a credit card number
function isValidCreditCard(number) {
  // Check if the number is 16 characters long and all characters are digits
  if (
    typeof number !== "string" ||
    number.length !== 16 ||
    !/^\d{16}$/.test(number)
  ) {
    return false; // Invalid if not 16 digits or contains non-digit characters
  }

  // Check if there are at least two different digits
  const uniqueDigits = new Set(number); // Create a Set to find unique digits
  if (uniqueDigits.size < 2) {
    return false; // Invalid if all digits are the same
  }

  // Check if the final digit is even
  const lastDigit = Number(number[number.length - 1]);
  if (lastDigit % 2 !== 0) {
    return false; // Invalid if the last digit is odd
  }

  // Check if the sum of all digits is greater than 16
  const digitSum = number
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);
  if (digitSum <= 16) {
    return false; // Invalid if the sum of digits is 16 or less
  }

  // If all checks pass, the credit card number is valid
  return true;
}

// Example test cases
console.log(isValidCreditCard("9999777788880000")); // true
console.log(isValidCreditCard("6666666666661666")); // true
console.log(isValidCreditCard("a92332119c011112")); // false (invalid characters)
console.log(isValidCreditCard("4444444444444444")); // false (only one type of number)
console.log(isValidCreditCard("1111111111111110")); // false (sum less than 16)
console.log(isValidCreditCard("6666666666666661")); // false (odd final number)
