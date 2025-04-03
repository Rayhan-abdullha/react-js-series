const Student = require("./Student");
const Teacher = require("./Teacher");
const Person = require("./Person");

const p1 = new Person("Rayhan", 27)
console.log(p1)
p1.print()

const s1 = new Student('Nazim', 27, "Computer Science 101", 4000)
console.log(s1)
s1.print()

const t1 = new Teacher("Abdullah", 26, "Math", 25000)
t1.name = "Fahim"
t1.print()
console.log(t1);
