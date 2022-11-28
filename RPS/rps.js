// first write an a array in a global scope
const choices = ["rock", "paper", "scissors"];

// secondly, write a function that will wrap us all your game

function game(){
    // the final code will go in here
}

// creat a function for computerChoice which will pick at random

function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
  }

// creat a function for player choice and make sure it is valid

function playerChoice(){
    let input = prompt("Type Rock, Paper or Scissors");
    while (input == null){
      input = prompt("Type Rock, Paper or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while(check == false){
      input = prompt(
       "type Rock, Paper or Scissors. Spelling needs to be exact, but capitalization doesnt matter"
      );
      while (input == null){
        input = prompt("type Rock, Paper or Scissors");
     }
     input = input.toLowerCase();
     check = validateInput(input);
   } 
   return input; 
  }
// function validates is to ensure the user picks from the options in the array
  function validateInput(choice){
    return choices.includes(choice);
  }  

//  Next is to creat another function to check winner


function checkWinner(choiceP, choiceC){

    if (choiceP === choiceC) {
  return "Tie";
  }else if(choiceP == "rock" && choiceC == "scissors"){
   return "player wins, rock smashes scissors!"
  }else if (choiceP == "scissors" && choiceP == "paper") {
   return "player wins, scissors cuts paper!" 
  } else if(choiceP == "paper" && choiceC) {
   return "player wins, paper covers rock!"
  }else if(choiceC == "paper" && choiceP == "rock"){
   return "computer wins, paper covers rock!"
  }else if(choiceC == "scissors" && choiceP == "paper"){
   return "computer wins, scissors cuts paper!"
  }else if(choiceC == "rock" && choiceP == "scissors"){
   return "computer wins, rock smashes scissors!"
  }else{
   return "invalid response"
  }
} 