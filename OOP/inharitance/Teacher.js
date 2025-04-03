const Person = require("./Person")

class Teacher extends Person {
    constructor(name, age, subject, salary) {
        super(name, age)
        this._subject = subject
        this._salary = salary
    }
    get subject () {
        return this._subject
    }
    get salary () {
       return this._salary
    }
    set name (name) {
        this._name = name
    }
    print() {
        console.log(this._name, this._age, this._subject, this._salary)
    }
}
module.exports = Teacher