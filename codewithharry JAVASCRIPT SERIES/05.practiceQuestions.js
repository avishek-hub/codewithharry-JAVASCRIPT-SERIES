// Q1) Creat a veriable of type sctipe and try to add a number to it.

let a = 45;
let b = 50;
console.log(a+b);  // Printing the addition of a+b.

// Q2) Use type of operator to find the datatype of the string in last question
console.log(typeof (a+b));  // typeof- Are use to see the datatype of the primitive data type

// Q3) Create a const object in javascript. Can you change it to hold a number later?
const item= {
    "basket1": "apple",
    "basket2": "mango",
    "basket3": "bananas"
}
console.log (item["basket1"])
console.log (item["basket2"])
console.log (item["basket3"])

// Q4) Try to add a new key to the const object in Problem 3. Were you able to do it?
// const itemPrice= {
//     "basketPrice1": 10,
//     "basketPrice2": 20,
//     "basketPrice3": 30,
// }

// const sum= basketPrice1 + basketPrice2 + basketPrice3;

// console.log ('The sum of apple, mangoe, bananas are' + sum);

//Q5) Write a JS program to create a word- meaning dictionary of 5 words
const temperature= {
    "hot": "high temperature",
    "cold": "low temperature",
    "humid": "water vapour in the atmosphere",
    "dry": "free from moisture or liquid",
    "wet": "saturated with water or another liquid",

}

console.log (temperature['hot']);

