// Counts number of charactors of the strings
let name = "harry";
console.log(name.length)
 
//UpperCase
let name = "harry";
console.log(name.toUpperCase())

//LowerCase
let name = "HARRY";
console.log(name.toLowerCase())  

//Print the perticular charector from the string
let name = "harry";
console.log(name.slice(2,4))  

//Prints from the index number given, to the end of the charector in the string
let name = "harry";
console.log(name.slice(2))

//Replace property - Replaces the word or charector from the string with the given word / string
let name = "harry";
console.log(name.replace("har", "Per"))

let name = "harry bhai";
console.log(name.replace("bhai", "bhau"))

//Concat- By using concat methord you can joint as many strings as you want
let name = "harry";
let friend = "Aman";
console.log(name.concat(" is a friend of ", friend, " Okay."))

//.trim -  To trim out / remove the extra spaces from the string.
let name = "harry";
console.log(name.trim())
