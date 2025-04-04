// Function to perform a simple calculation
function calculate(value) {
    return value * 2; // Simple calculation: double the input
}

// Initial variable set to null
let result = null;

// Using the Safe Assignment Operator to assign the calculated value
result ??= calculate(5); // Assigns 10 if result is null

// Alerting the result
// console.log(result); // This will alert "10"

const arr = [10, 20, 30, 40, 50, 60];
delete arr[1]; 
// console.log(arr)

let pattern = /\d+/g; // Matches pair of digits
let str = "10, 20, 30, 40, 50";
console.log(pattern)
let res = str.replace(pattern, "100")
console.log(res)

const m = new Map();
m.set('a', 1);
m.set('b', 2);
m.set('c', 3);
m.set('d', 4);
m.set('b', 20)
console.log(m)