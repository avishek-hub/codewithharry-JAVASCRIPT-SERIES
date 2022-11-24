//  Q1)Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive!

//input--> age using prompt
//output--> can drive or not using alert

let age = prompt("Enter your age")
age = Number.perseInt(age)      //correction #1
if (age < 18){
    alert("You are not allowed to drive")
}
else if (age >= 18){
    alert("You are allowed to drive")
}
else{
    alert("Your age is not valid")
}


//  Q2)In Q1 use confirm to ask the user if he wants to see the prompt again.
do{
let age = prompt("Enter your age")

if (age < 18){
    alert("You are not allowed to drive")
}
else if (age >= 18){
    alert("You are allowed to drive")
}
else{
    alert("Your age is not valid")
}
let a = confirm("Do you want to continue furthur?") 
}
while (a = confirm){
    let age = prompt("Enter your age")

if (age < 18){
    alert("You are not allowed to drive")
}
else if (age >= 18){
    alert("You are allowed to drive")
}
else{
    alert("Your age is not valid")
}
}



//  Q3)In the previous question, use console.erroe to log the error if the age entered negitive
do{
    let age = prompt("Enter your age")
    
    if (age < 18){
        alert("You are not allowed to drive")
    }
    else if (age >= 18){
        alert("You are allowed to drive")
    }
    else (age <= 0);{
        console.error("The number entered is negitive and unvalid")
    }
    let a = confirm("Do you want to continue furthur?") 
}
while (a = true){
    let age = prompt("Enter your age")
    
    if (age < 18){
        alert("You are not allowed to drive")
    }
    else if (age >= 18){
        alert("You are allowed to drive")
    }
    else (age < 0);{
        console.error("The number entered is negitive and unvalid")
    }
}




//  Q4)Write a program to change the url to google.com (Redirection) if user enters a number greater than 4.
let num = prompt("Enter any number of your choise")
num = Number.parseInt(num)  //correction

if (num >= 4){
    window.open("https://www.google.com");
}


//  Q5)Change the background of the page to yellow, red or any other color based on the user input through prompt.

let col = prompt("Enter any number between 0 to 9")
col = Number.parseInt(col) 
if (col = 0){
    document.body.style.background = "yellow"
}
else if (col = 1){
    document.body.style.background = "red"
}
else if (col = 2){
    document.body.style.background = "green"
}
else if (col = 3){
    document.body.style.background = "orange"
}
else if (col = 4){
    document.body.style.background = "purple"
}
else if (col = 5){
    document.body.style.background = "blue"
}
else if (col = 6){
    document.body.style.background = "grey"
}
else if (col = 7){
    document.body.style.background = "black"
}
else if (col = 8){
    document.body.style.background = "lemon green"
}
else (col = 9);{
    document.body.style.background = "pink";
}


//  Q5) CORRECTION / ALTERNATIVE
let color = prompt("Type any color of youre choise")
document.body.style.background = color;