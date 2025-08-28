import React from "react";

const TestReviewSolution = () => {
  return (
    <div className="w-screen h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 text-xl font-bold shadow">
        Test Review & Solutions
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        {/* Question Card */}
        <div className="bg-white p-6 rounded-2xl shadow mb-6 w-full">
          <h2 className="text-lg font-semibold mb-4">
            Question 1: The octal number (651.124)₈ is equivalent to?
          </h2>

          {/* Options */}
          <ul className="space-y-3">
            <li className="p-3 rounded-lg border hover:bg-gray-100 cursor-pointer">
              A) (421.52)₁₀
            </li>
            <li className="p-3 rounded-lg border bg-green-100">
              B) (425.17)₁₀ ✅ (Correct Answer)
            </li>
            <li className="p-3 rounded-lg border hover:bg-gray-100 cursor-pointer">
              C) (419.62)₁₀
            </li>
            <li className="p-3 rounded-lg border bg-red-100">
              D) (429.15)₁₀ ❌ (Your Answer)
            </li>
          </ul>

          {/* Solution */}
          <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-700 mb-2">Solution:</h3>
            <p className="text-gray-700">
              Convert octal (651.124)₈ → decimal step by step using positional
              values of 8.  
              Correct conversion gives (425.17)₁₀.
            </p>
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="bg-white shadow p-4 flex justify-between">
        <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
          Previous
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Next
        </button>
      </footer>
    </div>
  );
};

export default TestReviewSolution;
