const MyQuestions = [
    {
        id: 1,
        question: "Which of the following method can you to remove setInterval()?",
        options: [
            { option: "A", text: "<code>removeInterval( )</code>" },
            { option: "B", text: "<code>clearInterval( )</code>" },
            { option: "C", text: "<code>deleteInterval( )</code>" },
            { option: "D", text: "<code>removeInterval(false)</code>" }
        ],
        answer: "B"
    },
    {
        id: 2,
        question: "Which of the follow date return the current time in milliseconds?",
        options: [
            { option: "A", text: "<code>Date.now( )</code>" },
            { option: "B", text: "<code>new Date()</code>" },
            { option: "C", text: "<code>getDate( )</code>" },
            { option: "D", text: "<code>getMilliseconds( )</code>" }
        ],
        answer: "A"
    },
    {
        id: 3,
        question: "Javascript code can be executed on the console?",
        options: [
            { option: "A", text: "Depends on browser" },
            { option: "B", text: "Yes" },
            { option: "C", text: "I think so" },
            { option: "D", text: "No" }
        ],
        answer: "B"
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
        answer: "D"
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
        answer: "A"
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
        answer: "B"
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
        answer: "C"
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
        answer: "A"
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
        answer: "C"
    },
    {
        id: 10,
        question: "Veu is a _________",
        options: [
            { option: "A", text: "JS library" },
            { option: "B", text: "JS framework" },
            { option: "C", text: "JS pluggin" },
            { option: "D", text: "JS SDK" }
        ],
        answer: "B"
    }

]

localStorage.setItem("Questions", JSON.stringify(MyQuestions))