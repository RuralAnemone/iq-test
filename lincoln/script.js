let submitButton = document.querySelector(".submit");

submitButton.addEventListener("mouseenter", () => {
	submitButton.innerText = "submit!";
});

submitButton.addEventListener("mouseout", () => {
	submitButton.innerText = "submit";
});

submitButton.addEventListener("click", () => {
	if (document.querySelector(".answer").value != "") {
		localStorage.lincoln = JSON.stringify({
			input: document.querySelector(".answer").value,
			correctAnswer: 16,
		});
		location = "/grant";
	} else alert("please enter an answer");
});

// when the user loses focus
window.addEventListener("blur", () => {
	document.title = "cheater (:";
	alert("uh oh you maybe cheated ):");
});

// when the user's focus is back to your tab (website) again
window.addEventListener("focus", () => {
	document.title = "fun quiz!";
});
