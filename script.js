const hourHand = document.querySelector(".hour"),
  minuteHand = document.querySelector(".minute"),
  secondHand = document.querySelector(".second");

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
