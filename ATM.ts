#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.cyanBright("Develp By Sheikh Hamid <3"))

var answers = await inquirer.prompt([
  {
    type: "input",
    name: "userId",
    message: "Enter your UserId?",
  },
  { type: "number", name: "userPin", message: "Enter your UserPin?" },
  {
    type: "list",
    name: "accountType",
    choices: ["Saving", "Current"],
    message: "Select your accountType?",
  },
  {
    type: "list",
    name: "transactionType",
    choices: ["Fast Cash", "Withdraw"],
    message: "Select your transaction?",
    when(answers) {
      return answers.accountType;
    },
  },
  {
    type: "list",
    name: "amount",
    choices: [1000, 2000, 4000, 5000, 10000, 15000, 30000,50000,100000,1500000,200000],
    message: "Select your amount?",
    when(answers) {
      return answers.transactionType == "Fast Cash";
    },
  },
  {
    type: "number",
    name: "amount",
    message: "Select your amount?",
    when(answers) {
      return answers.transactionType == "Withdraw";
    },
  },
]);
if (answers.userId && answers.userPin) {
  const balance = 500000;
  console.log(chalk.cyanBright("Pevious Balance:",balance));
  const enterAmount = answers.amount;
  if (balance > enterAmount) {
    const remaining = balance - enterAmount;
    console.log(chalk.green("Your remaining balance is,", remaining));
  } else {
    console.log("Insufficent Balance");
  }
}


