//      CHAPTER 2 PRACTICE SET//

//Q1)   Use logical operators to find whether the age of a person lies between 10 and 20.

/*
let age = prompt("Hey what is your age");
age = Number .parseInt(agr)
if (age >= 10 && age <20){
    console.log("You are a teenager")
}
else {
    console.log("You are not a teenager.")
}
*/


//Q2)  Demonstrate the use of switch case statements in javascript

/*
let age = prompt("Hey what is your age");
age = Number .parseInt(age)
switch(age) {
    case 10:
      console.log("Your age is 10.")
      break;
    case 11:
      console.log("Your age is 11.")
      break;
    case 12:
      console.log("Your age is 12.")
      break;
    default:
      console.log("The age is invalid")
  }
  */



//  Q3)  Write a JavaScript program to find whether a number is divisible by 2 and 3.

/*
let num  = prompt("Enter any number")
num = Number .parseInt(num);
if(num % 2 == 0 || num % 3 == 0){
    console.log("Your number is divisible by 2 and 3")
}
else {
    console.log("Your number is not divisible by 2 and 3");
}
*/




//  Q4)  Write a JavaScript program to find whether a number is divisible by 2 or 3.

let num  = prompt("Enter any number")
num = Number .parseInt(num);
if(num % 2 == 0){
    console.log("Your number is divisible by 2")
}

else if(num % 3 == 0){
    console.log("Your number is divisible by 3")
}

else {
    console.log("Your number is neither divisible by 2 nor 3");
}


// Q5) Print "You can Drive" or "You cannot Drive" based on age being greater than 18 using ternary operators.

let age = prompt("Hey what is your age")
console.log("You can", age<18? "not drive" : "drive");