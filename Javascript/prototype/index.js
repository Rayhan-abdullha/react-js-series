function Person(name, age) {
    this.name = name
    this.age = age
}

function Cricketer(name, age, type, country) {
    Person.call(this, name, age)
    this.type = type
    this.country = country
}

Person.prototype.print = function () {
    console.log(this.name, this.age)
}

Cricketer.prototype = Object.create(Person.prototype)
Cricketer.prototype.constructor = Cricketer

const cricketer = new Cricketer("virat", 30, "batsman", "india")

console.log(cricketer)