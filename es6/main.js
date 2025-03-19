'use strict';
function getName() {
    return "rayhan"
}
let name = "zhangsan" || getName()

const res = name || getName()
// console.log(res, n)

// Templete literals
const nam = "rayhan"
const age = 27
const str = `my name is ${nam}, age is ${age}`
// console.log(str)

// Destructuring
let arr = [1, 2, 3]
let [a, b, c] = arr
// console.log(a, b, c)

let obj = {
    name: "rayhan",
    age: 27
}
let { name: myName, age: myAge } = obj
// console.log(myName, myAge)

// Spread operator
let arr2 = [1, 2, 3]
let arr3 = [4, 5, 6]
let arr4 = [...arr2, ...arr3]
// console.log(arr4)

// Rest operator
let arr5 = [1, 2, 3]
let [a1, ...arr6] = arr5
// console.log(a1, arr6)

// Arrow function    
let arr7 = [1, 2, 3]
const myFunc = (array) => {
    console.log(array)
}

// myFunc(arr7)

// default parameter
const myFunc2 = (name = "rayhan") => {
    console.log(name)
}
// myFunc2()

// Class