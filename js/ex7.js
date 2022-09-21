var num = prompt("Guess the random number 1 - 100, inclusive:");
var ran = Math.floor(Math.random() * 100);
console.log(ran);
var count = 1;
while(num !== ran)
{
    if(num == ran)
    {
        console.log("Correct!  It took you",count,"attempts to guess the correct number.");
        break;
    }
    else if(num < ran)
    {
        num = prompt("Too low, guess again");
    }
    else{
        num = prompt("Too high, guess again");
    }
    count ++
}