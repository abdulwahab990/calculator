import * as inquirer from "inquirer";
import chalk from "chalk";

// claculator operators

enum operators
{
    Add = "Addition",
    Substract = "subtractions",
    Multiply = "multiplications",
    Divide = "divisions",
}

const prompt = inquirer.createPromptModule();

// now validate the numbers of oeprators
function validateNumber(input:string): boolean |string{
    if(isNaN(parseFloat(input))){
        return "Please enter a valid number";
    }
    return true;
}

// now put the aync function
async function main()
{
    const input =  await prompt([
    {
        type: "input",
        name: "num1",
        message: "please enter the first number",
        validate: validateNumber,
    },
    {
        type: "rawlist",
        name: "operator",
        message: "please select the operator",
        choices: Object.values(operators)
    },
    {
        type: "input",
        name: "num2",
        message: "please enter the second number",
        validate: validateNumber

    }
    ])
    

    const num1 = parseFloat(input.num1);
    const num2 = parseFloat(input.num2);
    const selectedOperator = input.operator as operators;
    let result:number;

    if(selectedOperator === operators.Add)
    {
        result = num1 + num2;
        console.log(chalk.green.bgBlackBright(`your result is: ${result}`));
    }else if ( selectedOperator === operators.Substract){
        result = num1 - num2;
        console.log(chalk.green.bgBlackBright(`your result is: ${result}`));
    }else if (selectedOperator === operators.Multiply){
        result = num1 * num2;
        console.log(chalk.green.bgBlueBright(`your result is: ${result}`));
    }else if (selectedOperator === operators.Divide){
        result = num1 / num2;
        console.log(chalk.green.bgBlackBright(`your result is: ${result}`));
    }
}

main()

