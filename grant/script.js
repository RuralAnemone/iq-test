let submitButton = document.querySelector(".submit");

submitButton.addEventListener("mouseenter", () => {
	submitButton.innerText = "submit!";
});

submitButton.addEventListener("mouseout", () => {
	submitButton.innerText = "submit";
});

submitButton.addEventListener("click", () => {
	if (document.querySelector(".answer").value != "") {
		localStorage.grant = JSON.stringify({
			input: document.querySelector(".answer").value,
			correctAnswer: 16,
		});
		location = "/ur-done";
	} else alert("please enter an answer");
});

// when the user loses focus
window.addEventListener("blur", () => {
	document.title = "cheater (:";
	// alert("why would you cheat on this question out of all of them");
});

// when the user's focus is back to your tab (website) again
window.addEventListener("focus", () => {
	document.title = "fun quiz!";
});

