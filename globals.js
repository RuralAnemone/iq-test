function randomBetween(low, high) {
	if (low == high) return low;
	if (low > high) [low, high] = [high, low]; // swap them!!

	return Math.floor(Math.random() * (high - low + 1) + low);
}