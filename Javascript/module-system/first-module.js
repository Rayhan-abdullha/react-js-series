function add(a, b) {
    if (a === undefined || b === undefined) {
        throw new Error('a and b are required')
    }
    if (a === 0 || b === 0) {
        throw new Error('a and b cannot be 0')
    }
    if (typeof a !== 'number' || typeof b !== 'number') {   
        throw new Error('a and b must be numbers')
    }   
    if (a < 0 || b < 0) {
        throw new Error('a and b must be positive')
    }
    return a + b
}

function subtract (a, b) {
    return a - b
}

function multiply (a, b) {
    return a * b
}

module.exports = {
    add,
    subtract,
    multiply
}