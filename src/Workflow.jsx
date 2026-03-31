import React from 'react';

const Workflow = () => {
    return (
        <div>
            <div className="py-20 bg-purple-600">
  <div className="container mx-auto px-4 text-center text-white">
    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      Ready To Transform Your Workflow?
    </h2>
    
    <p className="max-w-2xl mx-auto text-purple-100 text-lg mb-10 leading-relaxed">
      Join thousands of professionals who are already using DigiTools to work smarter. 
      Start your free trial today.
    </p>

    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
      <button className="btn bg-white text-purple-600 border-none hover:bg-gray-100 px-8 rounded-full font-bold h-14">
        Explore Products
      </button>
      <button className="btn btn-outline border-white text-white hover:bg-white hover:text-purple-600 px-8 rounded-full font-bold h-14">
        View Pricing
      </button>
    </div>

    <div className="flex flex-wrap justify-center items-center gap-4 text-purple-200 text-sm font-medium">
      <span>14-day free trial</span>
      <span className="hidden sm:inline">•</span>
      <span>No credit card required</span>
      <span className="hidden sm:inline">•</span>
      <span>Cancel anytime</span>
    </div>
  </div>
</div>
        </div>
    );
};

export default Workflow;