let gameSeq = [];
let userSeq = [];
let btns = ["red","yellow","green","purple"];

let started = false;
let level = 0;

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },1000);
}

let h2 = document.querySelector("h2");
function levelUp(){
    userSeq = [];

    level++;
    h2.innerText = `Level ${level}`;
    
    //random btn choose
    let radIdx = Math.floor(Math.random() * 3);
    let radColor = btns[radIdx];
    let radBtn = document.querySelector(`.${radColor}`);
    gameSeq.push(radColor);
    console.log(gameSeq);
    
    gameFlash(radBtn);
}

function chechAns(idx){
    // idx = level -1;
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
        setTimeout(levelUp,1000);
    }
    }else{
        h2.innerHTML = `Game Over! Your Score was <b> ${level}<b/> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn); 

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    chechAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}