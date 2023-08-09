const prompt = require('prompt-sync')({ sigint:true });
const num = parseInt(prompt("Enter the number: "));
var sqaure = Math.pow(num,2);
console.log(`The sqaure of ${num} is ${sqaure}`);