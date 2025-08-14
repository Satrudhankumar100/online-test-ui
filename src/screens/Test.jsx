import React from 'react'
import CountdownTimer from '../components/timer/CountDownTimer'
import './Test.css';
import QuestionAns from '../components/questionans/QuestionAns'
import QuestionNo from '../components/questionno/QuestionsNo'


const Test = () => {
  return (
    <>
     <div className='nav'>
      <div className="timer">
        <CountdownTimer/>
      </div>
      <div className="subject">DIGITAL ELECTRONIC</div>
     
     </div>


      <div className='maincontainer'>
        <div className="questionans">
          <QuestionAns/>
        </div>
        <div className="questionno">
          <QuestionNo/>
        </div>
        
      </div>
      <div className="btnSection">
        <button>Previus</button>
        <button>Next</button>
        <button>Save/Next</button>
      </div>

      
    </>
  )
}

export default Test