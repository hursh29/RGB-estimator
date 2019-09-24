var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var chooseColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
 
function reset() {
	colors = generateRandomColors(numSquares);

	chooseColor = pickColor();
	colorDisplay.textContent = chooseColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = ""; 
	for(var i = 0; i < squares.length; i++) {
		 
			squares[i].style.background = colors[i];
		 
	}
	h1.style.background = "steelblue" ;
}

resetButton.addEventListener("click", function() {
	reset();
});

colorDisplay.textContent = chooseColor;
for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function() {
		 
		var clickedColor = this.style.background;
	 
		if(clickedColor === chooseColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}
  
function changeColors(color) {
	 
	for(var i = 0; i < squares.length; i++) { 
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * 6);
	return colors[random];
}

function generateRandomColors(num) {
	 
	var arr = [];
	for(var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	 
	return arr;
}

function randomColor() {
	 
	var r = Math.floor(Math.random() * 256); 
	var g = Math.floor(Math.random() * 256); 
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
