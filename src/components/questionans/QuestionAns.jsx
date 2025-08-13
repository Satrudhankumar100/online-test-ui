import React from 'react'
import './QuestionAns.css';
const QuestionAns = () => {

  return (
    <>
        <div className="main-container">
            <div className="h3">1</div>
            <hr />
            <div className="question">
                The octal number (651.124)<sub>8</sub> is equivalent to– <br />
        आधारिक संख्या (651.124)<sub>8</sub> किसके समकक्ष है?
            </div>
            <div className="options">
                <form action="">
                    <label className="option">
                        <input type="radio" name="answer"  value="a"/>
                        a. Binary to Decimal Convertion
                    </label>
                    <label className="option">
                        <input type="radio" name="answer"  value="b"/>
                        b.Decimal to Binary Convertion
                    </label>
                    <label className="option">
                        <input type="radio" name="answer"  value="c"/>
                        c. Binary Multiplication
                    </label>
                    <label className="option">
                        <input type="radio" name="answer"  value="d"/>
                        d. More Than One of The above
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