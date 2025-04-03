class Person {
    constructor(name, age) {
        this.name = name
        this._age = age
    }
    print() {
        console.log(this.name, this._age)
    }
}
const person = new Person("rayhan", 27)
console.log(person)

person.print()