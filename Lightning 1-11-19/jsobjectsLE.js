// Lightning Exercise: Given the object below, output each of the values to the
//  console using dot notation.
// const wardrobe = {
//     height: 80,
//     manufacturer: "Killibrew & Sons",
//     contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
//     depth: 38,
//     width: 50
// }

const wardrobe = {
  height: 80,
  manufacturer: "Killibrew & Sons",
  contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
  depth: 38,
  width: 50
}

console.log(`height: ${wardrobe.height},
   Manufacturer:   ${wardrobe.manufacturer},
   contents: ${wardrobe.contents},
   depth: ${wardrobe.depth},
   width: ${wardrobe.width}`)

   console.table(wardrobe.contents)

   wardrobe.contents = "baseball hat"
   wardrobe.material = "cedar"

   console.table(wardrobe)