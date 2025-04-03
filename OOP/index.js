class Person {
    static PI = 3.1416
    constructor(name, age) {
        this.name = name
        this._age = age
    }
    print() {
        console.log(this.name, this._age)
    }
    static print() {
        this.nam
    }
    
}
const p1 = new Person("rayhan", 27)

Person.print()
console.log(Person.PI);

