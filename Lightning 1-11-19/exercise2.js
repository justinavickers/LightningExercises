
// ```const foods = ["pizza", "spaghetti", "burger",
//  "hotdog", "corn dog", "taco"]

// // for each element in the array if it's a "hotdog"
// print hotdog and if it's not print "not hotdog" to the console!```

const foods = ["pizza", "spaghetti", "burger","hotdog", "corn dog", "taco"]
for (let i = 0; i < foods.length; i++) {
  let currentFood = foods[i]
  if (currentFood === "hotdog") {
    console.log("its a hotdog")
  } else {
    console.log("its not a hotdog")
  }

}

// //a second way of doing this
// const foods = ["pizza", "spaghetti", "burger","hotdog", "corn dog", "taco"]
// foods.forEach(element => {
//   console.log("element")
//   if (element === "hotdog") {
//     console.log("its a hotdog")
//   } else {
//     console.log("its not a hotdog")
//   }
// });
