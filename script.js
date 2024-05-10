const hourHand = document.querySelector(".hour"),
  minuteHand = document.querySelector(".minute");

const updateTime = () => {
  let randomTime = Math.floor(Math.random() * 12 * 60), // 0 - 719
    minToDeg = (randomTime % 60) * (360 / 60),
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
