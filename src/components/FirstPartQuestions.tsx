import React, {useRef, useState} from 'react';
import {QuestionContainer} from "./QuestionContainer";
import DataQuestion from "../DataQuestion";
import {Link} from "react-router-dom";


export const FirstPartQuestions: React.FC  = () =>  {
    //---------Part1
    const [elemDisplay, setDisplay] = useState<boolean>(false);
    const [question, setQuestion] = useState<any>(DataQuestion[0]);
    const [ans, set_Answer] = useState<any>("");
    const [count, countSet] = useState<any>(0);
    const [countQuiz, setCountQuiz] = useState(0);

    function startGame (){
        setDisplay(true);
        let copyQuestions = [...DataQuestion]
        let shuffledQuestion = copyQuestions.sort(()=>Math.random() - .5);
        if(shuffledQuestion.length > 0){
            setQuestion(shuffledQuestion.pop())
            setCountQuiz(countQuiz + 1);
        }else{
            setDisplay(false);
            setDisplayPart2(true);
        }
        set_Answer("")
        countSet(0)
        // divRef.current!.style.display= "none";

    }
    const [countCorrect, setCountCorrect] = useState <number>(0)
    function getAnswer(answer:string){

        countSet(count + 1);
        if( count === 0 ){
            set_Answer(answer);

        }
        if( count === 0 && answer=='Wrong.' ){
            // console.log("geey its wrong")
            // buttonRef.current!.style.display= "none";
        }
        if( count === 0 && answer=='Correct!' ){
            setCountCorrect(countCorrect + 1);
        }


    }

    //----------Part2

    const [elemDisplayPart2, setDisplayPart2] = useState<boolean>(false);


    return (
        <div className="container-quizwrap">
            <h3>Quiz Part1</h3>
            <Link to="/">
                <button className={`btn isHidden ${elemDisplayPart2 ? 'show': 'isHidden'}`} >
                    back to menu
                </button>
            </Link>
            <div className={`message ${elemDisplay ? 'show': 'isHidden'}`}>
                Question № {countQuiz}/3
            </div>

            <QuestionContainer
                elemDisplay={elemDisplay}
                question={question}
                getAnswer={getAnswer}
            />
            <div className="container-controls controls">
                { (countCorrect >= 2)
                    ? <div className={`isHidden ${elemDisplayPart2  ? 'show': 'isHidden'}`}> You score {countCorrect}/3 . Let's go to next level!</div>

                    :<div className={`isHidden ${elemDisplayPart2  ? 'show': 'isHidden'}`}>You cant go next level</div>
                }

                <Link to="/SecondPartQuestions">
                    <button  className={`btn isHidden ${countCorrect > 2 ? 'show': 'isHidden'}`} >Continue Part2</button>
                </Link>
                <button
                    className={`showBtn btn ${elemDisplayPart2 ? 'isHidden': 'show'}`}
                    onClick={startGame}>{elemDisplay? "Next" : "Start"}
                </button>
            </div>
            <div className="message-question">{ans} </div>
        </div>
    );
}


