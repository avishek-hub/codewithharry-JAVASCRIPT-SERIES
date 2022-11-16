console.log(console)    //Will list down all the conssoles
   
console.log("Hey")              //Will print Hey
console.error("Hey Avishek")    //Will show in red error message
console.assert(5<8)             //Used to assert any conditions statements
console.clear                   //will clear the console tab

obj = {a:1, b:2, c:3}
console.table(obj)              //Display a tabular data

console.warn("Hey, Dont drink alchohol")//Will show yellow warning message
console.info("Hey, this ia a special info")//Used for special informations

console.time("p1")
console.timeEnd("p1")            //Gives the time(milli sec) between console.time("p1") and console.timeEnd("p1")   
