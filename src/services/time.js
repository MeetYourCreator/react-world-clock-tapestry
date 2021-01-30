import axios from 'axios'

export const getAllTimeZones = async () => {
  const url = `http://api.timezonedb.com/v2.1/list-time-zone?key=7KJHTP7QS6J7&format=json`;
  const res = await axios.get(url);
  console.log('5-inside getAllTimeZones()')
  console.log(res)
  return res.data.zones;
}

export const showLocalTime = () => {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  let am_pm = 'AM';

  if (hour > 12) {
    hour -= 12;
    am_pm = 'PM'
  } else {
    am_pm = 'AM'
  }

  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;

  return hour + ':' + minute + ':' + second + am_pm

}

export const showISO = (timestampMS) => {
  const zoneISO = new Date(timestampMS * 1000).toISOString();
  const zoneISOhhmmss = zoneISO.slice(11, 19)
  return zoneISOhhmmss
}

export const formatZoneName = (zone) => {
  
  const zoneArr = zone.split('')
  const indexOfForwardSlash = zoneArr.findIndex((character) => character === '/')

  const zoneArr2 = zone.split(',')
  const nameToString = zoneArr2.toString()
  
  const country = nameToString.slice(indexOfForwardSlash).replace('/', '').replace('_', ' ').replace('_', '  ')


  return country

}