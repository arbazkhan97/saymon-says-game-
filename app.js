let gameseq=[];
let userseq=[];


let started=false;
let level=0;

let btns=['yellow','green','red','purple'];

let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){

        started=true;
        console.log('game started');
        levelUp();
    }

});

function levelUp(){

    userseq=[];
    level++;

    h3.innerText=`level ${level}`;

    let randomIndex= Math.floor(Math.random()*4);
    let randomColor=btns[randomIndex];
    let randomBtn=document.querySelector(`.${randomColor}`);

    // console.log(randomIndex);
    // console.log(randomColor);
    // console.log(randomBtn);

    gameseq.push(randomColor);
    console.log(gameseq);
   
    gameFlash(randomBtn);

};

function gameFlash(btn){
btn.classList.add("gameFlash");

setTimeout(function(){

btn.classList.remove("gameFlash");
},250);

};

function userFlash(btn){
    btn.classList.add("userFlash");
    
    setTimeout(function(){
    
    btn.classList.remove("userFlash");
    },250);
    
    };

    // add listener in buttons

    let allBtns=document.querySelectorAll(".btn");

    for( btn1 of allBtns){

        btn1.addEventListener("click",btnPress);
    };

    function btnPress(){

        console.log(this);
        let btn2=this;
        userFlash(btn2);

        let userColor=btn2.getAttribute("id");

        console.log(userColor);

        userseq.push(userColor);
        console.log(userseq);

        checkAns(userseq.length-1);


    };

    function checkAns(idx){

        if(userseq[idx]==gameseq[idx]){

            if(userseq.length==gameseq.length){

                setTimeout(levelUp,1000);
            }
           
        } else{

            h3.innerHTML=`game over! <b>your score was ${level}</b> <br> press any key to start the game `;

            document.querySelector("body").style.backgroundColor='red';

            setTimeout(function(){

                document.querySelector("body").style.backgroundColor='black';
            
            },150);

            reset();

        }
    };

    function reset(){

        level=0;
        userseq=[];
        gameseq=[];
        started=false;
    }