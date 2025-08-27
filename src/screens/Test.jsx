import React, { useState } from 'react'
import CountdownTimer from '../components/timer/CountDownTimer'
import './Test.css';
import QuestionAns from '../components/questionans/QuestionAns'
import QuestionNo from '../components/questionno/QuestionsNo'
import { data } from '../screens/data.js';
import { useLocalStorage } from '../hooks/useLocalStorage.js';
import QuestionStatus from '../constants/QuestionStatus.js';

const Test = () => {


  let question = data.length;

  const [questionIndex, setQuestionIndex] = useState(0);

  const [questionStatus, setQuestionStatus] = useLocalStorage(
    "questionStatus",
    Array.from({ length: data.length }, (v, i) => ({
      questionNo: i+1,
      optAnswer: "",
      questionStatus: QuestionStatus.NOT_VISITED,
      isCurrent:i===0
    }))
  );


  const handleSetQuestionStatus = (currIndex, currQuestionStatus, updatedOptAnswer = '') => {
  setQuestionStatus(prev =>
    prev.map((q, index) => {
      if (index === currIndex) {
        return {
          ...q,
          optAnswer: updatedOptAnswer !== '' ? updatedOptAnswer : q.optAnswer, // update only if provided
          questionStatus: currQuestionStatus
        };
      }
      return q;
    })
  );
};

const handleIsCurrentQuestion = (currIndex,isCurrQuestion)=>{
    setQuestionStatus(prev =>
    prev.map((q, index) => {
      if (index === currIndex) {
        return {
          ...q,isCurrent:isCurrQuestion
          
        };
      }
      return q;
    })
  );

}



  const changeQuestionIndex = (index) => {
   handleIsCurrentQuestion(questionIndex,false);
   questionStatus[questionIndex].optAnswer===''?  handleSetQuestionStatus(questionIndex,QuestionStatus.UNATTEMPTED) : handleSetQuestionStatus(questionIndex,QuestionStatus.ATTEMPTED_MARKED)

    setQuestionIndex(index)
    handleIsCurrentQuestion(index,true);
  }

  const handlePreviousQuestionBtn = () => {
    if (questionIndex != 0) {
       questionStatus[questionIndex].optAnswer===''?  handleSetQuestionStatus(questionIndex,QuestionStatus.UNATTEMPTED) : handleSetQuestionStatus(questionIndex,QuestionStatus.ATTEMPTED)

     setQuestionIndex(prev=>{
         handleIsCurrentQuestion(questionIndex,false);
         handleIsCurrentQuestion(questionIndex-1,true);
        return questionIndex - 1
      });
     
    }
    
  }



  const handleNextSaveQuestionBtn = () => {
    if (questionIndex < data.length - 1) {
      
      questionStatus[questionIndex].optAnswer===''?  handleSetQuestionStatus(questionIndex,QuestionStatus.UNATTEMPTED) : handleSetQuestionStatus(questionIndex,QuestionStatus.ATTEMPTED)

      setQuestionIndex(prev=>{
         handleIsCurrentQuestion(questionIndex,false);
         handleIsCurrentQuestion(questionIndex+1,true);
        return questionIndex + 1
      });

      //status of question
     
    
    }
   
  }

  const handleOptionSelection = (e,currQuestionNo)=>{
    console.log(currQuestionNo+":"+e.target.value)
    handleSetQuestionStatus(currQuestionNo-1,QuestionStatus.ATTEMPTED_MARKED,e?.target.value);
    
  }

  const handleMarkAndReview = ()=>{
     if (questionIndex < data.length - 1) {
      
      questionStatus[questionIndex].optAnswer===QuestionStatus.ATTEMPTED_MARKED?  handleSetQuestionStatus(questionIndex,QuestionStatus.ATTEMPTED_MARKED) : handleSetQuestionStatus(questionIndex,QuestionStatus.MARKED)

      setQuestionIndex(prev=>{
         handleIsCurrentQuestion(questionIndex,false);
         handleIsCurrentQuestion(questionIndex+1,true);
        return questionIndex + 1
      });

     
     
    
    }
  }


  return (
    <>
      <div className='nav'>
        <div className="timer">
          <CountdownTimer />
        </div>
        <div className="subject">DIGITAL ELECTRONIC</div>

      </div>


      <div className='maincontainer'>
        <div className="questionans">
          <QuestionAns question={data[questionIndex]} questionNo={questionIndex + 1} questionStatus={questionStatus} handleOptionSelection={handleOptionSelection} />
        </div>
        <div className="questionno">
          <QuestionNo changeQuestionIndex={changeQuestionIndex} totalQuestions={questionStatus}  />
        </div>

      </div>
      <div className="btnSection">
        <button className='btnS' onClick={handlePreviousQuestionBtn}>Previus</button>
        <button className='btnS' onClick={handleMarkAndReview}  >Mark for Review</button>
        <button className='btnS' onClick={handleNextSaveQuestionBtn}>Next/Save</button>

      </div>


    </>
  )
}

export default Test


// step 1. 