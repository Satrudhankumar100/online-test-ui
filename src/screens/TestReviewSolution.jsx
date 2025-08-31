import React, { useEffect, useState } from "react";

const TestReviewSolution = ({storedData}) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // ✅ Fetch from localStorage
    

    // ✅ Convert optionA..E into an array
    const normalizedData = storedData.map((q, index) => ({
      questionNo: index + 1,
      questionTxt: q.questionTxt,
      options: [
        { key: "A", text: q.optionA },
        { key: "B", text: q.optionB },
        { key: "C", text: q.optionC },
        { key: "D", text: q.optionD },
        { key: "E", text: q.optionE },
      ].filter((opt) => opt.text && opt.text.trim() !== ""), // remove empty ones
      correctOption: q.correctOption,
      userAnswer: q.userAnswer, // ✅ store user’s answer
      explanation: q.explanation,
    }));

    setQuestions(normalizedData);
  }, []);

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 text-xl font-bold shadow">
        Test Review & Solutions
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 space-y-6">
        {questions.length === 0 ? (
          <p className="text-gray-500 text-center">No review data found.</p>
        ) : (
          questions.map((q) => (
            <div
              key={q.questionNo}
              className="bg-white p-6 rounded-2xl shadow border border-gray-200"
            >
              {/* Question */}
              <h2 className="text-lg font-semibold mb-4">
                Question {q.questionNo}: {q.questionTxt}
              </h2>

              {/* Options */}
              <ul className="space-y-3 mb-4">
                {q.options.map((opt) => {
                  let optionClass = "p-3 rounded-md border";
                  let mark = "";

                  if (q.correctOption === opt.key) {
                    optionClass += " bg-green-100 border-green-400 font-medium";
                    mark = " ✅ (Correct Answer)";
                  } else if (q.userAnswer === opt.key) {
                    optionClass += " bg-red-100 border-red-400 font-medium";
                    mark = " ❌ (Your Answer)";
                  } else {
                    optionClass += " bg-gray-50 border-gray-200";
                  }

                  return (
                    <li key={opt.key} className={optionClass}>
                      {opt.key}) {opt.text} {mark}
                    </li>
                  );
                })}
              </ul>

              {/* Solution / Explanation */}
              <div className="bg-blue-50 border border-blue-200 p-3 rounded-md">
                <p className="text-blue-700 font-semibold">Solution:</p>
                <p className="text-gray-700">{q.explanation}</p>
              </div>
            </div>
          ))
        )}
      </main>

      {/* Navigation Buttons */}
      <div className="flex justify-between p-4">
        <button className="px-4 py-2 bg-gray-200 rounded-lg">Previous</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          Next
        </button>
      </div>
    </div>
  );
};

export default TestReviewSolution;
