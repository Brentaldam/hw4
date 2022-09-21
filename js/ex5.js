

arry = []
word = String(prompt("Enter words one by one (Enter \"stop\" to exit the input):"));

while(word.toLowerCase() != "stop") {	
	arry.push(word);
	word = String(prompt("Enter words one by one (Enter \"stop\" to exit the input):"));
}
if(arry.length > 0){
	console.log("You entered the following words: "+ arry.join(", "));
}
else {
    console.log("No words to display, Stop was the first word entered.");
}
