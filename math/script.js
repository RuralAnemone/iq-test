let submitButton = document.querySelector(".submit");
let problemText = document.querySelector(".problem").querySelector("p");
let firstNumber, secondNumber = 0;

submitButton.addEventListener("mouseenter", () => {
	submitButton.innerText = "submit!";
});

submitButton.addEventListener("mouseout", () => {
	submitButton.innerText = "submit";
});

submitButton.addEventListener("click", () => {
	localStorage.math = JSON.stringify({
		input: document.querySelector(".hour-input").value + ":" + document.querySelector(".minute-input").value,
		correctAnswer: randomTime,
	});
	location = "/clock";
});

function randomize() {
	firstNumber = Math.floor(Math.random() * (99-10) + 10);
	secondNumber= Math.floor(Math.random())
}

// when the user loses focus
window.addEventListener("blur", () => {
	document.title = "cheater (:";
});

// when the user's focus is back to your tab (website) again
window.addEventListener("focus", () => {
	document.title = "fun quiz!";
	randomize();
});