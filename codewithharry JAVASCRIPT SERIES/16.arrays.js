let marks_class_12 = [91, 83, 67, 56, false, "Not Present"]
console.log(marks_class_12[0]) //Output will be 91
console.log(marks_class_12[1])  //Output will be 83
console.log(marks_class_12[2])  //Output will be 67
console.log(marks_class_12[3])  // "        "
console.log(marks_class_12[4])  // "        "
console.log(marks_class_12[5])   // "        "
console.log(marks_class_12[6]) //Output will be undefined
console.log("The length of marks_class_12 is ", marks_class_12.length) // Output will be the lenght of the string

marks_class_12[6] = 89  //Adding a new value to the arrey
marks_class_12[6] = 92  //Changing the value of an array

console.log(marks_class_12)     // [91, 83, 67, 56, false, 'Not Present', 92]

//Arrays are mutable 
//Arrays can be changed

//String are immutable 
//String can be not changed