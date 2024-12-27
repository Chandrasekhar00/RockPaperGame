let userscore=0;
let compscore=0;

const ch=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");

const usercount=document.querySelector("#userscore");
const compcount=document.querySelector("#compscore");



const gencompchoice=()=>{
    const options=["rock","paper","scissors "];
    const randidx=Math.floor(Math.random() * 3);
    return options[randidx];
}
const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="Game was draw";
    msg.style.backgroundColor="blue";
}

const showwin=(userwin,userChoice,compChoice)=>{
    if(userwin){ n 
        userscore++;
        usercount.innerText=userscore;
        console.log("you Win");
        msg.innerText=`you win . your  ${userChoice} beats  ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compcount.innerText=compscore;
        console.log("You Loose");
        msg.innerText=` you lost . ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playgame=(userChoice)=>{
    console.log("user choice =",userChoice);
    const compChoice=gencompchoice();
    console.log("computer choice =",compChoice);

    if(userChoice===compChoice){
        //game was draw
        drawgame();
    }else{
        let userwin=true;
        if(userChoice==="rock"){
            userwin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userwin=compChoice==="scissors"?false:true;
        }else{
            userwin=compChoice==="rock"?false:true;
        }
        showwin(userwin,userChoice,compChoice);
    }
    
}; 

ch.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    });
});
