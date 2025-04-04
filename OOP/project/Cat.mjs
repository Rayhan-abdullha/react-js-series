import Pet from "./Pet.mjs";

class Cat extends Pet {
    meow() {
      console.log(`${this.name} says: Meow! 🐱`);
    }
  
    play() {
      super.play();
      console.log(`${this.name} is chasing a laser pointer!`);
    }
}
export default Cat