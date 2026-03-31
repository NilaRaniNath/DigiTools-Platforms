import React from 'react';

const Cards = () => {
    return (
        <div>
            <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
      <p className="text-gray-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
      
      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full">
        <h3 className="text-xl font-bold text-gray-800">Starter</h3>
        <p className="text-gray-500 text-sm mb-6">Perfect for getting started</p>
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900">$0</span>
          <span className="text-gray-400">/Month</span>
        </div>
        <ul className="space-y-4 mb-8 text-sm">
          <li className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✔</span> Access to 10 free tools</li>
          <li className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✔</span> Basic templates</li>
          <li className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✔</span> Community support</li>
          <li className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✔</span> 1 project per month</li>
        </ul>
        <button className="btn btn-primary bg-purple-600 border-none rounded-xl text-white w-full hover:bg-purple-700">Get Started Free</button>
      </div>

      <div className="bg-purple-600 p-8 rounded-2xl shadow-xl flex flex-col h-full relative transform md:scale-105 z-10 text-white">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-100 text-yellow-600 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          Most Popular
        </div>
        <h3 className="text-xl font-bold">Pro</h3>
        <p className="text-purple-100 text-sm mb-6">Best for professionals</p>
        <div className="mb-6">
          <span className="text-4xl font-bold">$29</span>
          <span className="text-purple-200">/Month</span>
        </div>
        <ul className="space-y-4 mb-8 text-sm">
          <li className="flex items-center gap-2 text-purple-50"><span>✔</span> Access to all premium tools</li>
          <li className="flex items-center gap-2 text-purple-50"><span>✔</span> Unlimited templates</li>
          <li className="flex items-center gap-2 text-purple-50"><span>✔</span> Priority support</li>
          <li className="flex items-center gap-2 text-purple-50"><span>✔</span> Unlimited projects</li>
          <li className="flex items-center gap-2 text-purple-50"><span>✔</span> Cloud sync</li>
          <li className="flex items-center gap-2 text-purple-50"><span>✔</span> Advanced analytics</li>
        </ul>
        <button className="btn bg-white text-purple-600 border-none rounded-xl w-full hover:bg-gray-100 font-bold">Start Pro Trial</button>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full">
        <h3 className="text-xl font-bold text-gray-800">Enterprise</h3>
        <p className="text-gray-500 text-sm mb-6">For teams and businesses</p>
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900">$99</span>
          <span className="text-gray-400">/Month</span>
        </div>
        <ul className="space-y-4 mb-8 text-sm">
          <li className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✔</span> Everything in Pro</li>
          <li className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✔</span> Team collaboration</li>
          <li className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✔</span> Custom integrations</li>
          <li className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✔</span> Dedicated support</li>
          <li className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✔</span> SLA guarantee</li>
          <li className="flex items-center gap-2 text-gray-600"><span className="text-green-500">✔</span> Custom branding</li>
        </ul>
        <button className="btn btn-primary bg-purple-600 border-none rounded-xl text-white w-full hover:bg-purple-700">Contact Sales</button>
      </div>

    </div>
  </div>
</section>
        </div>
    );
};

export default Cards;