#!/usr/bin/env node  

import chalk from "chalk";      
// import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
// import { createSpinner } from "nanospinner";    

console.log(chalk.bgGreen('chal be'));

const sleep = (ms=2000) => new Promise((r) => setTimeout(r,ms));

async function swagat(){
    const sandesh= chalkAnimation.rainbow('chal be\n');
    await sleep();
    sandesh.stop();
}

function khatam(){
    const sandesh =`chal be`;
    figlet(sandesh, (err, data) =>{
        console.log(gradient.pastel.multiline(data));
    })
}

await swagat();
// await khatam();
