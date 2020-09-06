function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};


// create questions

var questions = [
     new Question("Who is best cricketer?", ["Sachin", "Virat","Dhoni", "Kholi"], "Sachin"),
     new Question("Which of them are bowlers?", ["Jadeja", "Shewag", "Bhumra", "All"], "Bhumra"),
    new Question("What is 10 * 1", ["1", "0","10", "4"], "10"),
    new Question("What does martin drinks in college?", ["Wine", "Tea", "Coffee", "All"], "Coffee"),
    new Question("Who is the king of jungel.", ["Lion", "Tiger", "Lions kids", "Monkey"], "Lion")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();






