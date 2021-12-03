const choices = ["R", "P", "S"];
const win = 0;
const lose = 0;
const tie = 0;

// should greet the user with a message that says "Hi! Play Rock, Paper or Scissors with me pleeaase? If you DARE!"
alert("Hi! Play Rock, Paper or Scissors with me pleeaase? If you DARE!");

// then you click ok and it gives you an alert that says "pick r, p or s" 
const userChoice = prompt("Choose 'R', 'P', or 'S':")

// you type it in and press enter it validates that you gave it a valid response, if not it puts an alert up, if so then goes to next action


// computer makes a choice
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

getComputerChoice();

//it runs your choice against computers choice and says win or lose and tallies the win, lose or tie
if ()

// confirm pops up and asks if you want to play again


//    if cancel then looks to see whos score is higher and announces winner


//    if ok then restarts alert and game



