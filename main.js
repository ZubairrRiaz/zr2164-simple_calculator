#! /usr/bin/env node
//SIMPLE CALCULATOR WITH INQUIRER IN TYPESCRIPT:
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: 'num1',
        type: 'number',
        message: 'Please enter your first number',
    },
    {
        name: 'num2',
        type: 'number',
        message: 'Please enter your second number',
    },
    {
        name: 'operator',
        type: 'list',
        message: 'Enter your operator to perform operation',
        choices: ['addition', 'subtraction', 'multiplication', 'division']
    },
]);
if (answer.operator === 'addition') {
    console.log(answer.num1 + answer.num2);
}
else if (answer.operator === 'subtraction') {
    console.log(answer.num1 - answer.num2);
}
else if (answer.operator === 'multiplication') {
    console.log(answer.num1 * answer.num2);
}
else if (answer.operator === 'division') {
    console.log(answer.num1 / answer.num2);
}
else {
    console.log('Enter the correct operator');
}
;
