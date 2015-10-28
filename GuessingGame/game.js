// establish that 'i' will change as questions are guessed
var i = 0;

var name = prompt("Welcome! What's your name?");

alert("Welcome " + name + "! Let's play!");

// asking questions
var answer1 = prompt("Does Adin come from San Francisco?");
if (answer1 === "YES" || answer1 === "yes" || answer1 === "y" || answer1 === "Yes") {
	i++;
	alert("You're right!");
} else {
	alert("Sorry, you're wrong. Adin IS from San Francisco.");
}
console.log(answer1);
var answer2 = prompt("Does Adin speak Russian?"); 
if (answer2 === "NO" || answer2 === "no" || answer2 === "n" || answer2 === "No") {
	i++;
	alert("You're right!");
} else {
	alert("Sorry, you're wrong. Adin DOESN'T speak Russian.");
}
console.log(answer2);
var answer3 = prompt("Adin was a high school teacher before moving to PDX?");
if (answer3 === "YES" || answer3 === "yes" || answer3 === "y" || answer3 === "Yes") {
	i++;
	alert("You're right!");
} else {
	alert("Sorry you're wrong. Adin WAS a high school teacher.");
}
console.log(answer3);
alert("You guessed " + i + " right! Thank you for playing, " + name + "!");
