import React, { useEffect, useState } from 'react';
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import { MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const CreatePlan = () => {

     const isAuthenticated = useIsAuthenticated()
        const authHeader = useAuthHeader()
         const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [planData, setPlanData] = useState({
      title: '',
      description: '',
      price: '',
      discount: '',
      discount_period: '',
      duration_day: '',
    });
  
    const [plans, setPlans] = useState([]);
    const [animateKey, setAnimateKey] = useState(0);
  
        // ✅ Fetch categories
        useEffect(() => {
      
          if (!isAuthenticated()) {
            navigate("/login")
      
          } else {
            
          }
      
        }, []);
      
  
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
    setAnimateKey(animateKey + 1);

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
    <>
      <div>
        <button className="px-6 py-2 bg-blue-500 font-semibold text-white text-sm rounded-2xl cursor-pointer" onClick={() => setIsOpen(true)}>+ Create Plans</button>
      </div>
      {isOpen &&
        <div className="absolute left-1/2 top-1/2 -translate-1/2 w-full h-full z-[9999] bg-gradient-to-br from-indigo-50/50 to-purple-50/50">
          <div className="text-3xl flex w-full justify-end p-4 cursor-pointer text-red-500 fixed" onClick={() => setIsOpen(false)}><MdClose /></div>
          <div className="flex items-center justify-center min-h-screen ">

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
                    <select
                      name="duration_day"
                      value={planData.duration_day}
                      onChange={handleChange}
                      className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      required
                    >
                      <option value="">Select Duration</option>
                      {Array.from({ length: 6 }, (_, i) => (i + 1) * 30).map((days) => (
                        <option key={days} value={days}>
                          {days} days
                        </option>
                      ))}
                      <option value={365}>1 Year (365 days)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow"
                >
                  Create Plan
                </button>
              </form>
            </div>
          </div>
        </div>}
    </>
  );
};

export default CreatePlan;
