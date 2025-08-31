import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AddQuestion() {
  const [titles, setTitles] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState("");
  const [questions, setQuestions] = useState([
    { questionTxt: "", optiona: "", optionb: "", optionc: "", optiond: "", optione: "", correctOption: "", explanation: "", marks: 0 }
  ]);

  // Fetch titles from backend
  useEffect(() => {
    axios.get("http://localhost:8080/test-series/titles")
      .then(res => setTitles(res.data))
      .catch(err => console.error(err));
  }, []);

  // Add new question row
  const addQuestion = () => {
    setQuestions([...questions, { questionTxt: "", optiona: "", optionb: "", optionc: "", optiond: "", optione: "", correctOption: "", explanation: "", marks: 0 }]);
  };

  // Handle change
  const handleChange = (index, field, value) => {
    const newQuestions = [...questions];
    newQuestions[index][field] = value;
    setQuestions(newQuestions);
  };

  // Submit
  const handleSubmit = () => {
    const payload = questions.map(q => ({
      ...q,
      testSeriesId: selectedSeries
    }));

    axios.post("http://localhost:8080/questions/bulk", payload)
      .then(res => {
        alert("Questions saved successfully!");
        console.log(res.data);
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add Questions</h2>

      {/* Dropdown for titles */}
      <select
        className="border p-2 rounded w-full mb-4"
        value={selectedSeries}
        onChange={(e) => setSelectedSeries(e.target.value)}
      >
        <option value="">Select Test Series</option>
        {titles.map(t => (
          <option key={t.id} value={t.id}>{t.title}</option>
        ))}
      </select>

      {/* Question forms */}
      {questions.map((q, idx) => (
        <div key={idx} className="border p-4 mb-4 rounded bg-gray-50">
          <input
            type="text"
            placeholder="Question Text"
            className="border p-2 w-full mb-2"
            value={q.questionTxt}
            onChange={(e) => handleChange(idx, "questionTxt", e.target.value)}
          />

          {["optiona", "optionb", "optionc", "optiond", "optione"].map((opt) => (
            <input
              key={opt}
              type="text"
              placeholder={opt.toUpperCase()}
              className="border p-2 w-full mb-2"
              value={q[opt]}
              onChange={(e) => handleChange(idx, opt, e.target.value)}
            />
          ))}

          <input
            type="text"
            placeholder="Correct Option"
            className="border p-2 w-full mb-2"
            value={q.correctOption}
            onChange={(e) => handleChange(idx, "correctOption", e.target.value)}
          />

          <input
            type="text"
            placeholder="Explanation"
            className="border p-2 w-full mb-2"
            value={q.explanation}
            onChange={(e) => handleChange(idx, "explanation", e.target.value)}
          />

          <input
            type="number"
            placeholder="Marks"
            className="border p-2 w-full mb-2"
            value={q.marks}
            onChange={(e) => handleChange(idx, "marks", e.target.value)}
          />
        </div>
      ))}

      <button
        onClick={addQuestion}
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
      >
        + Add More Question
      </button>

      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white px-4 py-2 rounded"
        disabled={!selectedSeries}
      >
        Save All
      </button>
    </div>
  );
}
