const birthDay = ["July 26, 2001"];
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const birthdayWishEl = document.getElementById("birthdayWish");
const dayWishEl = document.getElementById("dayWish");

function count() {
  const birthDate = new Date(birthDay);
  const currentDate = new Date();

  const totalSeconds = (currentDate - birthDate) / 1000;
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = Math.floor(totalSeconds % 60);

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);

  if (
    currentDate.getDate() === birthDate.getDate() &&
    currentDate.getMonth() === birthDate.getMonth()
  ) {
    birthdayWishEl.style.opacity = "1";
    dayWishEl.style.display = "none";
  } else {
    birthdayWishEl.style.opacity = "0";
    dayWishEl.style.display = "block";
  }
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(count, 1000);
