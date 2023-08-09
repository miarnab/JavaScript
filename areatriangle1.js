const prompt = require('prompt-sync')({ sigint:true });
const base = parseInt(prompt("Enter the base: "));
const height = parseInt(prompt("Enter the height: "));
var area = (1/2)*base*height;
console.log("The area of the triangle is: "+area);