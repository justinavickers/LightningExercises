// 1. Define an array that has the words of a sentence as its items.
// 2. Define a function that accepts an array of words.
// 3. The responsibility of the function is to build a sentence, as a single string,
//  from the array of words and return it.
// 4. Pass your array to the function as an argument value.

const wordsToSentence = [ "I", "am", "a", "happy", "person"]

 const sentence = wordsToSentence => wordsToSentence.join(" ")
 console.log(sentence(wordsToSentence))


 // 1. Define a function that accepts a single string as an argument.
// 2. The responsibility of the function is to return a boolean
// (true/false) if the sentence has a odd number of words in it.
// 3. Take the return value of the first function, and pass it to the second.
// 4. `console.log()` the result of the second function

// Example:
// "The sentence has an even number of words"
// or
// "The sentence has an odd number of words"

 const oddSentence = sentence => sentence.split(" ").length % 2 !== 0
  if (oddSentence(sentence(wordsToSentence))) {
    console.log("The sentence has an odd number of words.")
  } else {
    console.log("The sentence has an even number of words.")
  }







// 1. Define an array that has the words of a sentence as its items.
// 2. Define a function that accepts an array of words.
// 3. The responsibility of the function is to build a sentence, as a single string,
//         from the array of words and return it.
// 4. Pass your array to the function as an argument value.
// */
// const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]





// 1. Define a function that accepts a single string as an argument.
// 2. The responsibility of the function is to return a boolean (true/false)
//         if the sentence has a odd number of words in it.
// 3. Take the return value of the first function, and pass it to the second.
// 4. console.log() the result of the second function
// */
// const builder = wordArray => wordArray.join(" ")
// const oddSentence = sentence => sentence.split(" " ).length % 2 !== 0

// if (oddSentence(builder(words))) {
//     console.log("The sentence has an odd number of words")
// } else {
//     console.log("The sentence has an even number of words")}
