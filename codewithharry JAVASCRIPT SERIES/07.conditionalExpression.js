let a1 = prompt("Hey whats your age?");//The prompt() method displays a dialog box that prompts the user for input.

alert("What's your age");  //The alert() method displays an alert box with a message and an OK button.//

//PROMPT will ask you quistion. And ALERT will say you statement.//


a = Number.parseInt(a) //ParseInt Converts the STRING into a NUMBER 
console.log(typeof a);



//if....else statement
let a = prompt("Hey whats your age?");
if (a < 18) {
    greeting = ("You cannot drive sir");
  }
  else{
    alert = ("You can drive sir. Have a safe drive.");
  }



  //if...else .... if .... else statement
  let age = prompt("Hey what is your age");
  if (age < 0){
    console.log("This is a valid age")
  } 
  else if(age > 3 && age<22){
    console.log("You should get educate");
  }

  else if (age>20 || age<30){
    console.log("Have laser focus on your career");
  }
  else {
    console.log("It's a unvalid age")
  }


  //    Ternaey Operator
  let age1 = prompt("Hey what is your age");

  console.log("You can", age1<18? "not drive" : "drive");