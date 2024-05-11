const hourHand = document.querySelector(".hour"),
  minuteHand = document.querySelector(".minute");

const randomTime = Math.floor(Math.random() * 12 * 60) // 0 - 719

const updateTime = () => {
  let minToDeg = (randomTime % 60) * (360 / 60),
    hrToDeg = (randomTime / 60) * (360 / 12);

  minuteHand.style.transform = `rotate(${minToDeg}deg)`;
  hourHand.style.transform = `rotate(${hrToDeg}deg)`;
};

updateTime();

const clockFace = document.querySelector(".clock");

for (let i = 0; i < 60; i++) {
  if (i % 5 == 0) continue;
  const tick = document.createElement("label");
  const tickText = tick.appendChild(document.createElement("span"));
  tickText.innerText = "-";
  tick.classList.add("fine-tick");
  tick.style.transform = `rotate(${(i * 6)}deg)`;
  clockFace.appendChild(tick);
}

const timeDisplay = document.querySelector(".time-display");
const hours = Math.floor(randomTime / 60);
const minutes = randomTime % 60;
const hoursString = hours == 0 ? "12" : []+hours;
const minutesString = `${minutes < 10 ? "0" : ""}${minutes}`;
timeDisplay.innerText = `${hoursString}:${minutesString}`;
