//This code defines a JavaScript function called nextDay that calculates the date of the day following a given date
nextDay(2016, 9, 30);
function nextDay(year, month, day) {
  // Create a Date object named "date" representing the input date (year, month, and day).
  let date = new Date(year, month - 1, day);

  // Add one day to the date using setDate and getDate methods.
  date.setDate(date.getDate() + 1);

  // Get the year, month, and day of the new date.
  let newYear = date.getFullYear();
  let newMonth = date.getMonth() + 1; // Adding 1 to convert to 1-12 month representation.
  let newDate = date.getDate();

  // Log the new date in the "YYYY-MM-DD" format.
  console.log(`${newYear}-${newMonth}-${newDate}`);
}

nextDay(2016, 9, 30);
