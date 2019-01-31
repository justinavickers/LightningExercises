// 1.Use your Google fu, or look in the [MDN documentation]
// to find a way to output the string "I am a rockstar ninja unicorn JS dev"
// from this array.
// You will need to reverse the order of the strings in the array and then join them
// together into a single string.

let hyperbole = ["dev", "JS", "unicorn", "ninja", "rockstar", "a", "am", "I"]
console.log("hyperbole", hyperbole)

// let reversed = hyperbole.reverse()
// console.log("reversed", reversed)

// *Step 2.* See if you can use the `map()` array method to convert all
// of the strings to uppercase.

console.log(hyperbole.map(w => w.toUpperCase()).reverse().join(" "))