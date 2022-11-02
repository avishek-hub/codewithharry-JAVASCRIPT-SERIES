//Arrey Methods Part #2

//delete-       Arrey elements can be delered using the delete operator
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
let num_even_more = [21, 22, 23, 24, 25, 26, 27, 28, 29]
delete num[0]
console.log(num) 
console.log(num.length) // The length of the array remains same

//Concat()-     To add/ join array to the given array
let newArray = num.concat(num_more, num_even_more)
console.log(newArray) //Return a new array
console.log(num, num_more)  //Does not change existing arrays

// Sort()-      Sort() methord is used to sort an array alphabatically
let p = [1, 8, 6, 3, 4]
console.log(p.sort())   //Modify to original array

//Sort()-   Decending order
let compare = (a, b)=>{
    return b - a
}
let num = [887, 56, 89, 24, 65, 633, 587]
num.sort(compare)
console.log(num)

//Sort()-   Accending order
let compare = (a, b)=>{
    return a - b
}
let num = [887, 56, 89, 24, 65, 633, 587]
num.sort(compare)       
console.log(num)

//Reverse()-    Reverse the elements in the sourse
let num = [887, 56, 89, 24, 65, 633, 587]  
console.log(num)        
console.log(num.reverse())      //Changes the original array

//Splice and Slice
//Splice()-     Splice can be used to add new itmes to an array
let num = [551, 89, 65,35,89,13,454]        //Returns, deletes the items, Modifies the soruse array
num.splice(2,3,1023,1078,1056,1096)         //2:- Position to add       3:- No.of elements to remove        1023,1078,1056,1096:- Elements to add
console.log(num)

let deletedValues = num.splice(2,3,1023,1078,1056,1096)         
console.log(deletedValues)      //Will return the values numbers which is deleted


//Slice()-      Slice out a piece from an array.    It creates a new array
let num = [551, 89, 65,35,89,13,454]  
let newNum = num.slice(3, 5)    //It does not modify the original array.    It creates new array
console.log(newNum)


