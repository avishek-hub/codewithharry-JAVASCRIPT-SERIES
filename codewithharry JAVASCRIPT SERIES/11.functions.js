function onePlusAvg (x, y) {
    return 1 + (x + y) / 2
}


let a = 1;
let b = 2;
let c = 3;

console.log("One plus Avarage of a and b is ", onePlusAvg(a, b))
console.log("One plus Avarage of b and c is ", onePlusAvg(b, c))
console.log("One plus Avarage of c and a is ", onePlusAvg(c, a)) 


//ARROW FUNCTIONS
//New way of wirting function (Arrow Function)

const sum = (a,b) => {
    let c = a + b;
    return c;
}

let y = sum (1 , 3)
console.log (y)