let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");


const computerchoice=(compChoice)=>{
    const options=["rock","paper","Scisscors"];
    const x=Math.floor(Math.random()*3);
    return options[x];
}

const drawGame=()=>{
         
msg.innerText = "Game was Draw. Play again! 😑";
msg.style.backgroundColor="Yellow";
msg.style.color="black";
}

const showWinner=(userWin)=>{

    if(userWin){
        userScore++;
        userScorePara.innerText= userScore;
        msg.innerText="You win !!🥳 ";
        msg.style.backgroundColor= "green";
        msg.style.color="white";
        //you win
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText="You lose 😞" ;
          msg.style.backgroundColor ="red";
        msg.style.color="white";

        
        //you lose
    }
}
const playGame=(userChoice)=>{
    console.log("user choice= ", userChoice)
    const compChoice=computerchoice();
        console.log("comp choice= ",compChoice);
        
        if(userChoice===compChoice){
            drawGame();
        }
        else{
            let userWin=true;
            if(userChoice==="rock"){
               userWin= compChoice==="paper"?false:true;
            }
            else if(userChoice==="paper"){
                userWin=compChoice==="scissors"?false:true;
            }
            else{
                userWin=compChoice==="rock"?false:true;
            }
            showWinner(userWin);
        }

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice)
    })
})
