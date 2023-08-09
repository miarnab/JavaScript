const prompt = require('prompt-sync')({ sigint:true });
const num = parseInt(prompt("Enter the number: "));
var cube = Math.pow(num,3);
console.log(`The cube of ${num} is ${cube}`);