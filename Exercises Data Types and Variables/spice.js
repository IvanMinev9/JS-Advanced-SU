function solve(currYeild) {
  // Initialize two variables: storedSpice (to keep track of the total storedSpice collected) and days (to keep track of the number of days).

  let storedSpice = 0;
  let days = 0;

  // Use a while loop to simulate the storedSpice extraction process as long as the current yield is 100 kilograms or more.
  while (currYeild >= 100) {
    // Increment the number of days by 1.
    days++;
    // Calculate the amount of storedSpice to be collected on the current day and add it to the total storedSpice.
    storedSpice += currYeild - 26;
    // Decrease the current yield by 10 kilograms for the next day.
    currYeild -= 10;
  }

  // Check if there's any excess storedSpice (more than 26 kilograms) and deduct it.

  if (storedSpice >= 26) {
    storedSpice -= 26;
  }

  // Log the number of days and the total storedSpice collected to the console.
  console.log(days);
  console.log(storedSpice);
}
solve(111);
