export const showWorldTime = (ms) => {
  let seconds = Math.floor((ms / 1000) % 60)
  let minutes = Math.floor((ms / (1000 * 60)) % 60)
  let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  let am_pm = 'AM';

  let hour = (hours < 10) ? "0" + hours : hours;
  let minute = (minutes < 10) ? "0" + minutes : minutes;
  let second = (seconds < 10) ? "0" + seconds : seconds;

  if (hour > 12) {
    hour -= 12;
    am_pm = 'PM'
  } else {
    am_pm = 'AM'
  }

  return hour + ":" + minute + ":" + second + am_pm
}
