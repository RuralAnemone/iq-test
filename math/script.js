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
		input: document.querySelector(".answer").value,
		correctAnswer: firstNumber + secondNumber,
	});
	location = "/clock";
});

function randomize() {
	firstNumber = randomBetween(10, 99);
	secondNumber= randomBetween(10, 99);

	problemText.textContent = `${firstNumber} + ${secondNumber}`;
}

randomize();

// when the user loses focus
window.addEventListener("blur", () => {
	document.title = "cheater (:";
});

// when the user's focus is back to your tab (website) again
window.addEventListener("focus", () => {
	document.title = "fun quiz!";
	randomize();
});