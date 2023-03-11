const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl

let timerId = timerEl.dataset.timer;

const createTimerAnimator = () => {
  return (seconds) => {
    secondsLeft = seconds;

    if (timerId) {
      clearTimeout(timerId);
    }

    function setTime() {
      let second = secondsLeft % 60;
      let minute = secondsLeft > 0 ? Math.floor((secondsLeft / 60) % 60) : 0;
      let hour = secondsLeft > 0 ? Math.floor((secondsLeft / 60 / 60) % 60) : 0;

      let secondsFormat = second < 10 ? "0" + second : second;
      let minutesFormat = minute < 10 ? "0" + minute : minute;
      let hourFormat = hour < 10 ? "0" + hour : hour;

      let time = `${hourFormat}:${minutesFormat}:${secondsFormat}`;
      timerEl.innerHTML = time;

      if (secondsLeft <= 0) {
        timerId = null;
      } else {
        secondsLeft--;
        timerEl.dataset.timer = setTimeout(setTime, 1000);
      }
    }
    setTime();
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});
