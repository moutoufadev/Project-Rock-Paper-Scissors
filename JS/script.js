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

let humanScore=0
let computerScore=0

console.log(getComputerChoice())
console.log(getHumainChoice())
