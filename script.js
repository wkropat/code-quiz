var startButton     = document.getElementById("startQuiz");
var multChoice      = document.getElementById("multChoice");
var saveInit        = document.getElementById("saveInit");
var finishedText    = document.getElementById("finishedText");
var highScores      = document.getElementById("highScores");
var highscoreText   = document.getElementById("highscoreText");
var x = 0;

const questions = [{
    "question":"Commonly used data types DO NOT include:", 
    "answer":"alerts",
    "choices":["strings", "booleans", "alerts", "numbers"]
},{
    "question":"The condition in an if / else statement is enclosed within _____", 
    "answer":"parentheses",
    "choices":["quotes", "curly brackets", "parentheses", "square brackets"]
},{
    "question":"Arrays in JavaScript can be used to store _____.", 
    "answer":"all of the above",
    "choices":["numbers and strings", "other arrays", "booleans", "all of the above"]
}];



// Countdown timer

function countdown() {
  timer = setInterval(function() {
    timerCount--
    countdownTimer.textContent = timerCount
    if(timerCount === 0) {
      clearInterval(timer)
      console.log(`Time is up!`)
    //   setLose()
    }
    //If there is time left and the user answers the question correctly, then make that time a variable and label it score and push to the high score list
    // }
  }, 1000)
};

// Evaluate if the user selected the correct button

// function evaluateResults() {
    // if 
    // listen for user clicking buttons
        // if content of button equals answer
            // then result is true, 
            // append correct answer div
            // add 10 seconds to the timer
            // x++
        // else result is false
            // append wrong answer div
            // remove 10 seconds from the timer
// inside of this function, iterate the number of questions (x in questions)
// }
// choiceEl.addEventListener("click", evaluateResults)



// Fill out Question Card
function askQuestion() {

    document.getElementById("questionText").textContent = questions[x].question;

    for (let i=0; i < 4; i++) {
        var choiceEl = document.createElement("button");
        choiceEl.textContent = questions[x].choices[i];
        multChoice.appendChild(choiceEl);
        if (questions[x].choices[i] == questions[x].answer) {
            choiceEl.setAttribute("id", "true");
            // Yeah, students can look at the code and see what answer is correct, but then again if they're doing that maybe they don't need the quiz?
        } else { 
            choiceEl.setAttribute("id", "false");
        }
    } 

    var rightAnswer = document.getElementById("true")
    var wrongAnswer = document.getElementById("false")

    rightAnswer.addEventListener("click", appendResult());
    wrongAnswer.addEventListener("click", appendResult());




}

function appendResult(event)  {
//     // This makes the you are correct / you are incorrect div append to the card
//     // 
    var resultEl = document.createElement("div");
    resultEl.textContent = "test";
    multChoice.appendChild(resultEl);
    // if (y) {x++};
    x++;
    askQuestion();
}



// Fill out All Done! Card

function allDone() {

    document.getElementById("finishedText").textContent = question[x].question;


    for (let i=0; i < question[x].choices[i]; i++) {
        var choiceEl = document.createElement("button");
        choiceEl.textContent = question[x].choices[i];
        multChoice.appendChild(choice);

    }    
}
// Fill out High Score Card

function highScore() {

    document.getElementById("questionText").textContent = question[x].question;


    for (let i=0; i < question[0].choices[i]; i++) {
        var choiceEl = document.createElement("div");
        choiceEl.textContent = question[0].choices[i];
        console.log(question[0].choices[i]);
        multChoice.appendChild(choice);

    }    
}

// Start the quiz
function startQuiz() {
    startButton.disabled = true
    timerCount = 60
    countdown()
    askQuestion()
  }

// Event listeners below

startButton.addEventListener("click", startQuiz);


// If timer gets to zero go to high score page
document.addEventListener("keypress", function(event){
  if(timerCount === 0) {
    return
  }
});

