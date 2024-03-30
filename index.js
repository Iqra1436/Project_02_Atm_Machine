#! /usr/bin/env node
import inquirer from "inquirer";
// variabl Declarations !
let myBalance = 30000;
let m_pin = 5025;
let lessthen = 500;
// Coding Starts from here!
let ansPin = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your 4 digists pin",
        type: "number",
    }
]);
if (ansPin.pin === m_pin) {
    console.log("Welcome in atm machine");
    // Atm options Starts from here 
    const operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Plase Select Below Options ",
            type: "list",
            choices: ["Withdraw Balance", "Fast Cash Amount", "Deposit Balance", "Balance Inquiry"]
        }
    ]);
    // Withdraw option start from here
    if (operationAns.operation === "Withdraw Balance") {
        let AmountAns = await inquirer.prompt([
            {
                name: "Amount",
                message: "How much amount do you want to withdraw",
                type: "number",
            }
        ]);
        //1. Withdraw conditions start from here! 
        if (AmountAns.Amount > myBalance) {
            console.log("Insuficients Balance");
        }
        else if (AmountAns.Amount < lessthen) {
            console.log(`you can not withdraw less then ${lessthen}`);
        }
        else if (myBalance -= AmountAns.Amount) {
            console.log(`You have made a cash withdraw ${AmountAns.Amount} Your Remaining balance is ${myBalance}`);
        }
    }
    //2.fast cash option starts from here
    else if (operationAns.operation === "Fast Cash Amount") {
        let fastAns = await inquirer.prompt([
            {
                name: "FastCash",
                message: "Select the fast cash option",
                type: "list",
                choices: [5000, 10000, 15000, 20000]
            }
        ]);
        // fast cash conditions starts from here
        if (fastAns.FastCash == 5000) {
            console.log(`You have made a withdrawal ${fastAns.FastCash} Your Remaining Balance is ${myBalance -= fastAns.FastCash}`);
        }
        if (fastAns.FastCash == 10000) {
            console.log(`You have made a withdrawal ${fastAns.FastCash} Your Remaining Balance is ${myBalance -= fastAns.FastCash}`);
        }
        if (fastAns.FastCash == 15000) {
            console.log(`You have made a withdrawal ${fastAns.FastCash} Your Remaining Balance is ${myBalance -= fastAns.FastCash}`);
        }
        if (fastAns.FastCash == 20000) {
            console.log(`You have made a withdrawal ${fastAns.FastCash} Your Remaining Balance is ${myBalance -= fastAns.FastCash}`);
        }
    }
    // Deposit option starts from here 
    else if (operationAns.operation === "Deposit Balance") {
        let depositAns = await inquirer.prompt([
            {
                name: "DepositBalance",
                message: "How much amount do you want to deposit ? ",
                type: "number",
            }
        ]);
        // Deposit conditions starts from here!
        if (myBalance += depositAns.DepositBalance) {
            console.log(`Your Account has been credited with ${depositAns.DepositBalance} your current  balance is ${myBalance} `);
        }
    }
    // Balance Inquiry option start from here 
    else if (operationAns.operation === "Balance Inquiry") {
        console.log(`your current balacne is ${myBalance}`);
    }
    // 
}
else {
    console.log("Incorrect Pin!");
}
