let choices = ["R", "P", "S"];
let win = 0;
let lose = 0;
let tie = 0;

// should greet the user with a message that says "Hi! Play Rock, Paper or Scissors with me pleeaase? If you DARE!"
const firstAlert = alert(
  "Hi! Play Rock, Paper or Scissors with me pleeaase? If you DARE!"
);

const rpsGame = () => {
  // then you click ok and it gives you an alert that says "pick r, p or s"
  const userChoice = window.prompt("Choose 'R', 'P', or 'S':").toUpperCase();

  // if user presses cancel then game ends
  if (!userChoice) {
    return;
  }

  // you type it in and press enter it validates that you gave it a valid response, if not it puts an alert up, if so then goes to next action

  // computer makes a choice

  let randomNumber = Math.floor(Math.random() * choices.length);
  let compChoice = choices[randomNumber];

  window.alert("The Computer chose " + compChoice);

  if (userChoice === compChoice) {
    tie++;
    window.alert("You Tied!");
  } else if (
    (userChoice === "P" && compChoice === "R") ||
    (userChoice === "S" && compChoice === "P") ||
    (userChoice === "R" && compChoice === "R")
  ) {
    win++;
    window.alert("You Win!!");
  } else {
    lose++;
    window.alert("You Lose!! HAHAHAHA!");
  }

  window.alert("Stats:\nWins: " + win + "\nLosses: " + lose + "\nTies: " + tie);

  const again = window.confirm("Would you like to play again?");

  if (again) {
    rpsGame();
  }
};

rpsGame();
