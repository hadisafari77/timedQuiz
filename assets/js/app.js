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


// Timer Function
function setTime() {
  var timerInterval = setInterval(function () {
    time--;

    document.getElementById("time").innerText = time


    if (time === 0) {
      clearInterval(timerInterval);

    }

  }, 1000);

}

// Quiz end function + interval clearing
function quizEnd() {
  clearInterval(timerInterval); 
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


// Rendering choices for different questions
document.getElementById("choices").addEventListener("click", function (event) {
  console.log(event.target.innerText)
  if (currentquestions > questions.length - 2) {

    return
  }
  if (event.target.innerText === questions[currentquestions].answer) {

    console.log("correct")

  }

  else {
    console.log("wrong")
    time = time - 10

  }
 
  currentquestions = currentquestions + 1

  renderQuestions()
})


function quizEnd() {
    // stop timer
    clearInterval(timerInterval);

    // show end screen
    document.getElementById("ending-screen");
    document.removeAttribute("class");

    // // show final score
    // var finalScoreEl = document.getElementById("final-score");
    // finalScoreEl.textContent = time;

    // hide questions section
    currentquestions.setAttribute("class", "hide");
  }

function clockTick() {
    // update time
    time--;
    timerInterval.textContent = time;

    // check if user ran out of time
    if (time <= 0) {
      quizEnd();
    }
  }






// localStorage.setItem("name", "lastname")

// localStorage.getItem("name")

