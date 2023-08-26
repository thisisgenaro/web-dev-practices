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
    let player;
    do{
        player = prompt("Please Select Rock, Paper or Scissors").toLowerCase();
    }
    while(choice.indexOf(player) < 0);

    return choice.indexOf(player);
}

class turn{
    constructor(){
        this.computer=choice[getComputerChoice()];
        this.player=choice[playerSelection()];
        this.result = this.check();
    }
        
    check() {
        if(this.player != this.computer)
        {
            return (tips[this.player] === this.computer) ? "player":"computer";
        }
        else
        {
            return
        }
    }
}


function game()
{
    const gameResult = {
        player:0,
        computer:0
    }

    let winner;

    const gameSet = []
    do
    {
        let nturn = new turn();
        let result = nturn.result;

        console.log(nturn);

        if(result){
            gameSet.push(nturn);
            console.log("Result: " + result);
            gameResult[result]++;
        }

        if(gameSet.length == 5)
        {
            winner = Object.keys(gameResult).reduce((d1,d2) => gameResult[d1] > gameResult[d2] ? d1 : d2);
        }

    }while(gameSet.length < 5);

    return [winner,gameResult[winner]];
}


/*
console.log(getComputerChoice());
*/