import React from 'react'
import './QuestionAns.css';
const QuestionAns = ({question, questionNo}) => {
   

  return (
    <>
        <div className="main-container">
            <div className="h3">{questionNo}</div>
            <hr />
            <div className="question">
               {
                question.questionTxt
               }
            </div>
            <div className="options">
                <form action="">
                    <label className="option">
                        <input type="radio" name="answer"  value="a"/>
                        a. {question.optionA}
                    </label>
                    <label className="option">
                        <input type="radio" name="answer"  value="b"/>
                        b.{question.optionB}
                    </label>
                    <label className="option">
                        <input type="radio" name="answer"  value="c"/>
                        c. {question.optionC}
                    </label>
                    <label className="option">
                        <input type="radio" name="answer"  value="d"/>
                        d. {question.optionD}
                    </label>
                    <label className="option">
                        <input type="radio" name="answer"  value="e"/>
                        e. None of The Above
                    </label>
                </form>
            </div>
        </div>

    </>
  )
}

export default QuestionAns