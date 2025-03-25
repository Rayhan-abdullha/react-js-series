// write callback function

function getUsers (url) {
    const res = fetch(url).then(res => res.json())
    res.then(data => console.log(data.slice(0, 1)))  
}

function res(url, callback) {
    console.log('hello')
    callback(url)
}
const url = 'https://jsonplaceholder.typicode.com/users'
// res(url, getUsers)

function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Rayhan", sayGoodbye);
