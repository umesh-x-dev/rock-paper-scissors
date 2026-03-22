let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

//generated choice by computer 
const generated =()=>{
    let option=["rock","paper","scissors"];
   const genindex= Math.floor(Math.random()*3);
  return option[genindex];

}
     ///////DRAW FUNCTION////////
const draw=()=>{
    console.log("drawww");
  msg.innerText="draww";
}

    ////////
    
    
    const winner = (userwin,userchoice,computer)=>{
        
        if(userwin){
            console.log("you won");
            msg.innerText="you won";
        }
        else {
            console.log("you lose");
              msg.innerText="you lose";
        }
        
    };
    //////////MAIN GAME  //////////
    
    const game = (userchoice)=>{
        console.log("choice of user = ",userchoice);
        
        const computer=generated();
        console.log("computer choice = ",computer);
        
        
        //for draw
        if(userchoice===computer){
            draw();
           
        }
        
        //for other cases 
        else{
            let userwin =true;
            //rock win or lose
            if(userchoice==="rock")
                { userwin =computer === "paper" ? false :true; }      
            
            //paper win or lose 
            else if(userchoice==="paper")
                {userwin =computer === "scissors" ? false :true; }
            
            else
            {userwin =computer === "rock" ? false :true; }
            winner(userwin,userchoice,computer);}
        };
        
        
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id")
  game(userchoice);
})
}
)


