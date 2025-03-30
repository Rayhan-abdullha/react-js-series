
console.log('first')
function add(cb) {
    console.log('before callback')
    cb()
    console.log('after callback')
}
add()

function callback() {
    console.log('callback')
}
console.log('hello')