import React, { useEffect } from 'react'
import "./Instruction.css"
import { Link, useNavigate } from 'react-router-dom';
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
const Instruction = () => {

       const isAuthenticated = useIsAuthenticated()
        const navigate = useNavigate();

    const handleClose=()=>{
        alert("Are sure you want to close test");
    };
    useEffect(()=>{
         if(!isAuthenticated()){
             navigate("/login")
        }
    },[])
    return (
        <>
            <div className="container">
                <div className="navContainer">
                    <div className="leftPanel"><h3>1. Topic Test-1 (Digital Electronics-1)   </h3></div>
                    <div className="rightPanel">
                        <button className='closeBtn' onClick={handleClose}>close</button>
                    </div>
                </div>

                <div className="intruction">
                    <div className="timeMarks">
                        <h3>Duration  60 minute</h3>
                        <h3>Maximum Marks: 50</h3>
                    </div>

                    <div className="termCondition">
                        <ul>
                            <li>Ensure you have a stable internet connection before starting the test.</li>
                            <li>You must attempt all the questions.</li>
                            <li>The number of questions, duration and maximum marks have been specified above.</li>
                            <li>Some questions may have negative marking. Please attempt them carefully.</li>
                            <li>You have to complete the test as per the allotted time.</li>
                            <li>This test is setup as per the latest exam pattern and difficulty level.</li>
                            <li>Make sure that you complete the test before you submit the test. Do not close the browser before your test is complete.</li>
                            <li>Submit your answers before the time limit expires.</li>
                            <li>Any attempt to copy, print, or take screenshots of the test is strictly prohibited.</li>
                            <li>Follow any specific on-screen prompts or instructions provided by the test platform.</li>
                            <li>Pay attention to the time remaining and pace yourself accordingly.</li>
                            <li>Read each question carefully and double-check your answers before submitting.</li>
                            <li>I have read all the instructions carefully and have understood them. I agree not to cheat or use unfair means in this examination. I understand that using unfair means of any sort for my own or someone else’s advantage will lead to my immediate disqualification.</li>
                        </ul>

                    </div>
                </div>

                <div className='flex justify-center'>

                    <Link to="/start-test" className='bg-blue-400 px-4 py-2 text-white rounded-xl'>Agree and Continue</Link>
                </div>

            </div>
        </>
    )
}

export default Instruction