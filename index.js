class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  timerId = setInterval(() => {
    const currentDate = Date.now();
    const time = this.targetDate - currentDate;
    this.startTimer(time);
  }, 1000);

  startTimer(time) {
    const htmlsec = document.querySelector('span[data-value="secs"]');
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    htmlsec.textContent = `${secs}`;

    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const htmlmin = document.querySelector('span[data-value="mins"]');
    htmlmin.textContent = `${mins}`;

    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const htmlhour = document.querySelector('span[data-value="hours"]');
    htmlhour.textContent = `${hours}`;

    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const htmlday = document.querySelector('span[data-value="days"]');
    htmlday.textContent = `${days}`;
  }
  pad(time) {
    return String(time).padStart(2, '0');
  }
}
const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Apr 17, 2020'),
});
timer.startTimer;

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// console.log(hours);
/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);
