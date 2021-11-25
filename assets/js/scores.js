
// display data on highscores page

var highScores = JSON.parse(localStorage.getItem("scores")) 

var highScoreEL = document.getElementById("highScores")

for (i=0 ; i < highScores.length-1; i++) { 
var highScore = highScores[i]
var li = document.createElement("li")  
li.innerText = highScore.initials + " " + highScore.score + " "
highScoreEL.appendChild(li) 


// removing data from Local Storage
  function clearhighScores() {
    localStorage.removeItem("scores");
    location.reload();
  }

  document.getElementById("clearScores").onclick = clearhighScores;

  }



