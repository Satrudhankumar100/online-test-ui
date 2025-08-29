// src/screens/Leaderboard.jsx
import React, { useEffect, useState } from "react";
import TestReviewSolution from "./TestReviewSolution";

const Leaderboard = () => {
  
  const [stats,setStats] = useState({
    score: 40,
    rank: "455/458",
    percentile: "0.66%",
    correct: 20,
    incorrect: 30,
    unattempted: 10,
    accuracy: "0.00%",
    time: "0:58:08",
  })

  const [currTab,setCurrTab] = useState(0);

  useEffect(()=>{
    
  },[])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-xl font-bold">Online Test Result</h1>
          <p className="text-sm">Attempt 1</p>
        </div>
      </header>

      {/* Content */}
      <main className="flex-grow max-w-6xl mx-auto w-full px-6 py-8">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3">
          Results
        </h2>

        {/* Tabs */}
        <div className="flex space-x-6 border-b pb-3 mb-6 text-gray-600 text-sm font-medium">
          <button className={`cursor-pointer ${currTab==0?'text-blue-600 border-b-2 border-blue-600 pb-1':''} `} onClick={()=>setCurrTab(0)}>
            Overview
          </button>
          <button className={`cursor-pointer ${currTab==1?'text-blue-600 border-b-2 border-blue-600 pb-1':''} `} onClick={()=>setCurrTab(1)}>All</button>
          <button className={`cursor-pointer ${currTab==2?'text-blue-600 border-b-2 border-blue-600 pb-1':''} `} onClick={()=>setCurrTab(2)}>Correct</button>
          <button className={`cursor-pointer ${currTab==3?'text-blue-600 border-b-2 border-blue-600 pb-1':''} `} onClick={()=>setCurrTab(3)}>Incorrect</button>
          <button className={`cursor-pointer ${currTab==4?'text-blue-600 border-b-2 border-blue-600 pb-1':''} `} onClick={()=>setCurrTab(4)}>Unattempted</button>
          
        </div>
        {currTab==0 && <div>

             {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-lg font-semibold text-orange-500">🏆</p>
            <p className="mt-2 text-sm text-gray-600">Your Score</p>
            <p className="text-xl font-bold">{stats.score}/50</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-lg font-semibold text-purple-500">🎯</p>
            <p className="mt-2 text-sm text-gray-600">Rank</p>
            <p className="text-xl font-bold">{stats.rank}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-lg font-semibold text-blue-500">📊</p>
            <p className="mt-2 text-sm text-gray-600">Percentile</p>
            <p className="text-xl font-bold">{stats.percentile}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-lg font-semibold text-green-500">✔️</p>
            <p className="mt-2 text-sm text-gray-600">Correct</p>
            <p className="text-xl font-bold">{stats.correct}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-lg font-semibold text-red-500">❌</p>
            <p className="mt-2 text-sm text-gray-600">Incorrect</p>
            <p className="text-xl font-bold">{stats.incorrect}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-lg font-semibold text-gray-500">⭕</p>
            <p className="mt-2 text-sm text-gray-600">Unattempted</p>
            <p className="text-xl font-bold">{stats.unattempted}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-lg font-semibold text-blue-600">🎯</p>
            <p className="mt-2 text-sm text-gray-600">Accuracy</p>
            <p className="text-xl font-bold">{stats.accuracy}</p>
          </div>
        </section>

        {/* Graph */}
        <section className="bg-white p-6 rounded-xl shadow mb-10">
          <h3 className="font-semibold text-gray-700 mb-4">Question Stats</h3>
          <div className="flex items-end justify-center space-x-12 h-48">
            <div className="flex flex-col items-center">
              <div className="bg-green-400 w-12 h-0 rounded" style={{ height: `${stats.correct}px` }}></div>
              <p className="text-sm mt-2">Correct</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-red-400 w-12 h-0 rounded" style={{ height: `${stats.incorrect}px` }}></div>
              <p className="text-sm mt-2"  >Incorrect</p>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="bg-gray-400 w-12 rounded"
                style={{ height: `${stats.unattempted}px` }}
              ></div>
              <p className="text-sm mt-2">Unattempted</p>
            </div>
          </div>
        </section>

        {/* Sectional Summary */}
        <section className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold text-gray-700 mb-4">
            Sectional Summary
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-center">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 border">Section Name</th>
                  <th className="p-2 border">Score</th>
                  <th className="p-2 border">Cutoff Score</th>
                  <th className="p-2 border">Attempted</th>
                  <th className="p-2 border">Correct</th>
                  <th className="p-2 border">Incorrect</th>
                  <th className="p-2 border">Unattempted</th>
                  <th className="p-2 border">Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">ALL</td>
                  <td className="p-2 border">{stats.score.toFixed(2)}</td>
                  <td className="p-2 border">0</td>
                  <td className="p-2 border">0</td>
                  <td className="p-2 border">{stats.correct}</td>
                  <td className="p-2 border">{stats.incorrect}</td>
                  <td className="p-2 border">{stats.unattempted}</td>
                  <td className="p-2 border">{stats.time}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
          
        </div>}

        {
          currTab==1 &&
          <div>
              <TestReviewSolution />
          </div>
        }
       
      </main>
    </div>
  );
};

export default Leaderboard;
