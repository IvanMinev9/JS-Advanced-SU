function loginUser(input) {
  let username = input[0];
  let password = "";

  for (let i = username.length - 1; i >= 0; i--) {
    password += username[i];
  }

  let guessPass = input[1];
  let index = 2;
  let wrong = 0;

  while (guessPass != password) {
    wrong++;

    if (wrong == 4) {
      console.log(`User ${username} blocked!`);
      return;
    }
    console.log("Incorrect password. Try again.");

    guessPass = input[index];
    index++;
  }

  console.log(`User ${username} logged in.`);
}
loginUser(["Acer", "login", "go", "let me in", "recA"]);
