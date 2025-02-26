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
console.log(getComputerChoice());
