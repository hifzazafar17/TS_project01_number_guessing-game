import inquirer from "inquirer";
// Generate a random number between 1 and 10
const systemGeneratedNo = Math.floor(Math.random() * 10) + 1;
// Prompt the user to enter their guess
const { userGuess } = await inquirer.prompt({
    type: "number",
    name: "userGuess",
    message: "Guess the number (between 1 and 10):"
});
// Check if the user's guess matches the system-generated number
if (userGuess === systemGeneratedNo) {
    console.log("Congratulations! You guessed it right.");
}
else {
    console.log(`Oops! The correct number was ${systemGeneratedNo}. Better luck next time!`);
}
