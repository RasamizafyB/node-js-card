#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');

// Content of the card + styles
const cardData = {
    labelWork: chalk.white.italic("       Work:"),
    labelLinkedIn: chalk.white.italic("   LinkedIn:"),
    labelGitHub: chalk.white.italic("     GitHub:"),
    labelInstagram: chalk.white.italic("    Instagram:"),
    labelNpm: chalk.white.italic("        npm:"),
    labelCard: chalk.white.italic("       Card:"),

    name: chalk.red("             Bryan Rasamizafy"),
    pseudo: chalk.red("Bababry"),
    work: chalk.green("Junior Web Developer in training at BeCode Liège"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.yellow("bryan-rasamizafy-652054141/"),
    github: chalk.gray("https://github.com/") + chalk.blue("RasamizafyB"),
    instagram: chalk.gray("https://instagram.com/") + chalk.magenta("Bababryyy"),
    npm: chalk.gray("https://npmjs.com/") + chalk.red("rasamizafy"),
    npx: chalk.gray("npx") + " " + chalk.green("@rasamizafy/card"),
};

// Lines
const newLine = "\n";
const emptyLine = "";

// Print
console.log(
    chalk.green(
        boxen(
            [
                `${cardData.name} ~ ${cardData.pseudo}`,
                emptyLine,
                `${cardData.labelWork} ${cardData.work}`,
                emptyLine,
                `${cardData.labelLinkedIn} ${cardData.linkedin}`,
                `${cardData.labelGitHub} ${cardData.github}`,
                `${cardData.labelInstagram} ${cardData.instagram}`,
                `${cardData.labelNpm} ${cardData.npm}`,
                emptyLine,
                `${cardData.labelCard} ${cardData.npx}`,
            ].join(newLine),
            {
                padding: 1,
                margin: 1,
                borderStyle: "classic",
            },
        ),
    ),
);