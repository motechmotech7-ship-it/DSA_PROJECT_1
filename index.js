// import { greet, farewell } from "./greetings.js";
// import bookings from "./objects.js";
import Counter from "./class.js";     

// const name = "Alice";
const counter = new Counter();

// console.log(greet(name));
// console.log("\n");
// console.log(farewell(name));
// console.log("\n");
// console.log(bookings.get('G3SL3   ')); 
// console.log("\n");
console.log(counter.getvalue() );
counter.increement();           
console.log(counter.getvalue() );

