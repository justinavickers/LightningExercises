//display the animals

const kennel = {
  name: "Nashville North Kennels",
  address: "100 Demonbreun Road",
  manager: "Harper Frankstone",
  capacity: 50,
  currentAnimals: ["Jet", "Snickers", "Blue", "Jacks", "Flap", "Barnum"]
}

console.table(kennel.currentAnimals)


const boardedAnimals = kennel.currentAnimals

for (let i = 0; i < boardedAnimals.length; i++) {
  const currentAnimal = boardedAnimals[i];
  console.log(currentAnimal)
}

console.log(kennel.currentAnimals[3])