function randomBetween(low, high) {
	if (low == high) return low;
	if (low > high) [low, high] = [high, low]; // swap them!!

	return Math.floor(Math.random() * (high - low + 1) + low);
}

isCheating = false;

window.addEventListener('blur', () => {
	if (!isCheating) localStorage.setItem('timesCheated', +localStorage.getItem('timesCheated') + 1);
	isCheating = true;
});

window.addEventListener('focus', () => {
	isCheating = false;
});
