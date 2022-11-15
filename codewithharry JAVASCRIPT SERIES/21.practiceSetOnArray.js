//  Q1. Create an array of number and take input from the user to add number to this array.
let a = [1, 2, 3, 4 , 56]
let arr = prompt("Enter a number to add in the array")
a.push(arr)
console.log (a)

//  Q2. Keep adding numbers to the array in (1) until 0 is added to the array.
let a = [1, 2, 3, 4 , 56]
let arr;
do  {
arr = prompt("Enter a number to add in the array")
arr = Number.parseInt(arr)
a.push(arr)
console.log (a)
}
while (a != 0);
console.log(a)

//  Q3. Filter for number divisible by 10 from a given array.
let arr2 = [89, 20, 48, 50]
let a2 = arr2.filter((a)=> {
    return a%10 == 0
})
console.log(a2)

//  Q4. Create an array of square of given number.
let arr = [2, 3, 4, 5]
arr.map ((value, index, array) =>{
    return value * value
})

//  Q5. Use reduce to calculate factorial of a given number from an array of first an array of first n natural number (n being the number whose factorial needs to be calculated)

let arr = [1, 2, 3, 4, 5]
let n = arr.reduce((x1, x2) => {
return x1 * x2
})
console.log(n)