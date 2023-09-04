const left = document.querySelector(".left");
const right = document.querySelector(".right");
const progressBar = document.querySelector(".progress div");
const remainingDays = document.querySelector(".remaining-days");

const formatSuffix = (age) => {
  if (age[1] == "1") {
    return "st";
  } else if (age[1] == "2") {
    return "nd";
  } else if (age[1] == "3") {
    return "rd";
  } else {
    return "th";
  }
};

const formatNumber = (num) => {
  const formatter = new Intl.NumberFormat();

  return formatter.format(num);
};

const calculateAndSetValues = () => {
  const today = new Date();
  const birthday = new Date(`${today.getFullYear()}-10-20T23:00:00Z`);
  const milliseconds = birthday.getTime() - today.getTime();
  const percentage = ((today.getTime() / birthday.getTime()) * 100).toFixed(3);

  const currentAge =
    today.getMonth() == 9 && date.getDate() == 21
      ? today.getFullYear() - 2005
      : today.getFullYear() - 2005 - 1;
  let suffix = formatSuffix((currentAge + 1).toString());

  left.textContent = `${currentAge} years old`;
  right.textContent = `${percentage}%`;
  progressBar.style.width = `${percentage}%`;
  remainingDays.textContent = `${formatNumber(
    milliseconds
  )} milliseconds till my ${currentAge + 1}${suffix} birthday.`;
};

setInterval(calculateAndSetValues, 200);
