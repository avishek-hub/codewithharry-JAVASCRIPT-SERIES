/*Q1. What will the following print in JavaScript?
console.log("har\".length)*/

let nam = "har\`";
console.log(nam.length);

/*  Q2 Explain the includes, starts with & ends with functionsof a string*/
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word - 'fox2';
console. log( sentence. includes(word))
console. log( 'The word "${word}" ${sentence. includes(word) ? 'is' : 'is not'} in the sentence`);


/*  .StartsWith example*/
const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// expected output: true

console.log(str1.startsWith('Sat', 3));
// expected output: false




/* .EndsWith example*/
const str1 = 'Saturday night plans';

console.log(str1.endsWith('plans'));
// expected output: true

console.log(str1.endsWith('Sat', 3));
// expected output: false





/*  Q3. Write a program to convert a given string to lowercase.*/
let name = ("AVISHEK");
console.log(name.toLowerCase());

/*  Q4. Extract the amount out of the string "Please give Rs 1000"*/
let amt = "Please give Rs 1000";
console.log(amt.slice(14));

// Q4. corrections
let str2 = "Please give Rs 1000"
let amount = Number.parseInt(str2.slice("Please give Rs ".length)) //Number.parseInt- Is to convert the type from string to number.
//("Please give Rs ".length)- To find the number of charectors(lenght) in ["Please give Rs "]
console. log( amount ) //To print the Sliced out value
console. log( typeof amount )  //To print the type of the value [number]


/*  Q5. Try to change 4th character of a given string were you able to do it?*/
let loc = "hydrabad";
console.log(loc.replace("r", "E"));  //Sring is immutable(You cannot the original string)



let place = "Mumbai";
console.log(place.replace("Mum", "Du"));


//  Q5. corrections 
 let friend = "Deepika"
 friend[3] = "RT
 console. log(friend) // friend is not changed, because string is immutable







