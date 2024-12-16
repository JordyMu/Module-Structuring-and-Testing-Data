/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/

function isValidPassword(password, passwords) {
  // Step 1: Check if the password is at least 5 characters long
  if (password.length < 5) {
    return false;
  }

  // Step 2: Check for at least one uppercase letter
  let hasUpperCase = false;
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= "A" && password[i] <= "Z") {
      hasUpperCase = true;
      break;
    }
  }
  if (!hasUpperCase) return false;

  // Step 3: Check for at least one lowercase letter
  let hasLowerCase = false;
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= "a" && password[i] <= "z") {
      hasLowerCase = true;
      break;
    }
  }
  if (!hasLowerCase) return false;

  // Step 4: Check for at least one digit
  let hasDigit = false;
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= "0" && password[i] <= "9") {
      hasDigit = true;
      break;
    }
  }
  if (!hasDigit) return false;

  // Step 5: Check for at least one special character
  let hasSpecialChar = false;
  const specialChars = "!#$%.*&";
  for (let i = 0; i < password.length; i++) {
    if (specialChars.indexOf(password[i]) !== -1) {
      hasSpecialChar = true;
      break;
    }
  }
  if (!hasSpecialChar) return false;

  // Step 6: Check if password is already used
  if (passwords.includes(password)) {
    return false;
  }

  // If all checks pass, return true
  return true;
}

// Example usage
const previousPasswords = ["Passw0rd!", "123456", "Hello123*"];
console.log(isValidPassword("MyP@ss1", previousPasswords)); // true
console.log(isValidPassword("mypassword", previousPasswords)); // false
console.log(isValidPassword("12345", previousPasswords)); // false
console.log(isValidPassword("Passw0rd!", previousPasswords)); // false
