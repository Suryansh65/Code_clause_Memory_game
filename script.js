let gameSeq = [];
let userSeq = [];
let btns = ["yellow","red","purple","green"];
let highscore = 0;

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        started = true;
    }
    levelUp();
});
 // function to flash the button

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){ // removes the flash class from btn in 1 sec
        btn.classList.remove("flash")
    },250);
}
// Function to level up

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level: ${level}`;
    //random button
    let randomIdx = Math.floor(Math.random()*3);
    let randColor = btns[randomIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randbtn);
}
// function to check sequence 

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            if(level > highscore){
                highscore = level;

            }
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor= "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}

function btnpressed(){
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpressed);
}

// reset function
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level =0;
}