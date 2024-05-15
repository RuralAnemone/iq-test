let startButton = document.querySelector('.start');
let gradeInput = document.querySelector('.grade');

startButton.addEventListener('mouseenter', () => {
	startButton.innerText = 'start quiz!';
});

startButton.addEventListener('mouseout', () => {
	startButton.innerText = 'start quiz';
});

startButton.addEventListener('click', () => {
	if (gradeInput.value < 9 || gradeInput.value > 12 || gradeInput.value == '') alert('please enter a valid highschool grade');
	else {
		localStorage.setItem('grade', gradeInput.value);
		location = '/math/index.html';
	}
});
