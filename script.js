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
setInterval(() => {
  const t = new Date().toLocaleTimeString();
  res.innerHTML = `${d}: ${t}`;
}, 1000);

// current date
const show = document.querySelector("#date");

setInterval(() => {
  const now = Date.now();
  show.innerHTML = now;
}, 1000);
