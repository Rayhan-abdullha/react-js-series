class Pet {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.hunger = 50;
      this.happiness = 50;
    }
  
    feed() {
      this.hunger -= 10;
      this.happiness += 5;
      console.log(`${this.name} has been fed.`);
    }
  
    play() {
      this.happiness += 10;
      this.hunger += 5;
      console.log(`${this.name} is playing!`);
    }
  
    info() {
      console.log(`${this.name} is ${this.age} years old. Hunger: ${this.hunger}, Happiness: ${this.happiness}`);
    }
}
export default Pet