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

// forEach, map, filter, reduce, find, every, some, findIndex, indexOf, lastIndexOf, includes, slice, splice, sort, reverse, split, join, concat, push, pop, shift, unshift, copyWithin, fill, entries, keys, values
const arr8 = [1, 2, 3, 4, 3, 5]

// forEach
arr8.forEach((item) => {
    if (item % 2 === 0) {
        // console.log(item)
    }
})

// map
const arr9 = arr8.map((item) => item * 2)
// console.log(arr9)

// filter
const arr10 = arr8.filter((item) => item % 2 !== 0)
// console.log(arr10)

// reduce
const arr11 = arr8.reduce((acc, item) => {
    acc.total += item
    return acc
}, { total: 0 })
// console.log(arr11)

// find
const arr12 = arr8.find((item) => item === 3)
// console.log(arr12)

// every
const arr13 = arr8.every((item) => item % 2 === 0)
// console.log(arr13)

// some
const arr14 = arr8.some((item) => item % 2 === 0)
// console.log(arr14)

// findIndex
const arr15 = arr8.findIndex((item) => item === 3)
// console.log(arr15)

// indexOf
const arr16 = arr8.indexOf(3)
// console.log(arr16)

// lastIndexOf
const arr17 = arr8.lastIndexOf(3)
// console.log(arr17)

// firstIndexOf
const arr18 = arr8.lastIndexOf(3)
// console.log(arr17)

// includes
const arr19 = arr8.includes(3)
// console.log(arr19)

// slice
const arr20 = arr8.slice(1, 3)
// console.log(arr20)

// splice
const arr21 = arr8.splice(0, 3, 10, 20, 30)
console.log(arr21)







// Set, Map, WeakSet, WeakMap
