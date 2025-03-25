const EventEmitter = require('events')
const eventEmitter = new EventEmitter();

// eventEmitter.on("order", (item) => {
//     console.log(`Order received for ${item}`);
// });

// eventEmitter.on("order", (item) => {
//     console.log(`Processing ${item}...`);
// });

// Emitting the event
// eventEmitter.emit("order", "Laptop");

const greet = (name) => console.log(`Hello, ${name}!`);
eventEmitter.on("greet", greet);

// Remove listener
eventEmitter.removeListener("greet", greet);
eventEmitter.emit("greet", "Rayhan");
