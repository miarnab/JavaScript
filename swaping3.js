const prompt = require('prompt-sync')({ sigint:true });
let a = parseInt(prompt("Enter the first number: "));
let b = parseInt(prompt("Enter the second number: "));
a = a+b;
b = a-b;
a = a-b;
console.log(`The first number after swaping is ${a}`);
console.log(`The second number after swaping is ${b}`);