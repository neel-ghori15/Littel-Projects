let gamSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");
document.addEventListener("keypress", function() {
   if(started==false) {
    console.log("Game is started");
    started=true;

    levelUp();
   }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randIndx=Math.floor(Math.random()*3)
    let randColor=btns[randIndx];
    let randBtn=document.querySelector(`.${randColor}`);
    gamSeq.push(randColor);
    console.log(gamSeq);
    //random btn choose
  gameFlash(randBtn);
}

function checkans(idx) {
    if(userSeq[idx]===gamSeq[idx]) {
        if(userSeq.length==gamSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else{
        h2.innerHTML=`Oops , Game Over! Your score is <b>${level-1}</b> <br> Press any key to restart.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function() {
        document.querySelector("body").style.backgroundColor="white";
        },250);
        reset();
    }
}

function btnPress() {
   // console.log(this);
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkans(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    gamSeq=[];
    userSeq=[];
    level=0;
}