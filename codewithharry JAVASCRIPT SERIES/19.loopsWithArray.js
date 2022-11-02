//Looping through Array

//For Loop   {old methord}
let num = [3, 5, 9, 6, 5] 
for(let i = 0; i<num.length;i++){
    console.log(num[i])   
}

//ForEach Loop
let num = [3, 5, 9, 6, 5] 
num.forEach((Element) =>    {
    console.log(Element * Element)
})

//Arrat.from-       Used to create/ convert an array from any other object
let name = "avishek"
let arr = Array.from(name)
console.log(arr)

// for...of
let num = [3, 5, 9, 6, 5] 
for (let i of num){
    console.log(i)
}


// for...in
let num = [3, 5, 9, 6, 5] 
for (let i in num){
    console.log(num[i])
}