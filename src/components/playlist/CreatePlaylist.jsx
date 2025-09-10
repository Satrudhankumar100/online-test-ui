import React, { useState, useEffect } from "react";

export default function CreatePlaylist() {
  const [open, setOpen] = useState(false);
  const [plans, setPlans] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    visibility: "PUBLIC",
    plan_id: "",
  });

  useEffect(() => {
    // Fetch plans from backend
    fetch("http://localhost:8080/api/plans") // Adjust endpoint
      .then((res) => res.json())
      .then((data) => setPlans(data))
      .catch((err) => console.error("Error fetching plans:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/playlists", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Playlist created successfully!");
        setFormData({ title: "", description: "", visibility: "PUBLIC", plan_id: "" });
        setOpen(false);
      })
      .catch((err) => console.error("Error:", err));
  };

  return (
    <>
      {/* Button to open modal */}
      <button
        onClick={() => setOpen(true)}
        className="px-5 py-2 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition"
      >
        + Create Playlist
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="bg-white shadow-2xl rounded-2xl w-full max-w-lg p-6 relative z-10">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Create a New Playlist
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Playlist Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter playlist title"
                  className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter playlist description"
                  className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                  rows="3"
                />
              </div>

              {/* Visibility */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Visibility
                </label>
                <select
                  name="visibility"
                  value={formData.visibility}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                >
                  <option value="PUBLIC">Public</option>
                  <option value="PRIVATE">Private</option>
                  <option value="UNLISTED">Unlisted</option>
                </select>
              </div>

              {/* Plan Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Plan (Days)
                </label>
                <select
                  name="plan_id"
                  value={formData.plan_id}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                  required
                >
                  <option value="">-- Choose Plan --</option>
                  {plans.map((plan) => (
                    <option key={plan.plan_id} value={plan.plan_id}>
                      {plan.duration_day} Days
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-semibold rounded-xl p-3 hover:bg-indigo-700 active:scale-95 transition"
              >
                Create Playlist
              </button>
            </form>
          </div>
        </div>
      )}
    
  </>
  );
}
