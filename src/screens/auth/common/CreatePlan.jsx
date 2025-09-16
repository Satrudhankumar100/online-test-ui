import React, { useState } from 'react';

const CreatePlan = () => {
  const [planData, setPlanData] = useState({
    title: '',
    description: '',
    price: '',
    discount: '',
    discount_period: '',
    duration_day: '',
  });

  const [plans, setPlans] = useState([]);
  const [animateKey, setAnimateKey] = useState(0); // To trigger animation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlanData({
      ...planData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlan = {
      ...planData,
      plan_id: plans.length + 1,
      created_at: new Date().toISOString(),
    };

    setPlans([...plans, newPlan]);
    setAnimateKey(animateKey + 1); // Update key to trigger animation

    setPlanData({
      title: '',
      description: '',
      price: '',
      discount: '',
      discount_period: '',
      duration_day: '',
    });
  };

  return (
    
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Create Custom Plan
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={planData.title}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Price (₹)</label>
            <input
              type="number"
              name="price"
              value={planData.price}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium">Description</label>
            <textarea
              name="description"
              value={planData.description}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="3"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Discount (%)</label>
            <input
              type="number"
              name="discount"
              value={planData.discount}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">
              Discount Period (days)
            </label>
            <input
              type="number"
              name="discount_period"
              value={planData.discount_period}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Duration (days)</label>
            <input
              type="number"
              name="duration_day"
              value={planData.duration_day}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow"
        >
          Create Plan
        </button>
      </form>

      <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4 text-center">
        Existing Plans
      </h3>

      <div className="overflow-x-auto">
        {plans.length === 0 ? (
          <p className="text-gray-600 text-center">No plans created yet.</p>
        ) : (
          <table className="min-w-full bg-white border rounded shadow-sm">
            <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
              <tr>
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left">Description</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Discount</th>
                <th className="p-3 text-left">Duration</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan) => (
                <tr
                  key={`${plan.plan_id}-${animateKey}`} 
                  className="border-t hover:bg-gray-50 transition transform duration-500 ease-out animate-fade-in"
                >
                  <td className="p-3">{plan.plan_id}</td>
                  <td className="p-3">{plan.title}</td>
                  <td className="p-3">{plan.description}</td>
                  <td className="p-3">₹{plan.price}</td>
                  <td className="p-3">{plan.discount || 0}%</td>
                  <td className="p-3">{plan.duration_day}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default CreatePlan;
