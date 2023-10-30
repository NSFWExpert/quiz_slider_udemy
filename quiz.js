// 1. Set and initialize the variables
// 2. Load the current question in the app 
// 3. Create functions we need (e.g. for setting tracker, colors by answers, disply result, calculation and display final score)
// 4. Generate randum unused number (that no question will be repeated) and set timer)
// 5. Make option selection work
// 6. Loading the next question, when the next button is clicked
// 7. Final parts - retake button, setting up random number for the first time, what happens when the page first loads

// 1. Initialize variables
var questionCount = 0; // Number of questions inside the array (0-9 for 10 questions)
var score = 0; // Score is 0 when it starts. 
var ans; // answer key (e.g. comparing answer the user selects and which is the correct one)
var timedOut = 0; // When Timer is at 0, it stops and time out is happening otherwise it will go to -1 sec and so on
var rand;  // creates a unique number from the array questions to reduce cheating by display other questions (and also you can create more then 10 questions, that there are more new questions)
var record = []; //holds all the questions which has been already selected (contains the already taken questions)
var status = 0; //generating the random question number 

// var quizSet = document.getElementById("quizSet"); 
// to keep it easy, the variable gets the same name as the id of the element inside the html-code
// creating a PLACEHOLDER FUNCTION FOR "document.getElementById" that it will not be easier to use and to read
// $ should replace the lines of code "document.getElementById"

// PLACEHOLDER $ FOR "document.getElementById":
function $(id) {
    return document.getElementById(id);
}
// Now getting the relevant HTML elements by ID
var quiz = $("quiz");
var quizSet = $("quizSet");
var question = $("question");
var option1 = $("option1");
var option2 = $("option2");
var option3 = $("option3");
var option4 = $("option4");
var progress = $("progress");
var submit = $("submit");
var retake = $("retake");
var start = $("startBtn");
var result = $("result");
var resultBox = $("resultBox");
var button1 = $("btn1");
var button2 = $("btn2");
var button3 = $("btn3");
var button4 = $("btn4");


var tracker; // holding the steps of the quiz
var countDown; // hold the timer function - call the set timer function
// SET TIMER
var secsInput = 9; // 5 for 5 seconds, you can also do more (at least 30 sec are fine)
var seconds = secsInput; // secsInput is the original value, where it starts when a new question is active
var t; // for the timer


//___________________________________________________________
// 8. Make a start quiz button, Entrance text
//  let startBox hide, once its clicked and show questions to start quiz

start.addEventListener("click",startTest);


function startTest() {
    // startTimer(seconds, "timer"); // it should start, but its not working
    $("quizSet").style.display = "block";
    $("progress").style.display="none"; // change to inline when it should be visible
    $("timer").style.display = "none"; // change to inline when it should be visible
    $("tracker").style.display = "inline";
    $("startBox").style.display = "none";
    countDown = setTimeout('startTimer('+secs+',"'+elem+'")',1000);
}

// start the test from beginning again when retaking
rand = Math.round(Math.random() * questions.length);
while(rand == questions.length) {
    rand = Math.round(Math.random() * questions.length);
}


record[0] = rand;

//onload function
window.onload = getQuestion(questionCount, rand);



//________________________________________________________________________________________________________________________________




// 2. Loading the current question into the app
// 2.1 setting the question --> qCount+1 is the number of the question, which is display. Starts at 0 so question 1 is (0+1), question 2 is (1+1) three is (2+1) and os on
function setQuestion(qCount, rand) {
    var ques = questions[rand]; // taking the element from html and replace the text with the text inside the objects-array of questions.js | the question should be loaded there from that storage | rand should be the number, e.g. 0 should be the first question, 1 should be the seconnd
    question.textContent = (qCount+1) + ". " + ques.question; /*makes the number of the question*/ + ques.question;
    option1.textContent = ques.option1;
    option2.textContent = ques.option2;
    option3.textContent = ques.option3;
    option4.textContent = ques.option4;
}

//2.2 Showing the number of question in Footer (Progressbar)
function changeProgressBar(qCount) {
    progress.innerHTML = "Frage " + (qCount+1) + " von 10"; // disply the text with the current number
    tracker = $("no" + (qCount+1)); // what is the Tracker? Its the step id + current Number of question
    tracker.style.backgroundColor = "#cc7a00"; // change the color when active/in progress
};

//2.3 color of button should be back to normal, after new question
function defaultOptionColors() {
    button1.style.backgroundColor = "#e6f3ff";
    button2.style.backgroundColor = "#e6f3ff";
    button3.style.backgroundColor = "#e6f3ff";
    button4.style.backgroundColor = "#e6f3ff";
} //function default option colors brings all back to beginning color

function getQuestion(qCount, rand) {
    if(qCount == 9) { // if this is the last question
        submit.innerHTML = "Submit Test"; // submit Buttn changes from "Next question" text to "Submit Test"
        submit.style.backgroundColor = "#00b300"; // color changes when last question is through
    }

    if(qCount > 9) { // if its beyond 9, the quiz shall stop! (it has only 10 questions)
        return;
    }

    setQuestion(qCount,rand);
    changeProgressBar(qCount);
    defaultOptionColors();

    startTimer(seconds, "timer");
}

// Colors for the quiz
// 3.1 Set colors for right and wrong answers inside the tracker(steps)

function setCorrect() {
    score++;
    tracker.style.backgroundColor = "#009900";
}

function setWrong() {
    tracker.style.backgroundColor = "#cc0000";
}

//3.2 function that calculate the score and to display the text

function finalScore() {
    if(score > 5) {
        result.innerHTML = "Herzlichen Glückwunsch! <br/> Sie haben bestanden! <br/> Ihre Highscore ist " + score + "!";
    }
    else {
        result.innerHTML = "Enschtuldigung. Sie haben leider zu wenig Punkte. <br/> Your score is " + score + "!";
    }
}

function setResultPage() {
    quizSet.style.display = "none"; // quizset is visible at the end
    resultBox.style.display = "block" // resultboc shall be visible
    progress.innerHTML = "Quiz abgeschlossen!";
    timer.textContent = "00:00"; // Counte stops when finished
    finalScore();
}

// 4. Generate random Number, unused Number and set timerr
// track all used numbers and make sure, that they not come again, if they were used

function randomGenerator() {
    while(status == 0) {
       rand = Math.round(Math.random() * questions.length); // variableNameOfArray.length | must be rounded up, to get it good
       if(rand !== questions.length) {
        // run through record array to find its unique
            for(var j=0; j<record.length; j++) {
                if(rand === record[j]) {
                    break;
                }

                else if(j === record.length - 1) {
                    record[questionCount] = rand;
                    status = 1;
                }
            }
        } 
    }
    status = 0; // status is depraced
    return rand;
}

// 4.2 Set timer function
function startTimer(secs, elem) {
    t = $(elem);
    t.innerHTML = "00:0" + secs;

    if(secs<0) {
        clearTimeout(countDown); // clear timer
        // call the next question

        // no option selected -> means wrong | if the color is not green,... always compare with rgb! not #
        if(button1.style.backgroundColor !== "rgb(26, 255, 26)" && button2.style.backgroundColor !== "rgb(26, 255, 26)" && button3.style.backgroundColor !== "rgb(26, 255, 26)" && button4.style.backgroundColor !== "rgb(26, 255, 26)") {
            // if we are at the last question
            if(questionCount == 9) {
                setWrong();
                setResultPage();
                return;
            }
            setWrong();
            secs = secsInput; // go back to start countdown
            getQuestion(++questionCount, randomGenerator());
        }
        // when an option is selected
        else { 
            if (questionCount == 9) {
                if(ans === questions[rand].answer) {
                    setCorrect();
                }
                else {
                    setWrong();
                }
                setResultPage();
                return;
            }

            if(ans == questions[rand].answer) {
                setCorrect();
                secs = secsInput;
                getQuestion(++questionCount, randomGenerator());
            }

            else {
                setWrong();
                secs = secsInput;
                getQuestion(++questionCount, randomGenerator());
            }

        }
        return;
    } 

    secs--; // decrease (counts down) counter
    //recurring function  --->    countDown = setTimeout(function call in the form of a string, delay in milliseconds)
    
    // place countDown = setTimeout('startTimer('+secs+',"'+elem+'")',1000);   here for let timer run (think about to display timer, if not visible)
    // countDown = setTimeout('startTimer('+secs+',"'+elem+'")',1000);     // start timer (secs value will be parsed)
}

// setTimer(startTimer(seconds, "timer"),1000);

//5. Make the Options Work
option1.addEventListener("click", optionSelect);
option2.addEventListener("click", optionSelect);
option3.addEventListener("click", optionSelect);
option4.addEventListener("click", optionSelect);

function optionSelect(e) {
    // get parent element and change bg color
    var parentEl = e.target.parentElement; // the parent element of the span (option 1-4) is btn1
    parentEl.style.backgroundColor = "#1aff1a"; // turns green when clicked

    // make a switch statement - the other button color go back to default, when one is clicked. Otherwise they all will get a green color.
    switch(e.target.id) {
        case "option1": button2.style.backgroundColor = "#e6f3ff";
                        button3.style.backgroundColor = "#e6f3ff";
                        button4.style.backgroundColor = "#e6f3ff";
                        break;
        case "option2": button1.style.backgroundColor = "#e6f3ff";
                        button3.style.backgroundColor = "#e6f3ff";
                        button4.style.backgroundColor = "#e6f3ff";
                        break;
        case "option3": button1.style.backgroundColor = "#e6f3ff";
                        button2.style.backgroundColor = "#e6f3ff";
                        button4.style.backgroundColor = "#e6f3ff";
                        break;
        case "option4": button1.style.backgroundColor = "#e6f3ff";
                        button2.style.backgroundColor = "#e6f3ff";
                        button3.style.backgroundColor = "#e6f3ff";
                        break;
    }

//set ans value based on the option selected
ans = parseInt(e.target.id.replace("option",""),10);
// = option 1 will be replaced wit number 1 and so on (parsing string into integer)
}

//6. Loading next question, when next button is clicked
submit.addEventListener("click", nextQuestion);

function nextQuestion() {
    //no option selected
    console.log(button1.style.backgroundColor);
    console.log(button1.style.backgroundColor !== "rgb(26, 255, 26)");
    if(button1.style.backgroundColor !== "rgb(26, 255, 26)" && button2.style.backgroundColor !== "rgb(26, 255, 26)" && button3.style.backgroundColor !== "rgb(26, 255, 26)" && button4.style.backgroundColor !== "rgb(26, 255, 26)") {       
            alert("Please select an option!")
            return;
    }
    else {
        clearTimeout(countDown);
        secs = secsInput;

        //if its the last question - load result page
        if(questionCount == 9 && questionCount != 10) {
            if(ans == questions[rand].answer) {
                setCorrect();
            }
            else {
                setWrong();
            }
            setResultPage();
            return;
        }

        if(ans == questions[rand].answer) {
            setCorrect();
            getQuestion(++questionCount, randomGenerator());
        }
        else {
            setWrong();
            getQuestion(++questionCount, randomGenerator());
        }    
    }
}

// 7. final parts of the code
// Retake Button
retake.addEventListener("click",retakeTest);

function retakeTest() {
    window.location.reload();
    $("startBox").style.display = "none";
}

// start the test from beginning again when retaking
rand = Math.round(Math.random() * questions.length);
while(rand == questions.length) {
    rand = Math.round(Math.random() * questions.length);
}

record[0] = rand;

//onload function
window.onload = getQuestion(questionCount, rand);




