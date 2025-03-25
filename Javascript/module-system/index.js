const {add} = require('./first-module')

function res({ a = 0, b = 0 }) {
    try {
        const res = add(a, b)
        console.log(res)
    } catch (err) {
        console.error(err.message)
    }
}
res({})