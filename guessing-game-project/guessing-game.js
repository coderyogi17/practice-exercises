const readline = require("readline");



function checkNumber(num1, num2){
    if (num1>num2){
        console.log("Too high")

    } else if (num1 < num2){
        console.log("Too low")
    } else {
        console.log ("Correct")
    }
}

function askRange(){

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ask the user a question
rl.question("Enter first number: ", (min) => {
    rl.question("Enter second number: ", (max) => {
        
        console.log(`I'm thinking of a number between ${min} and  ${max}...`);
        let secretNumber = (randomInRange(Number(min), Number(max)));
        console.log(secretNumber);  
        rl.question("Enter desired number: ", (answer) => {
        checkNumber(answer, secretNumber);
    rl.close();
  });
});
});

}

function randomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

askRange();