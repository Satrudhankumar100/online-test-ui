import React, { useState } from 'react'
import CountdownTimer from '../components/timer/CountDownTimer'
import './Test.css';
import QuestionAns from '../components/questionans/QuestionAns'
import QuestionNo from '../components/questionno/QuestionsNo'
import { data } from '../screens/data.js';

const Test = () => {


  let question=data.length;
    
    const [questionIndex, setQuestionIndex] = useState(0);

    const[questionStatus,setSquestionStatus]=useState();
    
     
      const changeQuestionIndex=(index)=>{
        setQuestionIndex(index)
      }

      const handlePreviousQuestionBtn=()=>{
          if(questionIndex!=0){
            setQuestionIndex(questionIndex-1)
          }
      }


      //1. find current question
      //2. find which option select
      //3. qNo
      //4. option
      //5. state
      
      
      const handleNextSaveQuestionBtn=()=>{
        if(questionIndex<data.length-1){
          setQuestionIndex(questionIndex+1);
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
          <QuestionAns question={data[questionIndex]} questionNo={questionIndex+1} />
        </div>
        <div className="questionno">
          <QuestionNo changeQuestionIndex={changeQuestionIndex} totalQuestions={data.length}  />
        </div>

      </div>
      <div className="btnSection">
        <button className='btnS' onClick={handlePreviousQuestionBtn}>Previus</button>
        <button className='btnS' onClick={handleNextSaveQuestionBtn}>Next/Save</button>
        <button className='btnS'  >Mark for Review</button>
        <button className='btnS' >Save/Next</button>
      </div>


    </>
  )
}

export default Test


// step 1. 