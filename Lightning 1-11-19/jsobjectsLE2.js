// Lightning Exercise 3: Define an object for four family members,
// and put each object in an array named familyMembers. Each family member
//  object that you create should have the same keys on them, but the
//  values will be different.


const Husband = {
  name: "Nick",
  age: "30",
  height: "5'11"
}

const Mom = {
  name: "Deanna",
  age: "51",
  height: "5'8"
}

const Dad = {
  name: "Steve",
  age: "45",
  height: "6'2"
}

const Sister = {
  name: "Aurora",
  age: "25",
  height: "5'7"
}

const familyMembers = [Husband, Mom, Dad, Sister]
console.table(familyMembers)