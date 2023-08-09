const prompt = require('prompt-sync')({ sigint:true });
const num1 = parseInt(prompt("Enter the first number: "));
const num2 = parseInt(prompt("Enter the second number: "));
var prod = num1*num2;
console.log("The product of "+num1+" and "+num2+" is: "+prod);