import React, { useState, useEffect } from "react";
import axios from "axios";

export default function BulkQuestionUpload() {
  const [titles, setTitles] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [jsonInput, setJsonInput] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/testseries/titles")
      .then((res) => setTitles(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let questionsArray = JSON.parse(jsonInput);

      const payload = {
        testSeriesId: selectedSeries?.testSeriesId,
        title: selectedSeries?.title,
        questions: questionsArray,
      };

      await axios.post("http://localhost:8080/api/questions/save", payload);
      alert("✅ Questions saved successfully!");
      setJsonInput("");
    } catch (error) {
      console.error(error);
      alert("❌ Invalid JSON or error saving questions!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          📘 Bulk Question Upload
        </h2>

        {/* Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Select Test Series
          </label>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            value={selectedSeries?.testSeriesId || ""}
            onChange={(e) => {
              const selected = titles.find(
                (t) => t.testSeriesId === Number(e.target.value)
              );
              setSelectedSeries(selected);
            }}
          >
            <option value="">-- Select Test Series --</option>
            {titles.map((t) => (
              <option key={t.testSeriesId} value={t.testSeriesId}>
                {t.title} (ID: {t.testSeriesId})
              </option>
            ))}
          </select>
        </div>

        {/* JSON Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Paste JSON Questions
          </label>
          <textarea
            rows="12"
            className="w-full font-mono text-sm px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            placeholder={`Paste your JSON array here...\n[\n  { "questionId": 1, "questionTxt": "What is TCP?", ... }\n]`}
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            onClick={() => setJsonInput("")}
            className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium"
          >
            Clear
          </button>
          <button
            onClick={handleSubmit}
            disabled={!selectedSeries}
            className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium disabled:opacity-50"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}
