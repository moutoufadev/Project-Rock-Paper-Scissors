console.log('Hello World!')

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3); // Generates 0, 1, or 2

    switch (randomNum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// Example usage
//console.log(getComputerChoice());

function getHumainChoice() {

    let choice=prompt("Give us your choice please between 0 1 and 2!")
    while (choice >3){
        choice=prompt("bad choice! choose again please")
    }
    switch(choice){
        case choice='0':
            return "rock"
            break;
        case choice='1':
            return "paper"
            break;
        case choice='2':
            return "scissors"

            break
        
          
    }

    
        
    
}


//console.log(getComputerChoice())
//console.log(getHumainChoice())



//let humanScore=0
//let computerScore=0


const humanSelection = getHumainChoice();
const computerSelection = getComputerChoice();
//playRound(humanSelection, computerSelection);



function playGame(){
    let humanScore=0
    let computerScore=0
    function playRound(humanChoice=getHumainChoice(),computerChoice=getComputerChoice()) {

        humanChoice.toUpperCase()
        computerChoice.toUpperCase()                                
        
        if (humanChoice>computerChoice){
            humanScore=humanScore+1
            console.log(`You lose! ${humanChoice} wins ${computerChoice} . HumanScore=${humanScore} / ComputerScore=${computerScore}`)
            
           
        }
        else if (humanChoice==computerChoice){
           
            
            
            console.log("Draw result")
        }
        else{
                computerScore=computerScore+1
                console.log(`You lose! ${computerChoice} wins ${humanChoice} . HumanScore=${humanScore} / ComputerScore=${computerScore}`)
              
        }   
            
    }
}

for (let i = 0; i < 5; i++) {
    playGame();
  }
    

