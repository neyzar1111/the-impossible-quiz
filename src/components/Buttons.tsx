import React,{useState,useEffect}  from "react"


interface Props {
    answers: any,
    getAnswer: (answer:string)=> void;

}


export const Buttons: React.FC <Props> = ({answers, getAnswer}) => {
    // const [answer, setAnswer] = useState<string>('');

    return (

            <div className="btn-container ">
                {answers.map((e:any, i:number)=>{
                    if(e.correct){

                        return(
                            //@ts-ignore
                            <button key ={i} className ="btn" data="true" onClick={(e:MouseEvent)=>getAnswer("Correct!")} >{e.text} </button>
                        )
                    } else{
                        return(
                            //@ts-ignore
                            <button key ={i} className ="btn" onClick={(e:MouseEvent)=>getAnswer("Wrong.")}>{e.text}</button>
                        )
                    }

                })}
            </div>

    );
};

export default Buttons;
