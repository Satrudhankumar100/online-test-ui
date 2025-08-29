import React, { useState } from "react";
import "./QuestionsNo.css";
import QuestionStatus from "../../constants/QuestionStatus";


const QuestionsNo = ({changeQuestionIndex ,totalQuestions,handleSubmit}) => {
  

  // Example status for demo purposes
  const [statuses] = useState({
    1: "current",
    2: "attempted",
    3: "unattempted",
    4: "marked",
    5: "attemptedMarked",
  });

  const handleClick = (num) => { 
    changeQuestionIndex(num-1)
  };
  

  return (
    <div className="question-panel">
      {/* Legend */}
      <div className="legend">
        <div><span className="legend-dot marked"></span> Marked For Review</div>
        <div><span className="legend-dot attempted"></span> Attempted</div>
        <div><span className="legend-dot unattempted"></span> Unattempted</div>
        <div><span className="legend-dot notVisited"></span> Not Visited</div>
        <div><span className="legend-dot attemptedMarked"></span> Attempted & Marked</div>
      </div>

      {/* Number Grid */}
      <div className="questions-container">
        {totalQuestions?.map((currQues,i) => {
          
          return (
            <button
              key={currQues?.questionNo}
              className={`question-btn ${currQues?.isCurrent?QuestionStatus.CURRENT: currQues?.questionStatus}`}
              onClick={() => handleClick(currQues?.questionNo)}
            >
              {currQues?.questionNo}
            </button>
          );
        })}
      </div> 

      {/* Bottom Buttons */}
      <div className="bottom-buttons">
       
        <button className="submit-test" onClick={handleSubmit}>Submit Test</button>
      </div>
    </div>
  );
};

export default QuestionsNo;
