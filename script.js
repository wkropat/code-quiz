var startButton = document.getElementById("startQuiz");
var multChoice = document.getElementById("multChoice");
var saveInit = document.getElementById("saveInit");
var finishedText = document.getElementById("finishedText");
var highScores = document.getElementById("highScores");
var highscoreText = document.getElementById("highscoreText");
var x = 0;

// Data structure with questions, answers, and a key
const questions = [{
    question: "Commonly used data types DO NOT include:",
    answer: "alerts",
    choices: ["strings", "booleans", "alerts", "numbers"]
}, {
    question: "The condition in an if / else statement is enclosed within _____",
    answer: "parentheses",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"]
}, {
    question: "Arrays in JavaScript can be used to store _____.",
    answer: "all of the above",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"]
}];

// Hide all content except the intro 
multChoice.style.display = "none";
saveInit.style.display = "none";
highScores.style.display = "none";

// Countdown timer
var timerCount = 60;
var countdownTimer = document.getElementById("timer");

function countdown() {
    timer = setInterval(function () {
        timerCount--
        countdownTimer.textContent = timerCount
        if (timerCount == 0) {
            clearInterval(timer)
            console.log(`Time is up!`)
            setLose()
        }
    }, 1000)
};

// When the start button is clicked:
    //  Hide intro, 
    //  Display question 1, 
    //  Start timer.

startButton.onclick = function () {
    var intro = document.getElementById("intro");
    intro.style.display = "none";
    multChoice.style.display = "initial";
    askQuestion();
    countdown();
}

// Fill out All Done! Card

function allDone() {
    // Hide questions and show initials form
    multChoice.style.display = "none";
    saveInit.style.display = "initial";
    var score = timerCount;
    scoreEl = document.createElement("p");
    scoreEl.textContent = "You scored :" + score + " points.";
    saveInit.appendChild(scoreEl);
    localStorage.setItem("score", score);
    // NEED TO ADD A BIT TO STORE THE INITIALS THAT WRE INPUT IN THE FORM
}

// Fill out Question Card
function askQuestion() {
    // Ask multiple choice question
    var questionEl = document.getElementById("questionText");
    questionEl.textContent = questions[x].question;
    // Generate answer buttons, with id=true or fale
    for (let i = 0; i < 4; i++) {
        var choiceEl = document.createElement("button");
        choiceEl.textContent = questions[x].choices[i];
        questionEl.append(choiceEl);
        if (questions[x].choices[i] == questions[x].answer) {
            choiceEl.setAttribute("id", "true");
        } else {
            choiceEl.setAttribute("id", "false");
        }
    }

    var rightAnswer = document.getElementById("true")
    var wrongAnswer = document.querySelector("#false")

    rightAnswer.onclick = function () {
        // Pulls up the next question, 
        //until end of questions, instead pull up initial form
        if (x == 2) {

            allDone()
        } else {
            x = x + 1;
            askQuestion()
        }
    }

    wrongAnswer.onclick = function () {
        // Generate div below card saying answer is wrong
        var resultEl = document.createElement("div");
        resultEl.textContent = "Incorrect. Try again!";
        multChoice.append(resultEl);
        // Penalize the wrong answer by 10 seconds
        timerCount = timerCount - 10;
    }

}

// Fill out High Score Card

function highScore() {

    document.getElementById("questionText").textContent = question[x].question;


    for (let i = 0; i < question[0].choices[i]; i++) {
        var choiceEl = document.createElement("div");
        choiceEl.textContent = question[0].choices[i];
        console.log(question[0].choices[i]);
        multChoice.appendChild(choice);

    }
}


// If timer gets to zero go to high score page
// document.addEventListener("keypress", function (event) {
//     if (timerCount === 0) {
//         return
//     }
// });

function setLose() {
    timer.textContent = "Out of Time!";
    multChoice.style.display = "none";
    saveInit.style.display = "initial";
    highScores.style.display = "none";

}
