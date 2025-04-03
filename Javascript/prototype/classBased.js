class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    print() {
        console.log(this.name, this.age)
    }
}
class Cricketer extends Person {
    constructor(name, age, type, country) {
        super(name, age)
        this.type = type
        this.country = country
    }
    play() {
        console.log(this.name, this.type)
    }
}

const cricketer = new Cricketer("virat", 30, "batsman", "india")

console.log(cricketer)