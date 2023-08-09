const prompt = require('prompt-sync')({ sigint:true });
const num1 = parseInt(prompt("Enter the first number: "));
const num2 = parseInt(prompt("Enter the second number: "));
var quo=1,rem=1;
if(num1>num2)
{
    quo=num1/num2;
    rem=num1%num2;
}
else
{
    quo=num2/num1;
    rem=num2%num1;
}
console.log("The quotient of "+num1+" and "+num2+" is: "+quo);
console.log("The remainder of "+num1+" and "+num2+" is: "+rem);