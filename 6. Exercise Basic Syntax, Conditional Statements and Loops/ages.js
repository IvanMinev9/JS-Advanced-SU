function age(numAge) {
  let status = "";
  if (numAge < 0) {
    console.log(`out of bounds`);
  } else if (numAge <= 2) {
    status = `baby`;
  } else if (numAge <= 13) {
    status = "child";
  } else if (numAge <= 19) {
    status = "teenager";
  } else if (numAge <= 65) {
    status = "adult";
  } else if (numAge >= 66) {
    status = `elder`;
  }
  console.log(status);
}
age(100);
