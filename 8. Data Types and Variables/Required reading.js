function reading(numberOfPages, pagesForHour, days) {
  let totalTime = numberOfPages / pagesForHour;

  let hoursPerDay = totalTime / days;
  console.log(hoursPerDay);
}
reading(212, 20, 2);
