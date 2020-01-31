// sign up button function
let btn = document.getElementById('sign-up');
let message = document.querySelector("#message");
let form1 = document.getElementById("register");
let test1, test2;

// Validate password fields

let authInput = document.querySelectorAll(".password");

[...authInput].map(auth => {
    auth.addEventListener("blur", () => {
        if (auth.value.length < 8 || auth.value.length > 16) {
            message.innerHTML = `<span style='color: red;'> Password not within range</span>`
            test1 = false
        } else if (authInput[0].value != authInput[1].value) {
            message.innerHTML = `<span style='color: red;'> Passwords not the same</span>`;
            test1 = false
        }
        else {
            message.innerHTML = "";
            test1 = true
        }
    })
})

//Submit form and Validate
btn.addEventListener('click', function () {
    message.innerHTML = "";
    event.preventDefault();
    let allInputs = form1.querySelectorAll('input');
    if (allInputs[3].value != allInputs[4].value) {
        message.innerHTML = `<span style='color: red;'> Passwords MUST be the same</span>`;
    }
    else if (allInputs[3].value === "" || allInputs[4].value === "") {
        message.innerHTML = `<span style='color: red;'> Please enter a password!</span>`;
    }
    else if (allInputs[3].value.length < 8 || allInputs[3].value.length > 16) {
        message.innerHTML = `<span style='color: red;'> Passwords are not within range!</span>`;
    }
    else {
        [...allInputs].map(input => {
            if (input.value === "") {
                message.innerHTML += (`<span style='color:red'>Fill the field - ${input.name} <br></span>`);
                test = false;
                return

            } else {
                if (input.name === "reset") {
                    return
                } else {
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
    event.preventDefault();
    alert("Please check back later!")
})

let sign_in = document.getElementById("sign-up");