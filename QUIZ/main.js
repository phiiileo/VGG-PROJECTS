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
            if (username == "") { }
            else {
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
            setCountdown(10)

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
                (opt.checked == true && Questions[questionNumber - 1].answer == opt.value) ? Userscore.push(1) : null

            })
            //Submit
            if (questionNumber >= Questions.length) {
                submit()
            }
            else {
                ++questionNumber;
                getQuestion(questionNumber);
                current_progress.innerHTML = questionNumber
                previous.innerHTML = "Previous";
                (questionNumber == Questions.length) ? next.innerHTML = "Submit" : null;
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

            }
            else {
                --questionNumber
                current_progress.innerHTML = questionNumber
                getQuestion(questionNumber);
                next.innerHTML = "Next";
                (questionNumber == 1) ? previous.innerHTML = "Quit" : previous.innerHTML = "Previous"
            }
        })
    }
    else if (button.id == "review") {
        button.addEventListener("click", () => {
            console.log("review");
            result.style.height = "0"
            review.style.display = "block"
            let quest = document.querySelector(".questionWrapper");
            let button1 = document.querySelector(".action");
            const quest1 = quest.cloneNode(true);
            console.log(quest1)
            document.querySelector(".Q").appendChild(quest1, button1);
        })
    }

    button.addEventListener("click", ()=>{
        button.classList.add("animate")
        setTimeout(()=>{ button.classList.remove("animate")},500)
       
    })
})



//Quiz questions
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
                console.log("Time Up")
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
    myInterval = setInterval(getTime, 1000)

}
function submit() {
    questions.style.height = "0"
    result.style.display = "block"
    Percentscore = (Userscore.length / Questions.length) * 100;
    if (Percentscore < 40) {
        score.style.color = "red"
    } else if (Percentscore < 70) {
        score.style.color = "orange"
    }
    else {
        score.style.color = "green"

    }
    score.innerHTML = Percentscore + "%"

    console.log(Userscore.length);
    clearInterval(myInterval)

}
let Questions = JSON.parse(localStorage.getItem("Questions"))
// console.log(Questions)
document.querySelector("#totalQuestion").innerHTML = Questions.length;


