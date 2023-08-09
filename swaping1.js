const prompt = require('prompt-sync')({ sigint:true });
let a = parseInt(prompt("Enter the first number: "));
let b = parseInt(prompt("Enter the second number: "));
let temp = 0;
temp = a;
a = b;
b = temp;
console.log(`The first number after swaping is ${a}`);
console.log(`The second number after swaping is ${b}`);