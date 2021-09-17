import React, {useState, useEffect, useRef} from "react"

type answerData = {
    description: string;
    correct: boolean;
};
interface Props {
    answers: any,
    getAnswer: (answer:answerData)=> void;

}


export const InputQuestion: React.FC <Props> = ({answers, getAnswer}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    function onInputF (){
        let userAnswer = inputRef.current!.value;
        let correct :boolean = false;
        {answers.map((e:any, i:number)=>{
            if(e.text === userAnswer){
                correct = true;
                getAnswer({description:userAnswer, correct:correct});
            }

        })}
        getAnswer({description:userAnswer, correct:correct})
    }
    return (

        <div className="btn-container ">
            <input className="input" type="text"  ref={inputRef}/>
            <button className="btn submit" onClick={onInputF}>Submit</button>
        </div>

    );
};

export default InputQuestion;
