/*
1. HTML Blank *
2. getComputerChoice (Computer will randomly pick rock, paper or scissors)
3. playerSelection (read player´s choice case insensitive)
4. Return the resulting winner
5. game() function that goes for up - to 5 rounds.
*/

let choice = ["rock","paper","scissors"];

let tips = {
    rock:"scissors",
    paper:"rock",
    scissors:"paper"
};

class turn{
    constructor(playerChoice){
        this.computer=choice[this.getComputerChoice()];
        this.player=choice[playerChoice];
        this.result = this.run();
    }

    getComputerChoice(){
        return Math.floor(Math.random() * 3);
    }
        
    run() {
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

class round{
    constructor(){
        this.Set = []
        this.Score = {
            player:0,
            computer:0
        }
    }

    update(nturn)
    {
        if(this.ended == true)return;

        this.Set.push(nturn);
         
        if(nturn.result)
        {
            this.Score[nturn.result]++;
        }

        let playerChoice = document.getElementById("playerChoice");
        let computerChoice = document.getElementById("computerChoice");
        let turnResult = document.getElementById("turnResult");
        let playerScore = document.getElementById("playerScore");
        let computerScore = document.getElementById("computerScore");

        console.log("Player: "+nturn.player);
        console.log("Computer: "+nturn.computer);
        console.log("result: "+nturn.result);

        playerChoice.innerText = nturn.player;
        computerChoice.innerText = nturn.computer;
        turnResult.innerText = nturn.result ? nturn.result : "draw";
        playerScore.innerText = this.Score.player;
        computerScore.innerText = this.Score.computer;

        if(this.Score.player == 3 || this.Score.computer == 3)
        {
            this.end();
        }
    }

    end()
    {
            this.ended = true;
            let winnerBoard = document.getElementById("result");
            let winnerBanner
    }
}

let game = new round()

/*

function game()
{
    const gameResult = {
        player:0,
        computer:0
    }

    const gameStats = {
        winner:null,
        turnResult:null,
        gameSet:[]
    }

    const gameSet = []

    do
    {
        let nturn = new turn();
        let result = nturn.result;

        console.log(nturn);

        if(result){
            gameSet.push(nturn);
            gameResult[result]++;
        }

        gameStats.turnResult = result ? result : "draw";

        console.log(turnResult);

        if(gameResult.player == 3 || gameResult.computer == 3)
        {
            gameStats.winner = Object.keys(gameResult).reduce((d1,d2) => gameResult[d1] > gameResult[d2] ? d1 : d2);
        }

    }while(!gameStats.winner);

    return gameStats.winner;
}
*/


/*
console.log(getComputerChoice());
*/