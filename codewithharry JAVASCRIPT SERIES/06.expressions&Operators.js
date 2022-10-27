//Expression- Is a valid set of literals variables, operators and expression that evaluate to a single valse.
//- Every value written litnoerally is an "Expression"

//For Example-
// 77
// "Avishek is a programmer"
console.log("Operators in JS");
// Arithmetic Operators
let a= 45;
let b=4;
console.log("a + b = ", a+b);  //Addition
console.log("a - b = ", a-b);  //Subtraction
console.log("a * b = ", a*b);  //Multiplication
console.log("a / b = ", a/b); //Division
console.log("a ** b = ", a**b);  //Exponentiation

console.log("a % b = ", a%b);  //Modulus- The remainder operator (%) gives the remainder left over when one operand is divided by a second operand.

console.log("a ++ = ", a++);  //Increment- (a++) will print the value of "a" first then it will increase value of "a"  
console.log("a = ", a);  

console.log("++ a = ", ++a);  //Increment- (++a) will increase the value of "a" then it will print the value of "a"  

console.log("a -- = ", a--);  /*Decrement- (a--) will print the value of "a" first then it will decrease value of "a" */ 
console.log("a = ", a);  

console.log("-- a = ", --a);  //Decrement- (--a) will decrease the value of "a" then it will print the value of "a"  


// Assignment Operators
let assignment = 1;
assignment += 5; //same as (assignment + 5)
console.log("assignmnet is now", assignment);

assignment -= 5; //same as (assignment - 5)
console.log("assignmnet is now", assignment);


//Comparison Operators
let Comp1 = 6;
let Comp2 = "6";
console.log("comp1 == comp2 is", Comp1 == Comp2);
console.log("comp1 != comp2 is", Comp1 != Comp2);
console.log("comp1 === comp2 is", Comp1 === Comp2);
console.log("comp1 !== comp2 is", Comp1 !== Comp2);
console.log("comp1 > comp2 is", Comp1 > Comp2);


//Logical operators
let x = 5;
let y = 6;
console.log(x<y && x==5);//AND Operator
console.log(x>y || x==5);//OR Operator
console.log(!true);//NOT Operator
console.log(!false);//NOT Operator