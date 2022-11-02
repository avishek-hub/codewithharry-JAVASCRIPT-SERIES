//Arrey Methods

//toSting()-    Will convert array from an object to a sting
let num = [1, 2, 34, 56]
let b = num.toString()  // b is now a string
console.log(b)
console.log(typeof b)  //The type of b is string

//join()-       Will join all the elements of array with _, and, or etc...
let c = num.join("_")
console.log(c, typeof c)

//pop()-     It removes/ pop out last element from the array
let r = num.pop()   //pop return the popped elements
console.log(num, r)
 
//push()-       Modify and add element to the origninal array and will return the new array length
let o = num.push(95)   //push returns the new array length
console.log(num, o)

//shift()-  //Removes first elements from the array and return it
let o = num.shift()   //shift returns the new array length
console.log(num, o)


//unshift()-  //Add first elements from the array and return it
let o = num.unshift()   //Unshift returns the new array length
console.log(num, o)