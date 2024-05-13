let startButton = document.querySelector(".start")

submitButton.addEventListener("mouseenter", () => {
	submitButton.innerText = "start quiz!";
});

submitButton.addEventListener("mouseout", () => {
	submitButton.innerText = "start quiz";
});