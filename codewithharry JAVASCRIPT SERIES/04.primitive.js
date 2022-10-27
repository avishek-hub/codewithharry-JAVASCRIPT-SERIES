// nn ss bb uu  -- Primitive in JS
// n= null
// n= Number
// s= Symbol
// s= String
// b= Boolean
// b= BigInt
// u= undefined

let a = null; //null
let b = 661; //number
let c = Symbol("I am a nice Symbol");
let d = "Avishek";//string
let e = true; //boolean- can be use to determine the value is true or false 
let f = BigInt(556) + BigInt(4); //can be use when the integer value is Bigger
let g = undefined; //undefined 

console.log(a, b, c, d, e, f, g); //print the values in the console
console.log(typeof f); //to see the type of the primitive


//Object- The non primitive data types are called as objects in JavaScript
const item = {
    "Harry": true,
    "Shubh": false,
    "Lovish": 67,
    "Rohan": undefined
}
console.log(item["Shubh"])