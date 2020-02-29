//Get Pages
const userReg = document.querySelector(".userReg");
const quizPage = document.querySelector(".quizPage");
const questions = document.querySelector(".questions");
const result = document.querySelector(".result");
const review = document.querySelector(".review")

//Get changeable parameters
let _username = document.querySelectorAll("._username")
let coutdown_time = document.querySelector("#countdown")
let current_progress = document.querySelector("#current")
let question = document.querySelector(".question")
let option = document.querySelector(".option-group")
let optionValues = document.querySelector(".option-group")
let score = document.querySelector("#score")

//REVIEW QUESTION PARAMETERS
const Qreview = document.querySelector(".review")
let RQuestion = Qreview.querySelector(".question");
let RCurrent = Qreview.querySelector("#current");
let ROptionGroup = Qreview.querySelector(".option-group");
let R_message = Qreview.querySelector(".explanation p");
let reviewQ_num = 1;
let R_next = Qreview.querySelector("#R_next");
let R_close_prev = Qreview.querySelector("#close")
let R_option = Qreview.querySelector(".option-group");
let appreciate = document.querySelector(".appreciate");


//Quiz questions


//environment virables
let questionNumber;
let Userscore = [];
let countdown;
let myInterval;


//Get all buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    //Start button
    if (button.id == "start") {
        //Get username and go to next page
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const username = document.querySelector("#username").value;
            if (username == "") {} else {
                _username.forEach(user => {
                    user.innerHTML = username;
                    user.style.textTransform = "capitalize";
                })
                //Display Quiz into page
                userReg.style.height = "0";
                quizPage.style.display = "block";
                quizPage.style.height = "100vh"
            }
        })
    }
    //Begin Button
    else if (button.id == "begin") {
        button.addEventListener("click", () => {
            //Display Quiz question page
            quizPage.style.height = "0"
            questions.style.display = "block"
            questions.style.height = "100vh"
            questionNumber = 1
            getQuestion(questionNumber);
            setCountdown(20)

        })
    }
    //Go back Button to return home
    else if (button.id == "go_back") {
        button.addEventListener("click", () => {
            userReg.style.height = "100vh"
            quizPage.style.height = "0"
        })
    }
    //Next Button
    else if (button.id == "next") {
        button.addEventListener("click", () => {
            //Get selected option and store if correct
            let myoptions = document.querySelectorAll(".option-group input");
            myoptions.forEach(opt => {
                if (opt.checked == true && Questions[questionNumber - 1].answer == opt.value) {
                    Userscore.push(1);
                    const sam = opt.value;
                    StoreQuestion[questionNumber - 1].userAnswer = sam;;
                } else if (opt.checked == true) {
                    const sam = opt.value

                    StoreQuestion[questionNumber - 1].userAnswer = sam;;
                } else {}

            })
            //Submit
            if (questionNumber >= Questions.length) {
                submit()
            } else {
                ++questionNumber;
                getQuestion(questionNumber);
                current_progress.innerHTML = questionNumber
                previous.innerHTML = "Previous";
                (questionNumber == Questions.length) ? next.innerHTML = "Submit": null;
            }

        })
    }
    //Previous Button
    else if (button.id == "previous") {
        button.addEventListener("click", () => {
            //Quiz
            if (questionNumber <= 1) {
                userReg.style.height = "100vh"
                result.style.display = "none";
                questions.style.height = "0"
                clearInterval(myInterval)

            } else {
                --questionNumber
                current_progress.innerHTML = questionNumber
                getQuestion(questionNumber);
                next.innerHTML = "Next";
                (questionNumber == 1) ? previous.innerHTML = "Quit": previous.innerHTML = "Previous"
            }
        })
    } else if (button.id == "review") {
        button.addEventListener("click", () => {
            result.style.height = "0"
            review.style.display = "block"
            reviewQuestions(reviewQ_num)


        })
    } else if (button.id == "close") {
        button.addEventListener("click", () => {
            //Quiz
            if (reviewQ_num <= 1) {
                userReg.style.height = "100vh"
                // rev.style.display = "none";
                // questions.style.height = "0"
                // clearInterval(myInterval)

            } else {
                --reviewQ_num
                RQuestion.innerHTML = questionNumber
                reviewQuestions(reviewQ_num);
                R_next.innerHTML = "Next";
                (reviewQ_num == 1) ? R_close_prev.innerHTML = "Close": R_close_prev.innerHTML = "Previous"
            }
        })
    } else if (button.id = "R_next") {
        button.addEventListener("click", () => {
            if (reviewQ_num >= StoreQuestion.length) {
                appreciate.style.display = "block"
                Qreview.style.height = '0'
            } else {
                ++reviewQ_num;
                reviewQuestions(reviewQ_num);
                RCurrent.innerHTML = reviewQ_num
                R_close_prev.innerHTML = "Previous";
                (reviewQ_num == StoreQuestion.length) ? R_next.innerHTML = "Finish": null;
            }
        })
    } 
    else if (button.id = "go_home") {
        console.log(1)
        appreciate.style.height = "0";
        userReg.style.height = "100vh"
    }

    button.addEventListener("click", () => {
        button.classList.add("animate")
        setTimeout(() => {
            button.classList.remove("animate")
        }, 500)

    })
})

function getQuestion(question_num) {
    let options = '';
    currentQuestion = Questions[question_num - 1]
    question.innerHTML = currentQuestion.question;
    currentQuestion.options.map(value => {
        options += `<p><input type="radio" name=${currentQuestion.id} value=${value.option} id=""> ${value.text}</p>`
        option.innerHTML = options
    });
    let groupOption = option.children

    for (let i = 0; i < groupOption.length; i++) {
        groupOption[i].addEventListener("click", function () {
            for (let j = 0; j < groupOption.length; j++) {
                groupOption[j].classList.remove("active")
            }
            this.children[0].checked = true;
            this.classList.add("active")
        })
    }
}


//SET countdown
function setCountdown(min) {
    let minutes = min - 1;
    let seconds = 60;

    function getTime() {
        if (seconds >= 0) {
            seconds--
            if (seconds == 0) {
                seconds = 60
                minutes--
            }
            if (minutes < 0) {
                submit()
            } else {
                let Sec = seconds;
                if (seconds < 10) {
                    Sec = `0${seconds}`
                }
                let MyfinalCountdowm = `Time 0${minutes} : ${Sec}`;
                coutdown_time.innerHTML = MyfinalCountdowm
            }

        }

    }
    //START countdown
    myInterval = setInterval(getTime, 1000)

}

//Submit answers
function submit() {
    questions.style.height = "0"
    result.style.display = "block"
    Percentscore = (Userscore.length / Questions.length) * 100;
    if (Percentscore < 40) {
        score.style.color = "red"
    } else if (Percentscore < 70) {
        score.style.color = "orange"
    } else {
        score.style.color = "green"

    }
    score.innerHTML = Percentscore + "%"

    //Remove interval on question review
    clearInterval(myInterval)

}

//Get reviewd question
function reviewQuestions(reviewQ_num) {
    RCurrent.innerHTML = reviewQ_num
    let options = '';
    currentQuestion = StoreQuestion[reviewQ_num - 1]
    RQuestion.innerHTML = currentQuestion.question;
    currentQuestion.options.map(value => {
        options += `<p><input type="radio" id=${value.option} value=${value.option} id=""> ${value.text}</p>`
        ROptionGroup.innerHTML = options;
        // (value.option == currentQuestion.userAnswer) ? option.checked = true : option.checked = false;
        R_message.innerHTML = currentQuestion.review;
    });
    let groupOption = R_option.children

    for (let i = 0; i < groupOption.length; i++) {
        let r_opt = (groupOption[i].children[0]);
        (r_opt.value == currentQuestion.userAnswer) ? r_opt.checked = true: null;
    }

}

//Get question from local storage
let Questions = JSON.parse(localStorage.getItem("Questions"))
// console.log(Questions)
document.querySelector("#totalQuestion").innerHTML = Questions.length;
Qreview.querySelector("#totalQuestion").innerHTML = Questions.length
let StoreQuestion = Questions;
reviewQuestions(reviewQ_num)