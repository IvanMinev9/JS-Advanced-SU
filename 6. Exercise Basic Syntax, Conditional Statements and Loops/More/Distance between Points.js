function distance(x1, y1, x2, y2) {
  // Calculate the distance between the two points using the distance formula.
  let distanceP = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  // (x2 - x1)^2 represents the square of the horizontal distance between the points.
  // (y2 - y1)^2 represents the square of the vertical distance between the points.
  // Math.pow(x, 2) is used to calculate the square of a number.
  // Math.sqrt is used to calculate the square root of the sum of the squared distances.

  // Log the calculated distance to the console.
  console.log(distanceP);
}
distance(2, 4, 5, 0);
