const Person = require("./Person")

class Student extends Person{
    constructor(name, age, department,fee) {
        super(name, age)
        this.department = department
        this._fee = fee
    }
    get subject () {
        return this.department
    }
    get fee () {
        return this._fee
    }
    print() {
        console.log(this._name, this._age, this.department, this._fee)
    }
}
module.exports = Student