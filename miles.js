const prompt = require('prompt-sync')({ sigint:true });
const miles = parseInt(prompt("Enter the distance in miles: "));
const factor = (1/0.621371);
const kilometres = (miles * factor).toFixed(2);
console.log(`The distance in kilometres is ${kilometres}`);