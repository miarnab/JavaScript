const prompt = require('prompt-sync')({ sigint:true });
const a = parseInt(prompt("Enter the first side: "));
const b = parseInt(prompt("Enter the second side: "));
const c = parseInt(prompt("Enter the third side: "));
var s = (a+b+c)/2;
var area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
console.log(`The area of the triangle is ${area}`);