const MyQuestions = [
    {
        id: 1,
        question: "Which of the following method can you use to remove setInterval() placed within your script?",
        options: [
            { option: "A", text: "<code>removeInterval( )</code>" },
            { option: "B", text: "<code>clearInterval( )</code>" },
            { option: "C", text: "<code>deleteInterval( )</code>" },
            { option: "D", text: "<code>removeInterval(false)</code>" }
        ],
        answer: "B",
        review: `<b>Correct answer: B ;</b> <br/> None of the options is a js default function except clearInterval(); which is used to clear interval set in the project`
    }
  ,
    {
        id: 2,
        question: "Which of the following date return the current time in milliseconds?",
        options: [
            { option: "A", text: "<code>Date.now( )</code>" },
            { option: "B", text: "<code>new Date()</code>" },
            { option: "C", text: "<code>getDate( )</code>" },
            { option: "D", text: "<code>getMilliseconds( )</code>" }
        ],
        answer: "A",
        review: "<b>Correct answer: A ;</b> 'new Date()' returns the current date in a long string format, response can be converted to milliseconds with another method, 'getDate()' is another function in JS that you can use to get the date/day returned by 'new Date()', getMiliSeconds() as the name implies get the milliseconds. <br> Date.now() returns the number of milliseconds from 1970 till date."

    } ,
    {
        id: 3,
        question: "Javascript code can be executed on the console?",
        options: [
            { option: "A", text: "Depends on browser" },
            { option: "B", text: "Yes" },
            { option: "C", text: "I think so" },
            { option: "D", text: "No" }
        ],
        answer: "B",
        review: `<b>Correct answer: B ;</b> <br/> All browsers can execute JS but this option might be turned on or off depending on user preference. But generally, console is a great place to start trying out JS`

    },
    {
        id: 4,
        question: "Which is the correct way to set background image?",
        options: [
            { option: "A", text: "background_image: url(path}" },
            { option: "B", text: "background-image: (url-link)" },
            { option: "C", text: "background_image: (url-link)" },
            { option: "D", text: "background-image: url(path)" }
        ],
        answer: "D",
        review: `<b>Correct answer: D ;</b> <br/> You can sucessfully set the background image by using the sample snippet; 'body{background-image: url("/image/src")}'`

    },
    {
        id: 5,
        question: "what does prompt() do?",
        options: [
            { option: "A", text: "Asks and take input from user" },
            { option: "B", text: "Alert the user " },
            { option: "C", text: "Print out information on the console" },
            { option: "D", text: "it works similar to console.log()" }
        ],
        answer: "A",
        review: `<b>Correct answer: B ;</b> <br/> prompt() function like alert() but went further to provide a space useer can inut a text or answer to your question. The third in the family is confirm() which only return yes or no depending on user response`

    },
    {
        id: 6,
        question: "Which of the following has the highest precedence?",
        options: [
            { option: "A", text: " .wrapper" },
            { option: "B", text: "#wrapper" },
            { option: "C", text: ">.wrapper" },
            { option: "D", text: "*" }
        ],
        answer: "B",
        review: `<b>Correct answer: B ;</b> <br/> Id selector -# has the highest preceedence. #-100 .-010 and ele - 001. You can add this together to get which property will be effected on the element considering also the position in the style sheet`

    },
    {
        id: 7,
        question: "what is bootstrap latest version?",
        options: [
            { option: "A", text: "BS" },
            { option: "B", text: "BS 3" },
            { option: "C", text: "BS 4" },
            { option: "D", text: "BS 3.4" }
        ],
        answer: "C",
        review: `<b>Correct answer: B ;</b> <br/> Latest Bootstrap version as at the time compiling this (2020) is BS4`

    },
    {
        id: 8,
        question: "Which html element is used to insert icons on web page",
        options: [
            { option: "A", text: "i" },
            { option: "B", text: "insert" },
            { option: "C", text: "icon" },
            { option: "D", text: "glyph" }
        ],
        answer: "A",
        review: `<b>Correct answer: B ;</b> <br/> At some point, icon is widely used for inserting icons on the web pages, but as tech advances, ;i; is popularly used with font-awesome and some other icon provders`

    },
    {
        id: 9,
        question: "Which of the follow is JS framework?",
        options: [
            { option: "A", text: " React" },
            { option: "B", text: "Ionic" },
            { option: "C", text: "Angular" },
            { option: "D", text: "Jquery" }
        ],
        answer: "C",
        review: `<b>Correct answer: B ;</b> <br/> React is not a framework but a Js Library, same with Ionic, and Jquery but Angular is JS framework`

    },
    {
        id: 10,
        question: "Vue is a _________",
        options: [
            { option: "A", text: "JS library" },
            { option: "B", text: "JS framework" },
            { option: "C", text: "JS pluggin" },
            { option: "D", text: "JS SDK" }
        ],
        answer: "B",
        review: `<b>Correct answer: B ;</b> <br/> JS framework =just like Angular`

    }
]

localStorage.setItem("Questions", JSON.stringify(MyQuestions))