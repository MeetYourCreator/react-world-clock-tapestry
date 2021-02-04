import axios from 'axios'

export const getAllTimeZones = async () => {
  const url = `http://api.timezonedb.com/v2.1/list-time-zone?key=7KJHTP7QS6J7&format=json`;
  const response = await axios.get(url);
  console.log('5-inside getAllTimeZones()')
  console.log('%c%s','color: green; background: yellow', 'response:', response)
  return response.data.zones;
}

export const showLocalTime = () => {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  // let am_pm = 'AM';

  // if (hour > 12) {
  //   hour -= 12;
  //   am_pm = 'PM'
  // } else {
  //   am_pm = 'AM'
  // }

  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;

  return hour + ':' + minute + ':' + second 

}

export const showISO = (timestampMS, styleLight, styleDark) => {
  const zoneISO = new Date(timestampMS * 1000).toISOString();
  const zoneISOhhmmss = zoneISO.slice(11, 19)
  return zoneISOhhmmss
}

export const formatZoneName = (zoneStr) => {
  
  // console.log('%c%s','color: green; background: yellow',`time.js, 41 zoneStr: ${zoneStr}`)

  const zoneArr = zoneStr.split('')
  // console.log(`time.js, 44 zoneArr: ${zoneArr}`)

  const indexOfFirstForwardSlash = zoneArr.findIndex((firstForwardSlash) => firstForwardSlash === '/')
  // console.log(`time.js, 47 indexOfFirstForwardSlash: ${indexOfFirstForwardSlash}`)

  const zoneArr2 = zoneStr.split(',')
  // console.log(`time.js, 50 zoneArr2: ${zoneArr2}`)

  const zoneStr2 = zoneArr2.toString()
  // console.log(`time.js, 53 zoneStr2: ${zoneStr2}`)

  const firstForwardSlashRemovedArr = zoneStr2.slice(indexOfFirstForwardSlash).replace('/', '')
  // console.log(`time.js, 56 firstForwardSlashRemovedArr: ${firstForwardSlashRemovedArr}`)

  const indexOfSecondForwardSlash = firstForwardSlashRemovedArr.split('').findIndex((secondForwardSlash) => secondForwardSlash === '/')
  // console.log(`time.js, 59 indexOfSecondForwardSlash: ${indexOfSecondForwardSlash}`)

  if (indexOfSecondForwardSlash >= 0) {
    const country1 = firstForwardSlashRemovedArr.slice(indexOfSecondForwardSlash).replace('/', ' ').replace('_', '  ').replace('_', '  ');
    return country1
  } else {
    const country2 = firstForwardSlashRemovedArr.replace('_', ' ').replace('_', ' ')
    return country2
  }
}