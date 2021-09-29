var startButton = document.getElementById("startQuiz");
var multChoice = document.getElementById("multChoice");
var finishedText = document.getElementById("finishedText");
var highscoreText = document.getElementById("highscoreText");
var x = 0;

const question = [{
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
} ];

// Countdown timer

function countdown() {
  timer = setInterval(function() {
    timerCount--
    countdownTimer.textContent = timerCount
    if(timerCount === 0) {
      clearInterval(timer)
      console.log(`Time is up!`)
      setLose()
    }
    // if(rightAnswer && timerCount > 0){
    //     //  If there is time left and the user answers the question correctly, then make that time a variable and label it score and push to the high score list
    // }
  }, 1000)
};

// Evaluate if the user selected the correct button

// inside of this function, iterate the number of questions (x in questions)


function evaluateResults() {
    // if 

}



function appendResult()  {
    // This makes the you are correct / you are incorrect div append to the card
    // 




}

// Ask a question
function askQuestion() {

    document.getElementById("questionText").textContent = question[x].question;
    //  for each in question[i].choices

    for (let i=0; i < question[0].choices[i]; i++) {
        var choiceEl = document.createElement("div");
        choiceEl.textContent = question[0].choices[i];
        console.log(question[0].choices[i]);
        multChoice.appendChild(choice);

    }
        // create div
        // fill with text and append
    console.log( question[x].question);
    console.log( question[x].answer);
    console.log( question[x].choices);
    
}



// Start the quiz
function startQuiz() {
    startButton.disabled = true
    timerCount = 60
    countdown()
    askQuestion()
  }


startButton.addEventListener("click", startQuiz)


// Event listener, if timer gets to zero go to high score page
document.addEventListener("keypress", function(event){
  if(timerCount === 0) {
    return
  }

});

