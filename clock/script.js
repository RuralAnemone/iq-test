// while (typeof submitButton == "undefined");
let submitButton = document.querySelector('.submit');

submitButton.addEventListener('mouseenter', () => {
	submitButton.innerText = 'submit!';
});

submitButton.addEventListener('mouseout', () => {
	submitButton.innerText = 'submit';
});

submitButton.addEventListener('click', () => {
	if (validateClockInput()) {
		localStorage.clock = JSON.stringify({
			input: document.querySelector('.hour-input').value + ':' + document.querySelector('.minute-input').value,
			correctAnswer: `${hours}:${minutes < 10 ? '0' : ''}${minutes}`,
		});
		location = '/lincoln';
	} else alert('please enter a valid time (:');
	console.log(`${hours}:${minutes < 10 ? '0' : ''}${minutes}`);
});

function validateClockInput() {
	let out = true;
	const hourInput = document.querySelector('.hour-input').value,
		minuteInput = document.querySelector('.minute-input').value;
	out &= !isNaN(hourInput) && !isNaN(minuteInput);
	out &= hourInput != '';
	out &= minuteInput.value != '';
	out &= hourInput >= 1 && hourInput <= 12;
	out &= minuteInput >= 0 && minuteInput <= 59;
	return out;
}

const hourHand = document.querySelector('.hour'),
	minuteHand = document.querySelector('.minute');

// let randomTime = Math.floor(Math.random() * 12 * 60); // 0 - 719
let randomTime = randomBetween(0, 719);
let minutes = randomTime % 60;
let hours = Math.floor(randomTime / 60) + 1;

const updateTime = () => {
	let minToDeg = (randomTime % 60) * (360 / 60),
		hrToDeg = (randomTime / 60 + 1) * (360 / 12);

	minuteHand.style.transform = `rotate(${minToDeg}deg)`;
	hourHand.style.transform = `rotate(${hrToDeg}deg)`;
};

const clockFace = document.querySelector('.clock');

for (let i = 0; i < 60; i++) {
	if (i % 5 == 0) continue;
	const tick = document.createElement('label');
	const tickText = tick.appendChild(document.createElement('span'));
	tickText.innerText = '-';
	tick.classList.add('fine-tick');
	tick.style.transform = `rotate(${i * 6}deg)`;
	clockFace.appendChild(tick);
}

// const timeDisplay = document.querySelector(".time-display");
// const hours = Math.floor(randomTime / 60);
// const minutes = randomTime % 60;
// const hoursString = hours == 0 ? "12" : [] + hours;
// const minutesString = `${minutes < 10 ? "0" : ""}${minutes}`;
// timeDisplay.innerText = `${hoursString}:${minutesString}`;

// when the user loses focus
window.addEventListener('blur', () => {
	document.title = 'cheater (:';
});

// when the user's focus is back to your tab (website) again
window.addEventListener('focus', () => {
	document.title = 'fun quiz!';
	randomTime = randomBetween(0, 719);
	minutes = randomTime % 60;
	hours = Math.floor(randomTime / 60) + 1;
	updateTime();
});

updateTime();
