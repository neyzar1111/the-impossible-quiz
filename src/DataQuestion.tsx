const questions = [
    {
        id:1,
        question:'What is 2 + 2?',
        answers:[
            {text: "4", correct: true},
            {text: "14", correct: false},
            {text: "44", correct: false},
            {text: "8", correct: false}
        ]
    },
    {
        id:2,
        question:'What is 5 + 5?',
        answers:[
            {text: "11", correct: false},
            {text: "20", correct: false},
            {text: "10", correct: true},
            {text: "9", correct: false}
        ]
    },
    {
        id:3,
        question:'What is 6 + 5?',
        answers:[
            {text: "11", correct: true},
            {text: "20", correct: false},
            {text: "10", correct: false},
            {text: "9", correct: false}
        ]
    }
]
export default questions;