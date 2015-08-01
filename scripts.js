// scripts

var lorem = ["Lorem", "Ipsum", "Donec", "Sed", "odio", "dui", "Vivamus", "sagittis", "lacus", "vel", "augue", "laoreet", "rutrum", 
							  "faucibus", "facilisis", "Maecenas", "mattis", "magna", "diam", "eget", "risus", "varius", "blandit", "sit", "amet"];

var count;
function getNum() {
	count = document.getElementById('numWords').value;
	// alert(num); recieves the value
}

var loremString = "";
// alert(loremString); recognizes original value
var place;
var random;

function makeString() {
	for (i=0;i<count;i++) {
		randomNum();
		loremString += (lorem[random] + " ");
	}

	return loremString;
}

function upperCase() {
	loremString = loremString.toUpperCase();

	return loremString;

}

function randomNum() {

	random = Math.floor((Math.random()*lorem.length-1)+1);

	return random;

}

function printWords() {
	document.getElementById('textArea').innerHTML = loremString + " ";
}
