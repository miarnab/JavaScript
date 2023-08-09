const prompt = require('prompt-sync')({ sigint:true });
let a = parseInt(prompt("Enter the first number: "));
let b = parseInt(prompt("Enter the second number: "));
[a,b] = [b,a];
console.log(`The first number after swaping is ${a}`);
console.log(`The second number after swapimh is ${b}`);