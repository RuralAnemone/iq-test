const hourHand = document.querySelector(".hour"),
  minuteHand = document.querySelector(".minute");

const updateTime = () => {
  let date = randomDate(),
    minToDeg = (date.getMinutes() / 60) * 360,
    hrToDeg = (date.getHours() / 12) * 360;

  minuteHand.style.transform = `rotate(${minToDeg}deg)`;
  hourHand.style.transform = `rotate(${hrToDeg}deg)`;
};

const randomDate = () => {
  return new Date(Math.floor(Math.random() * 60 * 60 * 24 * 1000) + 1);
}

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
