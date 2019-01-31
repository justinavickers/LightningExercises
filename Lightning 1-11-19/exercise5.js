// 1. Design a function named `evenOrOdd` that take a single number
//  as an argument.
// 2. It should return the string "Even" if the number is evenly
// divisible by two.
// 3. It should return the string "Odd" if the number is not evenly
// divisible by two.

// Use the modulo - or remainder - operator in JavaScript to
// accomplish this.

const evenOrOdd = originalNumber => {
  if (originalNumber % 2 === 0) {
    return "Even"
  }
  return "Odd"
}

evenOrOdd(18)


// ///////////////////////////////////////////////////////////////
// 1. Create an array of numbers. Some even, some odd.
// 2. Iterate the array and invoke the `evenOrOdd` passing the current number as the argument.
// 3. Use `console.log` to display the result in the Developer Console.

const arrayOfNumbers = [2,6,4,7,34,55]

arrayOfNumbers.forEach(currentNumber => {
  const itwasEvenOrOdd = evenOrOdd(currentNumber)
  console.log(itwasEvenOrOdd)
})

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    const currentNumber = arrayOfNumbers[i];
    const itwasEvenOrOdd = evenOrOdd(currentNumber)
    console.log(itwasEvenOrOdd)
  }
