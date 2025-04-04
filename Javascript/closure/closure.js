// what is closure?
/** A closure in JavaScript is a feature where a function remembers
    and can access variables from its outer(enclosing) scope 
    even after that outer function has finished executing.
*/

function count() {
    let count = 0
    return ++count
}
console.log(count())
console.dir(count)