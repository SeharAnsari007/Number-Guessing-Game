#!/usr/bin/env node
import inquirer from 'inquirer';
console.log("\n\tWelcome to code with Sehar - CLI Number Guessing Game\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Guess a number(From 1 to 5)",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You have won");
}
else {
    console.log("Try again!");
}
