let startButton = document.querySelector(".start")
let gradeInput = document.querySelector(".grade")

startButton.addEventListener("mouseenter", () => {
	startButton.innerText = "start quiz!";
});

startButton.addEventListener("mouseout", () => {
	startButton.innerText = "start quiz";
});

startButton.addEventListener("click", () => {
	if (gradeInput.value > 9 || gradeInput < 12 || gradeInput == "") alert("please enter a valid highschool grade")
	localStorage.setItem("grade", gradeInput.value)
});
