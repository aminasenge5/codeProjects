// establish that 'i' will change as questions are guessed
var i = 0;

// asking questions
var answer1 = prompt("Does Adin come from San Francisco?");
if (answer1 === "YES") {
	i++;
	alert("You're right!");
} else {
	alert("Sorry, you're wrong. Adin IS from San Francisco.");
}
console.log(answer1);
var answer2 = prompt("Does Adin speak Russian?"); 
if (answer2 === "NO") {
	i++;
	alert("You're right!");
} else {
	alert("Sorry, you're wrong. Adin DOESN'T speak Russian.");
}
console.log(answer2);
var answer3 = prompt("Adin was a high school teacher before moving to PDX?");
if (answer3 === "YES") {
	alert("You're right!");
} else {
	alert("Sorry you're wrong. Adin WAS a high school teacher.");
}
console.log(answer3);
alert("You guessed " + i + " right!");
