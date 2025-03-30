'use strict'
var a = 40
{
    a = 5

    let b = 10
}
console.log(a)

function add() {
    a = 20
    console.log(a)
}

add()
console.log(a);