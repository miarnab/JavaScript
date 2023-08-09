const prompt = require('prompt-sync')({ sigint:true });
const num = parseInt(prompt("Enter the number: "));
var squareRoot = Math.sqrt(num);
console.log(`The sqaure root of ${num} is ${squareRoot}`);