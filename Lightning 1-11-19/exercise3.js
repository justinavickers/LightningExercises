// Loop over every item in this array:

// [45, "I", true, null, "am", 3.56, "a", undefined,
//  { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"]

// Return a new array that contains only strings. Log out the result.

// Hint: The typeof operator


const stuff  = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"]
let newStuff = []
for (let index = 0; index < stuff.length; index++) {
  const element = stuff[index];
  if (typeof element === "string") {
        newStuff.push(element)
  }

}
console.log(newStuff)
