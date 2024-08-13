
let gameSeq = [];
let userSeq = [];
let level = 0;
let heading = document.querySelector("h2");
let colors = ["red", "blue", "yellow", "green"];

let started = false;
document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        console.log("Game Started")
        levelup();
    }
})

function flashBtn(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 300);

}

function levelup() {
    userSeq=[];
    level++;
    heading.innerText = `LEVEL ${level}`;

    let randomidx = Math.floor(Math.random() * 3);
    let randombtn = colors[randomidx];
    console.log(randombtn);
     
    btn = document.querySelector(`.${randombtn}`);
    flashBtn(btn);

    gameSeq.push(randombtn);
    console.log("GameSeq",gameSeq)


}
function checkans(idx){
    console.log(`current level ${level}`);
    console.log("userSeq",userSeq)

    if(userSeq[idx]===gameSeq[idx]){

        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1200)
            
        }
        console.log("Same")
    }
    else{
        heading.innerText="Game over ! Press any key to restart";
        reset();
    }

}

function btnPressed(){
    let btn = this;
    flashBtn(btn);
    uC=btn.getAttribute("id");
    userSeq.push(uC);
    checkans(userSeq.length-1);

}
let allbtns = document.querySelectorAll(".btn");

for(btn of allbtns){
    btn.addEventListener("click", btnPressed);

}

function reset(){
    userSeq=[];
    gameSeq=[];
    started=false;
    level=0;
}