import React, { useState } from "react";
import "./QuestionsNo.css";


const QuestionsNo = ({changeQuestionIndex ,totalQuestions}) => {
  

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
        {Array.from({ length: totalQuestions }, (_, i) => {
          const qNum = i + 1;
          const statusClass = statuses[qNum] || "notVisited";
          return (
            <button
              key={qNum}
              className={`question-btn notVisited`}
              onClick={() => handleClick(qNum)}
            >
              {qNum}
            </button>
          );
        })}
      </div> 

      {/* Bottom Buttons */}
      <div className="bottom-buttons">
       
        <button className="submit-test">Submit Test</button>
      </div>
    </div>
  );
};

export default QuestionsNo;
