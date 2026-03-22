let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorep= document.querySelector("#userscore");
const compscorep = document.querySelector("#compscore");


let resetbtn=document.getElementById("reset");
resetbtn.addEventListener("click",function(){
    userscore=0 ;
compscore= 0;


document.getElementById("userscore").innerText=userscore;

document.getElementById("compscore").innerText=compscore;
msg.innerText=" Play again!";
  msg.style.backgroundColor="#24252d";
}
)

//generated choice by computer 
const generated =()=>{
    let option=["rock","paper","scissors"];
   const genindex= Math.floor(Math.random()*3);
  return option[genindex];

}
     ///////DRAW FUNCTION////////
const draw=()=>{
    console.log("drawww");
  msg.innerText="It's a Draw! ";
            msg.style.backgroundColor="#6c7ac9";

}

    ////////

    
    
    const winner = (userwin,userchoice,computer)=>{
        
        if(userwin){
              userscore++;
    userscorep.innerText = userscore;
            msg.innerText="You win! ";
            msg.style.backgroundColor="#4caf50";
        }
        else {
         compscore++;
           compscorep.innerText=compscore;
              msg.innerText="You lost! ";
            msg.style.backgroundColor="#cf1c19";

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
            informer.innerText="Computer Chose:"
+computer;
        };
        
        
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id")
  game(userchoice);
})
}
)

  
const msgg=document.querySelector("#msg");

msgg.addEventListener("click",function(){
    msgg.classList.add("msg-active");

})