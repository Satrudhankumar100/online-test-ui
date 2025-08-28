import React, { useEffect, useState } from 'react'
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

  useEffect(()=>{
    handleIsCurrentQuestion(questionIndex);
  },[])


  const handleSetQuestionStatus = (currIndex, currQuestionStatus, updatedOptAnswer = '') => {
  setQuestionStatus(prev =>
    prev.map((q, index) => {
      if (index === currIndex) {
        return {
          ...q,
          optAnswer: updatedOptAnswer !== '' ? updatedOptAnswer : q.optAnswer, // update only if provided
          questionStatus: q.questionStatus===QuestionStatus.ATTEMPTED? QuestionStatus.ATTEMPTED :currQuestionStatus
        };
      }
      return q;
    })
  );
};

const handleIsCurrentQuestion = (currIndex)=>{
    setQuestionStatus(prev =>
    prev.map((q, index) => {
      if (index === currIndex) {
        return {
          ...q,isCurrent:true
          
        };
      }
      return  {
          ...q,isCurrent:false
          
        };;
    })
  );

}



  const changeQuestionIndex = (index) => {
   
   questionStatus[questionIndex].optAnswer===''?  handleSetQuestionStatus(questionIndex,QuestionStatus.UNATTEMPTED) : handleSetQuestionStatus(questionIndex,QuestionStatus.ATTEMPTED_MARKED)

    setQuestionIndex(index)
    handleIsCurrentQuestion(index);
  }

  const handlePreviousQuestionBtn = () => {
    if (questionIndex != 0) {
       questionStatus[questionIndex].optAnswer===''?  handleSetQuestionStatus(questionIndex,QuestionStatus.UNATTEMPTED) : handleSetQuestionStatus(questionIndex,QuestionStatus.ATTEMPTED_MARKED)

     setQuestionIndex(prev=>{
         
         handleIsCurrentQuestion(questionIndex-1);
        return questionIndex - 1
      });
     
    }
    
  }



  const handleNextSaveQuestionBtn = () => {
    if (questionIndex < data.length - 1) {
      
      questionStatus[questionIndex].optAnswer===''?  handleSetQuestionStatus(questionIndex,QuestionStatus.UNATTEMPTED) : handleSetQuestionStatus(questionIndex,QuestionStatus.ATTEMPTED)

      setQuestionIndex(prev=>{
        
         handleIsCurrentQuestion(questionIndex+1);
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
         
         handleIsCurrentQuestion(questionIndex+1);
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
        <div className="subject">Operating System</div>

      </div>


      <div className='maincontainer'>
        <div className="questionans">
          <QuestionAns question={data[questionIndex]} questionNo={questionIndex + 1} questionStatus={questionStatus} handleOptionSelection={handleOptionSelection} />
        </div>
        <div className="questionno">
          <QuestionNo changeQuestionIndex={changeQuestionIndex} totalQuestions={questionStatus}  />
        </div>

      </div>
      <div className="btnSection flex gap-2 px-4 font-semibold">
        <button className='border-gray-400 border-2 px-3 py-2 rounded-md cursor-pointer' onClick={handlePreviousQuestionBtn}>Previous</button>
        <button className='bg-purple-800 px-3 py-2 rounded-md cursor-pointer text-white' onClick={handleMarkAndReview}  >Mark for Review</button>
        <button className='bg-green-400 px-3 py-2 rounded-md cursor-pointer text-white' onClick={handleNextSaveQuestionBtn}>Next/Save</button>

      </div>


    </>
  )
}

export default Test


// step 1. 