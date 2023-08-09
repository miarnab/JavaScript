const prompt = require('prompt-sync')({ sigint:true });
const kilometres = parseInt(prompt("Enter the distance in kilometres: "));
const factor = 0.621371
const miles = (kilometres * factor).toFixed(2);
console.log(`The distance in miles is ${miles}`);