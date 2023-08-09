const prompt = require('prompt-sync')({ sigint:true });
let a = parseInt(prompt("Enter the first number: "));
let b = parseInt(prompt("Enter the second number: "));
let c = parseInt(prompt("Enter the third number: "));
let root1,root2;
let discriminant = Math.pow(b,2)-(4*a*c);
if(discriminant>0)
{
    root1 = (-b+(Math.sqrt(discriminant)))/(2*a);
    root2 = (-b-(Math.sqrt(discriminant)))/(2*a);
    console.log(`The roots of the quadratic equation are ${root1} and ${root2}`);
}
else if(discriminant==0)
{
    root1=root2=(-b)/(2*a);
    console.log(`The roots of the quadratic equation are ${root1} and ${root2}`);
}
else
{
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
    console.log(`The roots of the quadratic equation are ${realPart} and ${imagPart}`);
}
