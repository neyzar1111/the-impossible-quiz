import React from 'react';
import {Buttons} from "./Buttons";



interface Props {
    elemDisplay: boolean ,
    question: any,
    getAnswer: (answer:string)=> void;
}
export const QuestionContainer: React.FC <Props> = ({elemDisplay, question,getAnswer}) =>{
    return (
            <div className={`question-container ${elemDisplay ? 'show': 'isHidden'}`} >
                <h2 className="question">{question.question}</h2>
                <Buttons answers={question.answers} getAnswer={getAnswer} />
            </div>
    );
};

export default QuestionContainer;
