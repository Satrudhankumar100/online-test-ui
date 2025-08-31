import React, { useEffect, useState } from 'react'
import CountdownTimer from '../components/timer/CountDownTimer'
import './Test.css';
import QuestionAns from '../components/questionans/QuestionAns'
import QuestionNo from '../components/questionno/QuestionsNo'

import { useLocalStorage } from '../hooks/useLocalStorage.js';
import QuestionStatus from '../constants/QuestionStatus.js';
import { Link } from 'react-router-dom';
import { LocalStorageKeys } from '../utils/LocalStorageKeys.js';
import axios from 'axios';
import { Baseurl } from '../utils/BaseUrl.js';

const Test = () => {


  const [data, setData] = useState([]);
  const [modelPopup, setModelPopup] = useState(false);

  const [questionIndex, setQuestionIndex] = useState(0);

  const [questionStatus, setQuestionStatus] = useLocalStorage(
    LocalStorageKeys.QUESTION_STATUS,
    Array.from({ length: data.length }, (v, i) => ({
      questionNo: i + 1,
      optAnswer: "",
      questionStatus: QuestionStatus.NOT_VISITED,
      isCurrent: i === 0,
      questionId: i
    }))
  );

  const handleIncomingQuestion = async () => {
    try {
      const testSeriesId = localStorage.getItem(LocalStorageKeys.TEST_SERIES_ID);
      const resp = await axios.get(`${Baseurl}/question/find-all/${testSeriesId}`);
      console.log(resp.data?.data);
      setData(resp.data?.data);
      setQuestionStatus(resp.data?.data.map((v, i) => ({
        questionNo: i + 1,
        optAnswer: "",
        questionStatus: QuestionStatus.NOT_VISITED,
        isCurrent: i === 0,
        questionId: v?.questionId
      })))
      handleIsCurrentQuestion(questionIndex);
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {

    handleIncomingQuestion()


  }, [])


  const handleSetQuestionStatus = (currIndex, currQuestionStatus, updatedOptAnswer = '') => {
    setQuestionStatus(prev =>
      prev.map((q, index) => {
        if (index === currIndex) {
          return {
            ...q,
            optAnswer: updatedOptAnswer !== '' ? updatedOptAnswer : q.optAnswer, // update only if provided
            questionStatus: q.questionStatus === QuestionStatus.ATTEMPTED ? QuestionStatus.ATTEMPTED : currQuestionStatus
          };
        }
        return q;
      })
    );
  };

  const handleIsCurrentQuestion = (currIndex) => {
    setQuestionStatus(prev =>
      prev.map((q, index) => {
        if (index === currIndex) {
          return {
            ...q, isCurrent: true

          };
        }
        return {
          ...q, isCurrent: false

        };;
      })
    );

  }



  const changeQuestionIndex = (index) => {

    questionStatus[questionIndex].optAnswer === '' ? handleSetQuestionStatus(questionIndex, QuestionStatus.UNATTEMPTED) : handleSetQuestionStatus(questionIndex, QuestionStatus.ATTEMPTED_MARKED)

    setQuestionIndex(index)
    handleIsCurrentQuestion(index);
  }

  const handlePreviousQuestionBtn = () => {
    if (questionIndex != 0) {
      questionStatus[questionIndex].optAnswer === '' ? handleSetQuestionStatus(questionIndex, QuestionStatus.UNATTEMPTED) : handleSetQuestionStatus(questionIndex, QuestionStatus.ATTEMPTED_MARKED)

      setQuestionIndex(prev => {

        handleIsCurrentQuestion(questionIndex - 1);
        return questionIndex - 1
      });

    }

  }



  const handleNextSaveQuestionBtn = () => {
    if (questionIndex < data.length - 1) {

      questionStatus[questionIndex].optAnswer === '' ? handleSetQuestionStatus(questionIndex, QuestionStatus.UNATTEMPTED) : handleSetQuestionStatus(questionIndex, QuestionStatus.ATTEMPTED)

      //saving question status into localstorage
      localStorage.setItem("reviewData", JSON.stringify(questionStatus));

      setQuestionIndex(prev => {

        handleIsCurrentQuestion(questionIndex + 1);
        return questionIndex + 1
      });

    }
    else if (questionIndex < data.length) {
      questionStatus[questionIndex].optAnswer === '' ? handleSetQuestionStatus(questionIndex, QuestionStatus.UNATTEMPTED) : handleSetQuestionStatus(questionIndex, QuestionStatus.ATTEMPTED)

      // save last question
      localStorage.setItem("reviewData", JSON.stringify(questionStatus));
    }

  }

  const handleOptionSelection = (e, currQuestionNo) => {
    console.log(currQuestionNo + ":" + e.target.value)
    handleSetQuestionStatus(currQuestionNo - 1, QuestionStatus.ATTEMPTED_MARKED, e?.target.value);

  }

  const handleMarkAndReview = () => {
    if (questionIndex < data.length - 1) {

      questionStatus[questionIndex].optAnswer === QuestionStatus.ATTEMPTED_MARKED ? handleSetQuestionStatus(questionIndex, QuestionStatus.ATTEMPTED_MARKED) : handleSetQuestionStatus(questionIndex, QuestionStatus.MARKED)

      setQuestionIndex(prev => {

        handleIsCurrentQuestion(questionIndex + 1);
        return questionIndex + 1
      });
    }
  }

  const handleSumbitBtn = () => {
    setModelPopup(true);
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
        <div className="questionno mt-5">
          <QuestionNo changeQuestionIndex={changeQuestionIndex} totalQuestions={questionStatus} handleSubmit={handleSumbitBtn} />
        </div>

      </div>
      <div className="btnSection flex gap-2 px-4 font-semibold">
        <button className='border-gray-400 border-2 px-3 py-2 rounded-md cursor-pointer' onClick={handlePreviousQuestionBtn}>Previous</button>
        <button className='bg-purple-800 px-3 py-2 rounded-md cursor-pointer text-white' onClick={handleMarkAndReview}  >Mark for Review</button>
        <button className='bg-green-400 px-3 py-2 rounded-md cursor-pointer text-white' onClick={handleNextSaveQuestionBtn}>Next/Save</button>

      </div>
      {
        modelPopup &&
        <div className='absolute top-0 left-0 w-full h-full overflow-hidden bg-black/85 z-50'>
          {/* Close Button */}
          <div
            className='absolute top-5 right-10 text-2xl cursor-pointer text-red-400 hover:text-red-600'
            onClick={() => setModelPopup(false)}
          >
            ✕
          </div>

          {/* Modal Content */}
          <div className='absolute top-1/2 left-1/2 w-2/3 md:w-1/2 lg:w-1/3 h-auto p-6 -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-2xl flex flex-col gap-6'>

            {/* Title */}
            <h2 className="text-2xl font-bold text-center text-gray-800">Question Summary</h2>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-100 border border-green-400 rounded-xl p-4 text-center shadow-sm">
                <p className="text-lg font-semibold text-green-700">Attempted</p>
                <p className="text-2xl font-bold text-green-900">
                  {questionStatus.filter(q => q.questionStatus === QuestionStatus.ATTEMPTED).length}
                </p>
              </div>

              <div className="bg-yellow-100 border border-yellow-400 rounded-xl p-4 text-center shadow-sm">
                <p className="text-lg font-semibold text-yellow-700">Unattempted</p>
                <p className="text-2xl font-bold text-yellow-900">
                  {questionStatus.filter(q => q.questionStatus === QuestionStatus.UNATTEMPTED).length}
                </p>
              </div>

              <div className="bg-purple-100 border border-purple-400 rounded-xl p-4 text-center shadow-sm">
                <p className="text-lg font-semibold text-purple-700">Marked for Review</p>
                <p className="text-2xl font-bold text-purple-900">
                  {questionStatus.filter(q => q.questionStatus === QuestionStatus.ATTEMPTED_MARKED || q.questionStatus === QuestionStatus.MARKED).length}
                </p>
              </div>

              <div className="bg-red-100 border border-red-400 rounded-xl p-4 text-center shadow-sm">
                <p className="text-lg font-semibold text-red-700">Not Visited</p>
                <p className="text-2xl font-bold text-red-900">
                  {questionStatus.filter(q => q.questionStatus === QuestionStatus.NOT_VISITED).length}
                </p>
              </div>
            </div>

            {/* Final Submit Button */}
            <div className="flex justify-end">
              <Link to={'/result'}
                className="px-6 py-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
              >
                Final Submit
              </Link>
            </div>
          </div>
        </div>

      }


    </>
  )
}

export default Test


// step 1. 