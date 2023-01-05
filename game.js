
const buttonColors= ['red','blue','green','yellow'];
let gamePattern=[];
let userClickedPattern =[];
let level = 0;
let started =false;

function nextSequence (){

    userClickedPattern = [];
    
    $("#level-title").text("Level " + level);
    level++;

    let randomNumber = Math.trunc(Math.random()*4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);

}


function checkAnswer(currentLevel) {

   
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

    
      if (userClickedPattern.length === gamePattern.length){

        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {

      console.log("wrong");
      playSound('wrong')
      $('body').addClass('game-over');
      setTimeout(function (){
        $('body').removeClass('game-over');
      },200)
      $('#level-title').text('Game Over, Press Any Key to Restart');
      startOver();
    }

}
function startOver(){
    level =0;
    gamePattern=[];
    started = false;
}
function playSound(name){
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor){
    $('#'+currentColor).toggleClass('pressed');
    
    setTimeout(function (){
        $('#'+currentColor).toggleClass('pressed');
    },100)
}

$(document).keypress(function (){
    
    if(!started){
        console.log(level)
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
})

$('.btn').click(function (){
    let userChosenColor = $(this).attr("id")
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
})