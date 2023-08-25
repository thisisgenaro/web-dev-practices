/*
1. HTML Blank *
2. getComputerChoice (Computer will randomly pick rock, paper or scissors)
3. playerSelection (read player´s choice case insensitive)
4. Return the resulting winner
5. game() function that goes for up - to 5 rounds.
*/

let choice = ["rock","paper","scissors"]

let tips = {
    rock:"scissors",
    paper:"rock",
    scissors:"paper"
};

function getComputerChoice()
{
    return Math.floor(Math.random() * 3);
}

function playerSelection()
{
    do{
        player = prompt("Please Select Rock, Paper or Scissors").toLowerCase();
    }
    while(choice.indexOf(player) < 0);

    return choice.indexOf(player);

/*
    return choice.filter(
        function(value,index,array){
            return array[index].indexOf(value) === 0
        }
    );
*/
}

class turn{
    constructor(){
        this.computer=choice[getComputerChoice()];
        this.player=choice[playerSelection()];
        this.result = this.check();
    }
        
    check() {
        if(this.player === this.computer)
        {
            return "draw";
        }
        else
        {
            return (tips[this.player] === this.computer) ? "player":"computer";
        }
    }
}


function game()
{
    const gameSet = []
    for(let x = 0; x < 5; x++)
    {
        gameSet[x] = new turn();
        console.log (gameSet[x]);
        console.log("Result: " + gameSet[x].result);
    }

    return gameSet;
}


/*
console.log(getComputerChoice());
*/