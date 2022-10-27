//  while loop

let n = prompt ("Enter the value of n") // Asking the value from the user
n = Number.parseInt(n)  //After takeing the value of "n" from the user; Converting the value of n to integer 

let i = 0; //Making a variable "i" and make the value of the variable "i" equal to 0

while(i<n){  //The progmramm will run untill the value of "i" is not less than "n"
    console.log(i)  //If the condition is true the value of i will het print

    i++; //The value of "i" will get incremented by 1
}


//Do While Loop

let n = prompt("Enter the value of n")
n = Number.parseInt(n)

let i = 0;
do{
    console.log(i)
    i++;
    }
    while (i < n)