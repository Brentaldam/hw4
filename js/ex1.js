const num1 = String(prompt("Enter first number : "));
const num2 = String(prompt("Enter second number : "));
const operand = String(prompt("Enter a Mathematical Operation (+, -, *, /): "));
ans = "";
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
console.log( num1, operand, num2,"=", ans);
