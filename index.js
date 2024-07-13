// Importing inquirer and chalk Packages
import inquirer from "inquirer";
import chalk from "chalk";
// Display a colourful Welcome Message
console.log(chalk.bold.cyanBright("\n \t\tWord Counter "));
console.log("=".repeat(60));
// Prompt teh user to enter a Sentence
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);
// Trimming teh sentence and splitting it inot words based on "space"
let words = answer.sentence.trim().split(" ");
// Analysis of user input Sentence
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));
