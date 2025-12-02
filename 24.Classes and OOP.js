class Animal {
  constructor(name) {
    this.name = name; // Property: name
  }
  speak() {
    console.log(`${this.name} makes a sound.`); // Method: speak
  }
}

let dog = new Animal("Dog"); // Create an object called dog
dog.speak(); // Output: Dog makes a sound.