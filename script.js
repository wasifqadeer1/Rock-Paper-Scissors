let userscore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



const genCompChoice = ()=>{
    const option = ["rock","paper","scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return option[randidx];
}
const  gameDraw = () =>{
    console.log("Game was draw");
    msg.innerText="Game was draw. Play again";
}


const showWinner = (userWin) =>{
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        console.log("You Win!");
        msg.innerText="You Win!";

    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You Lose");
        msg.innerText="You Lose";
    }
}


const playGame = (userChoice) =>{
    console.log("User choice is ",userChoice);
    const compChoice = genCompChoice();
    console.log("Comp choice is ",compChoice);

    if( userChoice === compChoice){
        gameDraw();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"? false : true;
        }else if( userChoice === "paper"){
            userWin = compChoice === "scissors"? false : true;
        }else if(userChoice === "scissors"){
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin);
    }

};
choices.forEach((choice)=> {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});