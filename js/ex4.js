const values = [3, 11, 7, 2, 9, 10];
sum = 0;
min = 9999999999999;
max = 0;
for(let i = 0; i < values.length; i++ ){
    sum += values[i];
    if (values[i] < min) {
        min = values[i];
    }
    else if (values[i] > max) {
        max = values[i];
    }
}
console.log("The sum of the values array is: ",sum);
console.log("The Minimum value is: ", min);
console.log("The Maximum value is: ", max);