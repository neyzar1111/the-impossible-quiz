import React, {useState} from 'react';
import DataQuestionPart2 from "../DataQuestionPart2";
import  { useRef } from 'react'
import {Link} from "react-router-dom";
import QuestionContainerPart2 from "./QuestionContainerPart2";


interface TextNode {
    text:string,
}
export const SecondPartQuestions: React.FC  = () =>{
    //---------Part2
    const [elemDisplay, setDisplay] = useState<boolean>(false);
    const [question, setQuestion] = useState<any>(DataQuestionPart2[0]);
    const [ans, set_Answer] = useState<any>("");
    const [count, countSet] = useState<any>(0);
    const [countQuiz, setCountQuiz] = useState(0);
    const [result, setResult] = useState("");

    function startGame (){
        setDisplay(true);
        let copyQuestions = [...DataQuestionPart2]
        let shuffledQuestion = copyQuestions.sort(()=>Math.random() - .5);
        if(shuffledQuestion.length > 0){
            setQuestion(shuffledQuestion.pop())
            setCountQuiz(countQuiz + 1);
        }else{
            setDisplay(false);
        }
        set_Answer("")
        countSet(0)

    }
    type answerData = {
        description: string;
        correct: boolean;
    };
    function getAnswer(answer:answerData):void{
        console.log(answer.correct)
        if(answer.correct){
            setResult("Correct!")
        } else{
            setResult("Wrong!")

        }

    }



    return (
        <div className="SecondPartQuestions container-quizwrap">
            <h3>Quiz Part2</h3>
                <QuestionContainerPart2 elemDisplay={elemDisplay} question={question} getAnswer={getAnswer} />
                <div className="container-controls controls">
                    <button  className="btn" onClick={startGame}>{elemDisplay? "Next" : "Start"}</button>
                </div>
                <div className="message-question">{result} </div>
        </div>
    );
};


