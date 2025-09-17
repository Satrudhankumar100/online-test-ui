import React from 'react';

const TestSeriesPlans = () => {
  const plans = [
    { id: 1, title: 'Monthly', duration: '1 Month', price: 49, avgPerMonth: 49, discount: '-' },
    { id: 2, title: 'Quarterly', duration: '3 Months', price: 119, avgPerMonth: 89, discount: '~19% off' },
    { id: 3, title: 'Semi-Yearly', duration: '6 Months', price: 199, avgPerMonth: 89, discount: '~32% off' },
    { id: 4, title: 'Best Value', duration: '9 Months', price: 269, avgPerMonth: 39, discount: '~39% off' },
    { id: 5, title: 'Yearly', duration: '12 Months', price: 339, avgPerMonth: 39, discount: '~42% off' },
  ];

  const benefits = [
    'Unlimited Test Series Access',
    '100% Ad-Free Experience',
    'Study Anytime, Anywhere',
    'Suudy Arlte, Anywhere',
    'Affordable for Everyone',
    'Regular Content Updates',
  ];

  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-300 min-h-screen p-10 text-gray-800">
      
      <div className="text-center text-white mb-12">
        <h1 className="text-4xl font-bold mb-4">Unlimited Test Series at Just ₹49/Month</h1>
        <p className="text-xl">Affordable | Ad-Free | Anytime, Anywhere</p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6">Why Students Love Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <span className="text-green-500 text-lg">✔</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 max-w-5xl mx-auto mb-12 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Choose Your Plan</h2>
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-3 px-6">Plan</th>
              <th className="py-3 px-6">Duration</th>
              <th className="py-3 px-6">Price (₹)</th>
              <th className="py-3 px-6">Avg. Per Month (₹)</th>
              <th className="py-3 px-6">Discount vs Monthly</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan) => (
              <tr key={plan.id} className="border-b hover:bg-gray-100">
                <td className={`py-4 px-6 ${plan.title === 'Best Value' ? 'font-bold text-blue-600' : ''}`}>{plan.title}</td>
                <td className="py-4 px-6">{plan.duration}</td>
                <td className="py-4 px-6">₹{plan.price}</td>
                <td className="py-4 px-6">₹{plan.avgPerMonth}</td>
                <td className="py-4 px-6">{plan.discount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto mb-12 text-center">
        <h2 className="text-2xl font-semibold mb-6">Get Started in 3 Steps</h2>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 text-white rounded-full px-4 py-2">1</div>
            <div>Visit our website</div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 text-white rounded-full px-4 py-2">2</div>
            <div>Sign up in 2 minutes</div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 text-white rounded-full px-4 py-2">3</div>
            <div>Start practicing instantly</div>
          </div>
        </div>

        <div className="mt-6">
          <img src="/path-to-your-qr-code.jpg" alt="QR Code" className="mx-auto w-32 h-32" />
          <p className="mt-2 text-sm text-gray-600">Scan & Register Now</p>
        </div>
      </div>

      <div className="text-center text-white text-xl">
        <h2 className="font-bold">Start Your Journey Today!</h2>
        <p>Join thousands of students preparing smarter. Your success begins here.</p>
      </div>
    </div>
  );
};

export default TestSeriesPlans;
