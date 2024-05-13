let startButton = document.querySelector(".start")

startButton.addEventListener("mouseenter", () => {
	startButton.innerText = "start quiz!";
});

startButton.addEventListener("mouseout", () => {
	startButton.innerText = "start quiz";
});