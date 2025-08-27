import React from 'react'
import './QuestionAns.css';
const QuestionAns = ({question, questionNo,questionStatus,handleOptionSelection}) => {
   

  return (
    <>
        <div className="main-container">
            <span className="h3">{questionNo}</span>
            
            <span className="question">
               {
                question.questionTxt
               }
            </span>
            <div className="options">
                <form action="">
                    <label className={`option ${questionStatus[questionNo-1]?.optAnswer === "A"?'selected':''}`}>
                         <input type="radio" name="answer" value="A" checked={questionStatus[questionNo-1]?.optAnswer === "A"} onChange={(e)=>handleOptionSelection(e,questionNo)} />
        
                        a. {question.optionA}
                    </label>
                     <label className={`option ${questionStatus[questionNo-1]?.optAnswer === "B"?'selected':''}`}>
                       <input type="radio" name="answer" value="B" checked={questionStatus[questionNo-1]?.optAnswer === "B"} onChange={(e)=>handleOptionSelection(e,questionNo)} />
                         b.{question.optionB}
                    </label>
                     <label className={`option ${questionStatus[questionNo-1]?.optAnswer === "C"?'selected':''}`}>
                        <input type="radio" name="answer" value="C" checked={questionStatus[questionNo-1]?.optAnswer === "B"} onChange={(e)=>handleOptionSelection(e,questionNo)} />
                        c. {question.optionC}
                    </label>
                    <label className={`option ${questionStatus[questionNo-1]?.optAnswer === "D"?'selected':''}`}>
                        <input type="radio" name="answer" value="D" checked={questionStatus[questionNo-1]?.optAnswer === "B"} onChange={(e)=>handleOptionSelection(e,questionNo)} />
                        d. {question.optionD}
                    </label>
                     <label className={`option ${questionStatus[questionNo-1]?.optAnswer === "E"?'selected':''}`}>
                        <input type="radio" name="answer" value="E" checked={questionStatus[questionNo-1]?.optAnswer === "B"} onChange={(e)=>handleOptionSelection(e,questionNo)} />
                        e. None of The Above
                    </label>
                </form>
            </div>
        </div>

    </>
  )
}

export default QuestionAns