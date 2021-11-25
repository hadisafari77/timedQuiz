// Global reusable variables
var time = 100
var score = 0;
var timeLeft = 0;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");

// Quiz start function
document.getElementById("startbutton").addEventListener("click", function () {
  // hide quiz start area 
  document.getElementById("startarea").style.display = "none"

  // hide footer 
  document.getElementById("bottom-page").style.display = "none"

  // un-hide questions section
  questionsEl.removeAttribute("class");

  setTime()
  renderQuestions()

})

var timerInterval
// Timer Function
function setTime() {
  timerInterval = setInterval(function () {
    time--;

    document.getElementById("time").innerText = time


    if (time === 0) {
      clearInterval(timerInterval);

    }

  }, 1000);

}

console.log(questions)

// Rendering Questions
var currentquestions = 0

function renderQuestions() {

  document.getElementById("question-title").innerText = questions[currentquestions].title

  for (let i = 0; i < questions[currentquestions].choices.length; i++) {

    document.getElementById(i + 1).innerText = questions[currentquestions].choices[i]

  }
}

// Submit highscore to local storage after quiz end
document.getElementById("submitBtn").addEventListener("click", function (event) {

  var scoreInput = document.getElementById("scoreInput").value
  var previousScores = JSON.parse(localStorage.getItem("scores"))

  if (previousScores === null) {
    previousScores = []

  }

  var userScore = {
    initials: scoreInput,
    score: time

  }
  previousScores.push(userScore)
  localStorage.setItem("scores", JSON.stringify(previousScores))
  window.location.replace("highscores.html")
})


// Rendering choices for different questions
document.getElementById("choices").addEventListener("click", function (event) {
  console.log(event.target.innerText)

  if (currentquestions > questions.length - 2) {

    // Quiz end function + interval clearing
    quizEnd()
    return
  }

  // checking for correct answer
  if (event.target.innerText === questions[currentquestions].answer) {

    console.log("correct")

  }

  // checking for wrong answer
  else {
    console.log("wrong")
    time = time - 10

  }

  // render the next question
  currentquestions = currentquestions + 1

  //returning the function
  renderQuestions()
})

// Quiz End function
function quizEnd() {
  // stop timer
  clearInterval(timerInterval);

  // show end screen
  document.getElementById("ending-screen").classList.remove("hide");

  // hide questions section
  document.getElementById("questions").setAttribute("class", "hide");

  document.getElementById("final-score").innerText = time
  
}


