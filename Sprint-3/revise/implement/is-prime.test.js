// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should check if the num is prime

// Function to check if a number is prime
function isPrime(num) {
  // A number less than 2 is not prime
  if (num < 2) return false;

  // Check divisors from 2 up to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // If divisible, it's not prime
    }
  }

  return true; // If no divisors, it's prime
}

module.exports = isPrime; // Export for testing
