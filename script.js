const left = document.querySelector(".left");
const right = document.querySelector(".right");
const progressBar = document.querySelector("progress");
const remainingDays = document.querySelector(".remaining-days");
const date = new Date();
const daysInTheYear = date.getFullYear() % 4 == 0 ? 366 : 365;

setInterval(() => {
  const isLeapYear = date.getFullYear() % 4 == 0 ? true : false;
  const currentAge =
    date.getMonth() == 9 && date.getDate() == 21
      ? date.getFullYear() - 2005
      : date.getFullYear() - 2005 - 1;

  left.textContent = `${currentAge} years old`;
  remainingDays.textContent = `${
    daysInTheYear - getNumberOfDays(isLeapYear)
  } days till ${currentAge + 1} years old`;
}, 1000);

function getNumberOfDays(leapYear) {
  let days = 0;
  const monthDays = [
    { name: "Oct", days: 10 },
    { name: "Nov", days: 30 },
    { name: "Dec", days: 31 },
    { name: "Jan", days: 31 },
    { name: "Feb", days: leapYear ? 29 : 28 },
    { name: "Mar", days: 31 },
    { name: "Apr", days: 30 },
    { name: "May", days: 31 },
    { name: "Jun", days: 30 },
    { name: "Jul", days: 31 },
    { name: "Aug", days: 31 },
    { name: "Sep", days: 30 },
  ];

  const indexes = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec",
  };

  for (let mon in monthDays) {
    if (monthDays[mon].name === indexes[date.getMonth()]) {
      days += date.getDate();
      break;
    }
    days += monthDays[mon].days;
  }

  right.textContent = `${Math.floor((days / daysInTheYear) * 100)}%`;
  progressBar.value = Math.floor((days / daysInTheYear) * 100);
  return days;
}
