const num1 = Number(prompt("Enter first number : "));
const num2 = Number(prompt("Enter second number : "));
var operand = String(prompt("Enter a Mathematical Operation (+, -, *, /): "));
var ans = "";
if(operand === "+"){
ans = num1 + num2;
}
else if(operand === "-"){
 ans = num1 - num2;
}
else if(operand === "*"){
    ans = num1 * num2;
}
else{
    ans = num1 / num2; 
}
console.log( `${num1} ${operand} ${num2} = ${ans}`);
