import React, {useRef} from 'react';
import {Buttons} from "./Buttons";
import InputQuestion from "./inputQuestion";

type answerData = {
    description: string;
    correct: boolean;
};
interface Props {
    elemDisplay: boolean ,
    question: any,
    getAnswer: (answer:answerData)=> void;
}


export const QuestionContainerPart2: React.FC <Props> = ({elemDisplay, question,getAnswer}) =>{

    return (
        <div className={`question-container ${elemDisplay ? 'show': 'isHidden'}`} >
            <h5 className="question">{question.question}</h5>
            <InputQuestion answers={question.answers} getAnswer={getAnswer}/>
        </div>
    );
};

export default QuestionContainerPart2;
