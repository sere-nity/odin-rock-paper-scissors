// Returns a string value - rock, paper, scissors 
// based on randomly generated integer
function getComputerChoice(){
    let index = Math.floor(Math.random()*3) + 1;
    return (index == 1) 
    ? "rock" : (index == 2) 
    ? "paper" : (index == 3) 
    ? "scissors" : "undefined";
}

for(i = 0; i <= 100; i++){
    let result = getComputerChoice();
    console.log(result);
}