import React, { useState } from 'react';

const TestSeriesPlans = () => {
  const [plans] = useState([
    {
      plan_id: 1,
      title: 'Basic Plan',
      description: 'Access to 50 basic test series for practice.',
      price: 499,
      discount: 10,
      duration_day: '30',
    },
    {
      plan_id: 2,
      title: 'Pro Plan',
      description: 'Access to 150 test series with advanced features.',
      price: 1299,
      discount: 15,
      duration_day: '180',
    },
    {
      plan_id: 3,
      title: 'Premium Yearly Plan',
      description: 'Unlimited access to all test series for 1 year.',
      price: 4999,
      discount: 25,
      duration_day: '365',
    },
  ]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Choose Your Test Series Plan
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div key={plan.plan_id} className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">{plan.title}</h3>
            <p className="text-gray-600 mb-4">{plan.description}</p>

            <div className="text-lg font-bold text-gray-800 mb-2">
              ₹{plan.price}
              {plan.discount ? (
                <span className="text-green-500 ml-2">-{plan.discount}% OFF</span>
              ) : null}
            </div>

            <div className="text-sm text-gray-500 mb-4">
              Duration: {plan.duration_day === '365' ? '1 Year' : `${plan.duration_day} Days`}
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestSeriesPlans;
