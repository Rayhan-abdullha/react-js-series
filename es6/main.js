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
// console.log(arr21)

// sort
const arr22 = arr8.sort((a, b) => a - b)
// console.log(arr22)

// reverse
const arr23 = arr8.reverse()
// console.log(arr23)

// split
const str2 = "hello world"
const arr24 = str2.split(" ")
// console.log(arr24)

// join
const arr25 = ["hello", "world"]
const str3 = arr25.join(" coder ")
// console.log(str3)

// concat   
const arr26 = [1, 2, 3]
const arr27 = [4, 5, 6]
const arr28 = arr26.concat(arr27)
// console.log(arr28)

// push
const arr29 = [1, 2, 3]
arr29.push(4, 5, 6)
// console.log(arr29)

// pop
const arr30 = [1, 2, 3]
arr30.pop()
// console.log(arr30)

// shift
const arr31 = [1, 2, 3]
arr31.shift()
// console.log(arr31)

// unshift
const arr32 = [1, 2, 3]
arr32.unshift(4, 5, 6)
// console.log(arr32)

// copyWithin
const arr33 = [1, 2, 3, 4, 5]
arr33.copyWithin(0, 2)

// fill
const arr34 = [1, 2, 3, 4, 5]
arr34.fill(0, 2, 4)
// console.log(arr34)

// entries, keys, values
const obj2 = {
    name: "rayhan",
    age: 27
}
const arr35 = Object.entries(obj2)
const arr36 = Object.keys(obj2)
const arr37 = Object.values(obj2)
// console.log(arr35)



async function getUsr(url) {
    if (!url) {
        console.log("Please provide a url")
        return
    }
    if (typeof url !== 'string') {
        console.log('Please provide a valid url')
        return
    }
    try {
        const apiResponse = await fetch(url)
        const data = await apiResponse.json()
        console.log(data.slice(0,2))
    } catch (err) {
        console.log(err)
    }
}

getUsr("https://jsonplaceholder.typicode.com/users")





// Set, Map, WeakSet, WeakMap
