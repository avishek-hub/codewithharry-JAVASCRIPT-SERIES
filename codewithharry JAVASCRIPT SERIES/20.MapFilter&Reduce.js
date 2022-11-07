//  Array map method
let arr = [89, 154, 7]
let a = arr.map((value, index, array)=>{
    console.log(value, index, array)
    return value
})
console.log(a) 


//  Array Filter Method
let arr2 = [67, 12, 0, 3, 5]
let a2 = arr2.filter((a)=>{
    return a < 10
})
console.log(a2)


//  Array Reduce Methord
let arr3 = [1, 2, 3, 5, 2, 1]
let newarr3 = arr3.reduce((h1, h2)=> {
    return h1 + h2
})
console.log(newarr3)

