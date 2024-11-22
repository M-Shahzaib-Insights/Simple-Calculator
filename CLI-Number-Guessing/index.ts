#! usr/bin/env node

import inquirer from "inquirer";

//Generating a random number
const randomNumber = Math.floor(Math.random() * 10 + 1);

//Taking input from a user
(async () => {
  const answers = await inquirer.prompt([
    {
      name: "userGuessedNumber",
      type: "number",
      message: "Please guess a number between 1-10:",
    },
  ]);

  console.log(answers);

  //Compare both numbers and provide result
  if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed the right number.");
  } else {
    console.log("You guessed the wrong number.");
  }
})();
