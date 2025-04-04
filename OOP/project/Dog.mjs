import Pet from "./Pet.mjs";

  // Dog class extends Pet
  class Dog extends Pet {
    bark() {
      console.log(`${this.name} says: Woof! 🐶`);
    }
  
    play() {
      super.play();
      console.log(`${this.name} is playing fetch!`);
    }
}
export default Dog