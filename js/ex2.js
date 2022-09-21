const temp1 = String(prompt("Enter A tempeture in Farenheit: "));
const celsius = Math.round((temp1 - 32)*(5/9));
console.log(temp1, "Farenheit in Celsius is: ", celsius, "C");