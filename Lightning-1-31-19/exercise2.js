// Say Hello To The People!
// 1. - Populate the select options dynamically by iterating over the people array
//    - Create a template literal for an option element
//    - Append to the select element in the dom
// 2. Console.log "Hello[person's name]!" When a person is selected and the button is clicked!


const people = ["Meg", "Steve", "kimmy", "Madi", "Jisie", "Joe", "Emily", "Andy"]
const selectOption = document.getElementById("people")
people.forEach(person => {
  selectOption.innerHTML += `<option value = "${person}"> ${person}</option>`
});
document.getElementById("helloBtn").addEventListener("click", ()=>{
  console.log(`Hello ${selectOption.value}!`)
console.log("you clicked me")
})
