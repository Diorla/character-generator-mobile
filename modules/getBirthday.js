// Four years(allows for leap year)
const genDate = () => new Date(Math.random() * 126230400000)

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const getBirthday = ()=> {
  const fullDate = genDate();
  const month = months[fullDate.getMonth()]
  const date = fullDate.getDate();
  let hours = fullDate.getHours();
  let minutes = fullDate.getMinutes() + "";
  let meridian = "am";
  if(minutes.length == 1) minutes = "0" + minutes;
  if(hours == 0) hours = 12 //12 am
  else if(hours == 12 ) {
    meridian = "pm"
  }
  else if(hours > 12 ) {
    hours = hours - 12;
    meridian = "pm"
  }
  return `${month} ${date}, around ${hours}:${minutes}${meridian}`
}

export default getBirthday;