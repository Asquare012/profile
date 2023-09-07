// current day
const res = document.querySelector("#day");
const date = new Date();
const dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const d = dayList[date.getDay()];
res.innerHTML = d;

// current date
const show = document.querySelector("#date");

setInterval(() => {
  const now = new Date();
  const year = now.getUTCFullYear();
  const month = now.getUTCMonth() + 1;
  const day = now.getUTCDate();
  const hours = now.getUTCHours();
  const minutes = now.getUTCMinutes();
  const seconds = now.getUTCSeconds();
  const milliseconds = now.getUTCMilliseconds();

  show.innerHTML = `${year}-${month}-${day} 
            ${hours}:${minutes}:${seconds}.${milliseconds}`;
}, 1000);
