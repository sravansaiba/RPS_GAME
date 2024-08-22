let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userpara=document.querySelector("#user-score");
const comppara=document.querySelector("#comp-score");

const genComputerChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random(options)*3);
    return options[randIdx];
};

const DrawGame=()=>{
    msg.innerText="Game is draw!";
    msg.style.backgroundColor="yellow";
};


const ShowWinner=(userWin,userchoice,compchoice)=>{
    if (userWin){
        userscore++;
        userpara.innerText=userscore;
        msg.innerText=`you win!,your ${userchoice} beats ${compchoice}!`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        comppara.innerText=compscore;
        msg.innerText=`you lost!,${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";

    }
};


const playGame=(userchoice)=>{
    console.log("user choice = ",userchoice);
    //generate computer choice
    const compchoice=genComputerChoice();
    console.log("comp choice = ",compchoice);

    if(userchoice === compchoice){
        //draw
        DrawGame();
    } else{
        
        let userWin=true;
        
        if (userchoice === "rock"){
            //scissors,paper
            userWin = compchoice === "paper"?false:true;
        }else if (userchoice === "paper"){
            //rock,scissors
            userWin = compchoice === "scissors"?false:true;
        }else{
            userWin = compchoice === "rock"?false:true; 
        }
        ShowWinner(userWin,userchoice,compchoice);
    }
};


choices.forEach((choice)=>{ 
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
    });
});


