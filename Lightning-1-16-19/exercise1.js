// 1. Create a function that logs the result of adding two numbers that were passed in
// as arguments.
// 2. Create another function that logs the result of subtracting two numbers that were
// passed in as arguments.
// 3. Invoke each function a couple times with different argument values.
// Create another function called `calculate` that takes three arguments: two numbers and a function
 const addingNumbers= (first, second) =>
   console.log(first + second)

addingNumbers(6,3)
addingNumbers(20,15)
const subtractingNumbers = (first, second) =>
  console.log(first - second)

subtractingNumbers(10,5)

const calculate = (first, second, fn) => {
  fn(first, second)
}
 calculate(512, 1024, addingNumbers)
 calculate(512, 1024, subtractingNumbers)
