var starterForm = document.getElementById("foam")
var starterBtn = starterForm.querySelector("#btn")
var qsTwo = document.getElementById("foam2")
var otherBtn = qsTwo.querySelector(".other")
var qsThree = document.getElementById("foam3")
var qsWrong = document.getElementById("foamWrong")
var contBtn = qsWrong.querySelector("#continue")
var corBtn = qsTwo.querySelector(".correct")
var crtBtn = qsThree.querySelector(".correct")


starterBtn.addEventListener("click", function(){
    starterForm.style.display = "none"
    qsTwo.style.display = "inherit"
    
    startTimer()
});

corBtn.addEventListener("click", function(){
  qsTwo.style.display = "none"
  qsThree.style.display = "inherit"
})

otherBtn.addEventListener("click", function(){
    qsTwo.style.display = "none"
    qsWrong.style.display = "inherit"
})

crtBtn.addEventListener("click", function(){})

contBtn.addEventListener("click", function(){
  qsWrong.style.display = "none"
  qsThree.style.display = "inherit"
  
  startTimer()
})

function startTimer() {
    const timeDisplay = document.getElementById("timer-countdown");
    let timeRemaining = 90;
  
    intervalID = setInterval(function () {
      timeRemaining--;
  
      timeDisplay.innerText = timeRemaining + "s";
  
      if (timeRemaining <= 0) {
        stopTimer();
      }
    }, 1000);
  }
  
  function stopTimer() {
    clearInterval(intervalID);
    document.querySelector('main').innerHTML = '<h1>Time is up!</h1>';
  }
  