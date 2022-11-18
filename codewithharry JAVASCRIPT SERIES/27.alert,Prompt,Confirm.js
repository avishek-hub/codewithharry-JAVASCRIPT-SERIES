alert(" Hello your script works")   //Used to invoke a mini window with a message

prompt("Enter a number")           //Used to take user input as string


let a = prompt("Enter your phone number", "0987654321")     //"0987654321" this is how you can put default value which can be put in the prompt
alert("The typer of the number is " + (typeof a))   //Typerof the number entered will be string

let a = parseInt(prompt("Enter your phone number"))
alert("The typer of the number is " + (typeof a))   //Typeof the number entered will be number as parseInt is used

let a = confirm("Do you want to enter your phone number")       //Will show a [OK] [cancel] options along with the dialogue box





let a = confirm("Do you want to enter your phone number")       //Small exercise to understand  alert, prompt and confirm
if (a){
    prompt("Enter your phone number", "0987654321")
}
else {
    alert("Your cannot go further without entering your phone number")
}