export const showTime = () => {
  
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSecond();

  let am_pm = 'AM';
  if (hour >= 12) {
    hour -= 12;
    let am_pm = 'PM'
  } else {
    let am_pm = 'AM'
  }

}


