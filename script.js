let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () =>{
    return Math.floor(Math.random() * 10);
  }
  
  const compareGuesses = (humanGuess, comGuess, target) =>{
    humanDiff = Math.abs(humanGuess - target); 
    comGuess = Math.abs(comGuess - target);
  
    if(humanDiff <= comGuess ){
      return true
    }
    else{
      return false
    }
  }
  
  const updateScore = winner => {
    if(winner === `human`){
      humanScore += 1;
    }
    else if(winner === `computer`){
      computerScore += 1;
    }
  }
  
  const advanceRound = () =>{
    currentRoundNumber += 1
  }

