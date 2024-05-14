let submitButton = document.querySelector(".submit");
let ordinalSpan = document.querySelector(".ordinal");

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
	} else alert("please enter a number");
});

function numToOrdinal(num) {
	let suffix;
	num = Math.abs(num);
	if (num % 10 === 1 && num % 100 !== 11) {
		suffix = "st";
	} else if (num % 10 === 2 && num % 100 !== 12) {
		suffix = "nd";
	} else if (num % 10 === 3 && num % 100 !== 13) {
		suffix = "rd";
	} else {
		suffix = "th";
	}
	return suffix;
}

// when the user loses focus
window.addEventListener("blur", () => {
	document.title = "cheater (:";
	// alert("uh oh you maybe cheated ):");
});

// when the user's focus is back to your tab (website) again
window.addEventListener("focus", () => {
	document.title = "fun quiz!";
});

// document.querySelector(".answer").addEventListener("change", () => {
setInterval(() => {
	ordinalSpan.textContent = numToOrdinal(document.querySelector(".answer").value);
}, 50);
