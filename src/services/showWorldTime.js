export const showWorldTime = (ms) => {
  let millisecond = Math.floor((ms / 1000) % 1000);
  let second = Math.floor((ms / 1000) % 60);
  let minute = Math.floor((ms / (1000 * 60)) % 60);
  let hour = Math.floor((ms / (1000 * 60 * 60)) % 24);
  let am_pm = 'AM';

  hour = (hour < 10) ? "0" + hour : hour;
  minute = (minute < 10) ? "0" + minute : minute;
  second = (second < 10) ? "0" + second : second;

  if (hour > 12) {
    hour -= 12;
    am_pm = 'PM'
  } else {
    am_pm = 'AM'
  }

  return hour + ":" + minute + ":" + second +  ":" + millisecond + ":" + am_pm
}
