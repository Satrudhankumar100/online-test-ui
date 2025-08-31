import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/header/Header";
import { Baseurl } from "../utils/BaseUrl";

export default function TestSeriesForm() {
  const [formData, setFormData] = useState({
    category: "",
    description: "",
    duration: "",
    price: "",
    title: "",
  });

  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  // ✅ Fetch categories
  useEffect(() => {
    axios
      .get(`${Baseurl}/test/series/categories`)
    
      .then((res) =>{
        console.log(res.data.data);
        setCategories(res.data.data)
 
      }) 
      
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCategorySelect = (cat) => {
    setFormData({ ...formData, category: cat });
    setSearch(cat);
    setShowDropdown(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    setResponse(null);
    setError(null);

    axios
      .post(`${Baseurl}/test/series/test-saved`, formData)
      .then((res) => {
        setResponse(res.data);
        setFormData({
          category: "",
          description: "",
          duration: "",
          price: "",
          title: "",
        });
        setSearch("");
      })
      .catch(() => setError("Failed to save Test Series. Try again."));
  };

  const filteredCategories = categories.filter((cat) =>
    cat.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl">
          {/* Title */}
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Create Test Series
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Category */}
            <div className="relative">
              <label className="block text-gray-700 font-medium mb-1">
                Category
              </label>
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setFormData({ ...formData, category: e.target.value });
                  setShowDropdown(true);
                }}
                placeholder="Search or add new category"
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
                required
              />
              {showDropdown && search && (
                <ul className="absolute left-0 right-0 bg-white border rounded-xl mt-1 max-h-40 overflow-y-auto shadow-lg z-10">
                  {filteredCategories.length > 0 ? (
                    filteredCategories.map((cat, idx) => (
                      <li
                        key={idx}
                        onClick={() => handleCategorySelect(cat)}
                        className="px-4 py-2 cursor-pointer hover:bg-indigo-100"
                      >
                        {cat}
                      </li>
                    ))
                  ) : (
                    <li className="px-4 py-2 text-gray-500">
                      No match, press enter to add new
                    </li>
                  )}
                </ul>
              )}
            </div>

            {/* Title */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter title"
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter description"
                rows="3"
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
                required
              />
            </div>

            {/* Duration */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Duration (minutes)
              </label>
              <input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="Enter duration"
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
                required
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Price (₹)
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter price"
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl font-semibold transition duration-300"
            >
              Save Test Series
            </button>
          </form>

          {/* ✅ Response / Error */}
          {response && (
            <div className="mt-6 p-4 bg-green-100 border border-green-400 rounded-xl">
              <h3 className="text-green-800 font-bold mb-2">
                ✅ Test Series Saved!
              </h3>
              <pre className="text-sm text-gray-700 overflow-x-auto">
                {JSON.stringify(response, null, 2)}
              </pre>
            </div>
          )}
          {error && (
            <div className="mt-6 p-4 bg-red-100 border border-red-400 rounded-xl">
              <h3 className="text-red-800 font-bold mb-2">❌ Error</h3>
              <p className="text-gray-700">{error}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
