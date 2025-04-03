class Person {
    constructor(name, age) {
        this._name = name
        this._age = age
    }
    get name() {
        return this._name
    }
    get age() {
        return this._age
    }
    print() {
        console.log(this._name, this._age)
    }
}
module.exports = Person