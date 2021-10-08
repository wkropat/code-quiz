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
        if (timerCount === 0) {
            clearInterval(timer)
            console.log(`Time is up!`)
            setLose()
        }
    }, 1000)
};

// When the start button is clicked:
//  hide intro, display question 1, and start timer.

startButton.onclick = function () {
    var intro = document.getElementById("intro");
    intro.style.display = "none";
    //the click also brings you to the first question page
    multChoice.style.display = "initial"
    askQuestion();
    //starts the timer when the start button is clicked
    countdown();
}
function nextQuestion(event) {
    // Pulls up the next question, until end of questions, instead pull up initial form

    if (x == 2) {
        allDone()
    } else {
        x = x + 1;
        askQuestion()
    }
}

function incorrect(event) {
    // Generate div below card saying answer is wrong
    var resultEl = document.createElement("div");
    resultEl.textContent = "Incorrect. Try again!";
    multChoice.append(resultEl);
    // Penalize the wrong answer by 10 seconds
    timerCount = timerCount - 10;
}


// Fill out All Done! Card

function allDone() {
    multChoice.style.display = "none";
    saveInit.style.display = "initial";


    // for (let i = 0; i < question[x].choices[i]; i++) {
    //     var choiceEl = document.createElement("button");
    //     choiceEl.textContent = question[x].choices[i];
    //     multChoice.appendChild(choice);

    // }
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
    var wrongAnswer = document.getElementById("false")

    rightAnswer.onclick = function () {
    // Pulls up the next question, until end of questions, instead pull up initial form

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



    // rightAnswer.addEventListener("click", nextQuestion());
    wrongAnswer.addEventListener("click", incorrect());

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
document.addEventListener("keypress", function (event) {
    if (timerCount === 0) {
        return
    }
});

function setLose() {

    timer.textContent = "Out of Time!";
    multChoice.style.display = "none";
    saveInit.style.display = "initial";
    highScores.style.display = "none";
    score.textContent = "You scored 0 points."

}









// Evaluate if the user selected the correct button

// function evaluateResults() {
//     if 
//     listen for user clicking buttons
//         if content of button equals answer
//             then result is true, 
//             append correct answer div
//             add 10 seconds to the timer
//             x++
//         else result is false
//             append wrong answer div
//             remove 10 seconds from the timer
// inside of this function, iterate the number of questions (x in questions)
// }
// choiceEl.addEventListener("click", evaluateResults)

// generateIntro



// function generateIntro {
//     var titleEl = document.createElement("h2");
//     titleEl.textContent = "Coding Quiz Challenge!";
//     var textEl = document.createElement("p");
//     textEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
//     var buttonEl = document.createElement("button");
//     buttonEl.textContent("Start Quiz!");
//     textEl.appendChild(buttonEl);
//     titleEl.appendChild(textEl);
//     card.appendChild(titleEl);

// }

// function generateQuestion {


// }
// var cardEl = document.getElementById("card");

// function generateDone() {
//     var titleEl = document.createElement("h2");
//     titleEl.textContent = "All Done!";
//     var formEl = document.createElement("form");
//     formEl.setAttribute("method", "post");
//     formEl.setAttribute("action", "submit.php");
//     var inputEl = document.createElement("input");
//     inputEl.setAttribute("type", "text");
//     inputEl.setAttribute("name", "Initials");
//     inputEl.setAttribute("placeholder", "Initials");
//     var submitEl = document.createElement("input");
//     submitEl.setAttribute("type", "submit");
//     submitEl.setAttribute("value", "Submit");
//     inputEl.append(submitEl);
//     formEl.append(inputEl);

//     titleEl.append(formEl);
//     cardEl.appendChild(titleEl);
// }
// generateDone()

// function generateHighScore() {


// }