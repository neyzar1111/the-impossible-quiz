const questionsPart2 = [
    {
        id:1,
        question:'\n' +
            'How do you write an inline style which specifies the font-size:12px and color:red; in JSX?',
        answers:[
            {text: "style={{font-size:12,color:'red'}}", correct: false},
            {text: "style={{fontSize:'12px',color:'red'}}", correct: true},
            {text: "style={fontSize:'12px',color:'red'}", correct: false},
            {text: "style={{font-size:12px,color:'red'}}", correct: false}
        ]
    },
    {
        id:2,
        question:'React merges the object provided into the current state using ___.',
        answers:[
            {text: "setState()", correct: true},
            {text: "State()", correct: false},
        ]
    },
    {
        id:3,
        question: 'The arbitrary inputs of components are called ___.',
        answers:[
            {text: "Keys", correct: false},
            {text: "Props", correct: true},
            {text: "Ref", correct: false},
        ]
    }
]
export default questionsPart2;