//get button
const fetch_btn = document.querySelector("#fetch");
//get input
const usersnames = document.querySelector("#g-users");
let user_Array = [];
let num = 0;
//get result container
const resultContainer = document.querySelector("#result")

//attach click event to fecth button
fetch_btn.addEventListener("click", (event) => {
    user_Array = []
    event.preventDefault();
    //always set the the result container empty after each click
    resultContainer.innerHTML = ""
    num = 0
    //remove white pace from inputs
    let Users = usersnames.value.replace(/ /g, "");
    const userArray = Users.split(",");
    //call get user function for each inputed user
    userArray.map(user => {
        if (user == "") {
            usersnames.placeholder = "___________________          Input at least a username"
        } else {
            getUsers(user.trim())
        }
    })
    console.log(user_Array)
})


//fetch users from github api
async function getUsers(g_user) {
    try {
        const user = await fetch(`https://api.github.com/users/${g_user}`);
        const result = await user.json();
        const Data = result
        //store gotten user in an array
        // console.log(Data.message)
        num++
        if (Data.message == "Not Found") {
            user_Array.push("NULL");
        } else {
            user_Array.push(Data);
        }
        resultContainer.innerHTML += card(g_user, Data, num)
        //Get repos number for user
        let p = document.getElementById(Data.login);
        p.innerHTML += Data.public_repos

    } catch (err) {
       resultContainer.innerHTML += `<p style="color:red; border-bottom: 1px solid red">Failed to fetch User ${g_user}</p>`
        console.log(err)
    }
}

//User interface template
function card(finduser, user, num) {
    //error interface
    if (user.login == null) {
        return (
            `<section class="card">
        <div class="img-container">
            <span>${num}</span>
            <img src='./image.png' alt="user image">
        </div>
        <div class="details">
            <p><b>Name:</b> This User '${finduser}' does not exist on github</p>
            <p style="color:red"><b>GitHub Username:</b>Not found</p>
        </div>
    </section>`
        )
    } else {
        //success interface
        return (
            `<section class="card">
        <div class="img-container">
            <span>${num}</span>
            <img src=${user.avatar_url} alt="user image">
        </div>
        <div class="details">
            <p><b>Result for</b>: ${finduser}</p>
            <p><b>Name:</b> ${user.name}</p>
            <p><b>GitHub Username:</b> ${user.login}</p>
            <p id=${user.login}><b>Numbers of public repo:</b> </p>
            <p><a href=${user.html_url}><b>View More</b></a></p>
        </div>
    </section>`
        )
    }
}