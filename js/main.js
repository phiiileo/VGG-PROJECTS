// sign up button function
let btn = document.getElementById('sign-up');
let message = document.querySelector("#message");
let form1 = document.getElementById("register");
let feedback = document.querySelector("#feedback");

// Validate password fields
let authInput = document.querySelectorAll(".password");
[...authInput].map(auth => {
    auth.addEventListener("blur", () => {
        if (auth.value.length < 8 || auth.value.length > 16) {
            message.innerHTML = `<span style='color: red;'> Password not within range</span>`
        } else if (authInput[0].value != authInput[1].value) {
            message.innerHTML = `<span style='color: red;'> Passwords not the same</span>`;
        }
        else {
            message.innerHTML = "";
        }
    })
})

//Submit form and Validate
btn.addEventListener('click', function () {
    feedback.innerHTML = "";
    message.innerHTML = "";
    event.preventDefault();
    let allInputs = form1.querySelectorAll('input');
    //check if th passwords are equal
    if (allInputs[3].value != allInputs[4].value) {
        message.innerHTML = `<span style='color: red;'> Passwords MUST be the same</span>`;
    }
    //check if the password fields are empty
    else if (allInputs[3].value === "" || allInputs[4].value === "") {
        message.innerHTML = `<span style='color: red;'> Please enter a password!</span>`;
    }
    //Check if the password fields are within specified range
    else if (allInputs[3].value.length < 8 || allInputs[3].value.length > 16) {
        message.innerHTML = `<span style='color: red;'> Passwords are not within range!</span>`;
    }
    else {
        [...allInputs].map(input => {
            //check if every other fields are empty
            if (input.value === "") {
                message.innerHTML += (`<span style='color:red'>Fill the field - ${input.name} <br></span>`);
                test = false;
                return
            }
            //exclude the reset input element
            else {
                if (input.name === "reset") {
                    return
                }
                // finally console.log input values and send feedback to the user
                else {
                    console.log(input.name + ' = ' + input.value);
                    message.innerHTML += (`<span style='color:green'>Field - ${input.name} is filled <br></span>`);
                }
            }
        })
    }

})

// sign in button function
let btn2 = document.getElementById('login');
btn2.addEventListener('click', function () {
    message.innerHTML = ""
    //Get login form
    let loginForm = document.querySelector("#Sign-in");
    event.preventDefault();
    //Get login form input fields
    let loginFields = loginForm.querySelectorAll("input");
    //Check if fields are empty
    if (loginFields[0].value == "" && loginFields[1].value == "") {
        feedback.innerHTML = `<span style='color:red'>Please fill in your login details</span>`;
        //check if password field is within range
    } else if(loginFields[1].value.length < 8 || loginFields[1].value.length > 16 ){
        feedback.innerHTML = `<span style='color:red'>Password is not in range</span>`;
    }
    // Finally send a success feedback
    else{
        feedback.innerHTML = `<span style='color:green'>Login successfull</span>`;
    }
})

let sign_in = document.getElementById("sign-up");