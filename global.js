let submitButton = document.querySelector(".submit")

submitButton.addEventListener("mouseenter", () => {
	submitButton.innerText = "submit!";
});

submitButton.addEventListener("mouseout", () => {
	submitButton.innerText = "submit";
});