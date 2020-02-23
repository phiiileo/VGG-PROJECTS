const MyQuestions = [
    {
        id: 1,
        question: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, nostrum architectomaiores laborum eos modifhfhhfhhfhfh.",
        options: [
            { option: "A", text: "love" },
            { option: "B", text: "craxy" },
            { option: "C", text: "mad o" },
            { option: "D", text: "go ruby" }
        ],
        answer: "A"
    },
    {
        id: 2,
        question: "Lorem ipsum dolor,fhfhfhfhbfgbhfhfg sit amet consectetur adipisicing elit. Delectus, nostrum architectomaiores laborum eos modi.",
        options: [
            { option: "A", text: "Hello from other side" },
            { option: "B", text: "Jake" },
            { option: "C", text: "Frank" },
            { option: "D", text: "Belo" }
        ],
        answer: "D"
    },
    {
        id: 3,
        question: "ghghghgh.",
        options: [
            { option: "A", text: " other side" },
            { option: "B", text: "Jake" },
            { option: "C", text: "Frank" },
            { option: "D", text: "Belo" }
        ],
        answer: "D"
    },
    {
        id: 4,
        question: "fgfgfgfgf.",
        options: [
            { option: "A", text: " other fhfhfh" },
            { option: "B", text: "Jakfffue" },
            { option: "C", text: "Frfififank" },
            { option: "D", text: "Bffielo" }
        ],
        answer: "D"
    }

]

localStorage.setItem("Questions", JSON.stringify(MyQuestions))