//Write a program to print the marks of a student in an object using for loop

// let marks = { 
// avishek : "95",
// manav : "45",
// dweep : "36",
// rohan : "56"
// }

// for (i < 100)
// console.log ("Marks of " + a + "are " + marks[a])


/*
let marks = { 
avishek : "95",
manav : "45",
dweep : "36",
rohan : "56"
}

let i, len, text;
for (i = 0, len = marks.length, text = ""; 
i < len; i++) {
  text += marks[i] + "<br>";
}
*/

// Write the program in Q1 using for in loop.
/*let marks = { 
    avishek : "95",
    manav : "45",
    dweep : "36",
    rohan : "56"
    }
    
    for (let key in marks)
    console.log ("Marks of " + key + "are " + marks[key])
    
    */


    //Write a program to print "try again" until the user enter the correct number.

/*let num = promt("Hey, enter a number");

    for (let i > 0, i < 5, text = "")
{
    console.log("Try again");
}*/

//CORRECTIONS

//Q1. Write a program to print the marks of a student in an object using for loop

let marks = { 
    avishek : "95",
    manav : "45",
    dweep : "36",
    rohan : "56"
    }
for(let i=0; i<Object.keys(marks).length; i++){//Object.keys(marks) will print avishek, manav, dweep, rohan (array) and .length will print the values 95, 45, 36, 56.
console.log("The marks of " + Object.keys(marks)[i] + "are " + marks[Object.keys(marks)[i]])
}


//Q2. Write the program in Q1 using for in loop.
let mark = { 
    avishek : "95",
    manav : "45",
    dweep : "36",
    rohan : "56"
    }
    
    for (let key in mark)
    console.log ("Marks of " + key + "are " + mark[key])
 
    
//Q3. Write a program to print "try again" until the user enter the correct number.
let cn = 4 //The correct number is 4
let i;  // making a veriable named i
while (i != 4)  //untill the number given by the user is same as 4
{
    i = prompt("Enter the correct number") // keep on prompting (asking) the value of i as an input, from the user 
    console.log("Try Again")
}
console.log("Correct number is 4")


//Q4. Write a function to find mean of 5 numbers.

 const mean = (a, b, c, d) => {
    return (a + b + c + d) / 4
 }

 console.log(mean(4, 5, 6, 7))