class Person {
    #name
    #age
    constructor(name, age) {
        this.#age = age
        this.#name = name
    }
    print() {
        console.log(`My name is ${this.#name}. age is ${this.#age}`)
    }
}
class Teacher extends Person {
    constructor(name, age, sub, salary) {
        super(name, age)
        this.sub = sub
        this.salary = salary
    }
    print2() {
        super.print()
    }
}
const sakib = new Teacher('Rayhan', 27, 'English', 25000)
sakib.print()
sakib.print2()
