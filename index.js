#! /usr/env/node
import inquirer from "inquirer";
import chalk from "chalk";
//welcome message
console.log(chalk.bold.rgb(204, 51, 102)("\n\t\t>>>>>>> Welcome To My Project <<<<<\t\t\n"));
console.log(chalk.bold.rgb(204, 51, 102)("\t\t\t\t>>>>>> ADVANTURE GAME <<<<<<<\t\t\n"));
console.log("~".repeat(50));
//making player class
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
//making opponent class
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
// starting game
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: chalk.rgb(0, 255, 0)("\nPlease Enter Your Name:\n")
    }
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: chalk.rgb(0, 255, 0)("\nPlease Select Your Opponent:\n"),
        choices: ["Skeleton", "Alien", "Zombie"]
    }
]);
let P1 = new Player(player.name);
let O1 = new Opponent(opponent.select);
//function for selecting skeleton
do {
    if (opponent.select === "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: chalk.rgb(0, 255, 0)("\n\tWhat Would You Like To Do?\t\n"),
                choices: ["Attack", "Drink Protion", "Run For Your Life..."]
            }
        ]);
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecrease();
                console.log(chalk.rgb(255, 165, 0)(`\n\t${P1.name} fuel is ${P1.fuel}\t\n`));
                console.log(chalk.rgb(255, 165, 0)(`\n\t${O1.name} fuel is ${O1.fuel}\t\n`));
                if (P1.fuel <= 0) {
                    console.log(chalk.bold.magenta("\n\t'OPPS!!'\n\tYou Loose, Better Luck For Next time..\t\n "));
                    console.log("~".repeat(50));
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.fuelDecrease();
                console.log(chalk.rgb(255, 165, 0)(`\n\t${P1.name} fuel is ${P1.fuel}\t\n`));
                console.log(chalk.rgb(255, 165, 0)(`\n\t${O1.name} fuel is ${O1.fuel}\t\n`));
                if (O1.fuel <= 0) {
                    console.log(chalk.bold.magenta("\n\t'CONGRATS!!!!' You Win..\t\n "));
                    console.log("~".repeat(50));
                    process.exit();
                }
            }
        }
        if (ask.opt === "Drink Protion") {
            P1.fuelIncrease();
            console.log(chalk.bold.red(`\n\tYou Drink Health Portion, Your fuel is ${P1.fuel}\t\n`));
        }
        if (ask.opt === "Run For Your Life...") {
            console.log(chalk.bold.magenta("\n\tYou Loose, Better Luck For Next time..\t\n "));
            console.log("~".repeat(50));
            process.exit();
        }
    }
    // function for selecting Alien
    if (opponent.select === "Alien") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: chalk.rgb(0, 255, 0)("\n\tWhat Would You Like To Do?\t\n"),
                choices: ["Attack", "Drink Protion", "Run For Your Life..."]
            }
        ]);
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecrease();
                console.log(chalk.rgb(255, 165, 0)(`\n\t${P1.name} fuel is ${P1.fuel}\t\n`));
                console.log(chalk.rgb(255, 165, 0)(`\n\t${O1.name} fuel is ${O1.fuel}\t\n`));
                if (P1.fuel <= 0) {
                    console.log(chalk.bold.magenta("\n\t'OPPS!!'\n\tYou Loose, Better Luck For Next time..\t\n "));
                    console.log("~".repeat(50));
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.fuelDecrease();
                console.log(chalk.rgb(255, 165, 0)(`\n\t${P1.name} fuel is ${P1.fuel}\t\n`));
                console.log(chalk.rgb(255, 165, 0)(`\n\t${O1.name} fuel is ${O1.fuel}\t\n`));
                if (O1.fuel <= 0) {
                    console.log(chalk.bold.magenta("\n\t'CONGRATS!!!!' You Win..\t\n "));
                    console.log("~".repeat(50));
                    process.exit();
                }
            }
        }
        if (ask.opt === "Drink Protion") {
            P1.fuelIncrease();
            console.log(chalk.bold.red(`\n\tYou Drink Health Portion, Your fuel is ${P1.fuel}\t\n`));
        }
        if (ask.opt === "Run For Your Life...") {
            console.log(chalk.bold.magenta("\n\tYou Loose, Better Luck For Next time..\t\n "));
            console.log("~".repeat(50));
            process.exit();
        }
    }
    //function for Zombie
    if (opponent.select === "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: chalk.rgb(0, 255, 0)("\n\tWhat Would You Like To Do?\t\n"),
                choices: ["Attack", "Drink Protion", "Run For Your Life..."]
            }
        ]);
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecrease();
                console.log(chalk.rgb(255, 165, 0)(`\n\t${P1.name} fuel is ${P1.fuel}\t\n`));
                console.log(chalk.rgb(255, 165, 0)(`\n\t${O1.name} fuel is ${O1.fuel}\t\n`));
                if (P1.fuel <= 0) {
                    console.log(chalk.bold.magenta("\n\t'OPPS!!'\n\tYou Loose, Better Luck For Next time..\t\n "));
                    console.log("~".repeat(50));
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.fuelDecrease();
                console.log(chalk.rgb(255, 165, 0)(`\n\t${P1.name} fuel is ${P1.fuel}\t\n`));
                console.log(chalk.rgb(255, 165, 0)(`\n\t${O1.name} fuel is ${O1.fuel}\t\n`));
                if (O1.fuel <= 0) {
                    console.log(chalk.bold.magenta("\n\t'CONGRATS!!!!' You Win..\t\n "));
                    console.log("~".repeat(50));
                    process.exit();
                }
            }
        }
        if (ask.opt === "Drink Protion") {
            P1.fuelIncrease();
            console.log(chalk.bold.red(`\n\tYou Drink Health Portion, Your fuel is ${P1.fuel}\t\n`));
        }
        if (ask.opt === "Run For Your Life...") {
            console.log(chalk.bold.magenta("\n\tYou Loose, Better Luck For Next time..\t\n "));
            console.log("~".repeat(50));
            process.exit();
        }
    }
} while (true);
