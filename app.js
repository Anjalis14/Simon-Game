let gameseq=[];   //array initalize
let userseq=[];

let btns=["yellow" , "red" , "green" , "orange"]    // button on 0 1 2 3 index to get random box

let started = false;  //game is not yet started 
let level = 0;   //therefore level is 0
let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function(){     //keypress then start the game
    if (started == false){         // if key pressed once then start and again pressed key then dont start again nd again
        console.log("game statred");
        started = true;

        levelUp();    //gane started then call levelup
    }
});


function gameflash(btn){    //btn as an argument jo bhi button flash karana hai
    btn.classList.add("flash")
    setTimeout(function () {   
      btn.classList.remove("flash")     //btn flash will get removed
    } , 250);   //1sec

    }  

function userflash(btn){    //btn as an argument jo bhi button flash karana hai
     btn.classList.add("userflash")
    setTimeout(function () {   
      btn.classList.remove("userflash")     //btn flash will get removed
 } , 250);   //1sec
    
}     

        


function levelUp(){      // for flash
    userseq = []  ; 
    level++;
    h2.innerText =  `level ${level}`;   //h2 text == current level 
    
    let randomindex = Math.floor(Math.random() * 3);  // generate random index will be choosen from 0 to 3
    let randomcolor = btns[randomindex];  // to choose random color
    let ranbtn = document.querySelector(`.${randomcolor}`)
    
    gameseq.push(randomcolor);     //we will push our random generated colour in gameseq
  
    //random btn choose 
    gameflash(ranbtn)
    console.log(gameseq)
}


function checkAns(idx){  //to check whether the usercolor is ==to generated color

     if (userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp,1000);
        }
     }
     else {
        h2.innerHTML = `Game Over !! Your score was <b> ${level}</b>  <br>Press any key to start `;
        document.querySelector("body").style.backgroundColor = "red";
        
        setTimeout(function () {
        document.querySelector("body").style.backgroundColor = "white";
        } , 150) ;
        reset();
    }
     

}
function btnPress() {
    
    let btn = this;  //to detect which button is pressed by user
    userflash(btn)  //button will flash when user will pressed  btn then it will take our pressed butn as an argument and will apply btnflash properiters
    
    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);

}

let allBtns = document.querySelectorAll(".btn");    //selecting all btns for clicking
for(btn of allBtns){
    btn.addEventListener("click" , btnPress);
}

function reset() {
    started = false;
    gameseq =[];
    userseq = [];
    level = 0;
}