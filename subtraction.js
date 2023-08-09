const prompt = require('prompt-sync')({ sigint:true });
const num1 = parseInt(prompt("Enter the first number: "));
const num2 = parseInt(prompt("Enter the second number: "));
var diff=0;
if(num1>num2)
{
    diff = num1-num2;
}
else
{
    diff = num2-num1;
}
console.log("The difference between "+num1+" and "+num2+" is: "+diff);