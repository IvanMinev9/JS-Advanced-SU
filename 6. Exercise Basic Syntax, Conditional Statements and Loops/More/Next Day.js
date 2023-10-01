//This code defines a JavaScript function called nextDay that calculates the date of the day following a given date
function nextDay(year, month, day) {
  let date = new Date(year, month - 1, day);
  date.setDate(date.getDate() + 1);
  let newYear = date.getFullYear();
  let newMonth = date.getMonth() + 1;
  let newDate = date.getDate();
  console.log(`${newYear}-${newMonth}-${newDate}`);
}

nextDay(2016, 9, 30);
