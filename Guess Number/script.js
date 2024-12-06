let randomNumber = Math.floor(((Math.random()) * 100) + 1);
let userInput = document.querySelector('#userInput');
let message = document.querySelector("#message");
let showAttempt=document.querySelector('#attempt');
let gameContent=document.querySelector('#gameContent');
let nextGame=document.querySelector('#nextGame');
let recent=document.querySelector('#recent');
let attempt=10;

function showMessage(msg, col = "black") {
    message.innerHTML = msg;
    message.style.color = col;
}

function validation(num) {
    if (num == "") {
        showMessage("Enter a valid number");
        return false
    }
    else if (num < 1 || num > 100) {
        showMessage("Range of Number is between 1 to 100.")
        return false;
    }
    else {
        showMessage("");
        return true;
    }
}

document.querySelector("#check").addEventListener('click',function(){
    let num=userInput.value;
    if(validation(num)){
        play(num);
    }
})

function play(userNum){
    
    console.log(randomNumber);
    
    if(attempt>0){
        attempt--;
         if(userNum!=randomNumber && userNum>randomNumber){
            showAttempt.innerHTML=`You have ${attempt} attempt to guess it correctly`;
            showMessage(`lower than ${userNum}`,"grey");
            recentNumber(userNum);
        }
        else if(userNum!=randomNumber && userNum<randomNumber){
            showMessage(`greater than ${userNum}`,"grey");
            showAttempt.innerHTML=`You have ${attempt} attempt to guess it correctly`;
            recentNumber(userNum);
        }
        else if(userNum==randomNumber){
            showMessage("You guess it Right","Green");
            setTimeout(newGame,1000);
        }
    }
    else{
        setTimeout(newGame,1000);
    }
}

function newGame(){
    gameContent.style.display="none";
    nextGame.style.display="block";
    document.querySelector('#play').addEventListener('click', function(){
        location.reload();
    })

}
let content=``;
function recentNumber(num){
    content=`
    <div class="guess">${num}</div>
    `;
    recent.innerHTML+=content;
}





