import React from 'react';
import userImg from "./assets/user.png"
import packageImg from "./assets/package.png"
import rocketImg from "./assets/rocket.png"

const Getstarted = () => {
    return (
        <div>
            <div className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">Get Started In 3 Steps</h2>
      <p className="text-slate-500">Start using premium digital tools in minutes, not hours.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      
      <div className="card bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 relative pt-12 pb-8 px-6 text-center rounded-2xl">
        <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full">
          01
        </div>
        <div className="bg-purple-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
         <img src={userImg} alt="" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-3">Create Account</h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Sign up for free in seconds. No credit card required to get started.
        </p>
      </div>

      <div className="card bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 relative pt-12 pb-8 px-6 text-center rounded-2xl">
        <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full">
          02
        </div>
        <div className="bg-purple-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <img src={packageImg} alt="" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-3">Choose Products</h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Browse our catalog and select the tools that fit your needs.
        </p>
      </div>

      <div className="card bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 relative pt-12 pb-8 px-6 text-center rounded-2xl">
        <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full">
          03
        </div>
        <div className="bg-purple-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
         <img src={rocketImg} alt="" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-3">Start Creating</h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Download and start using your premium tools immediately.
        </p>
      </div>

    </div>
  </div>
</div>
        </div>
    );
};

export default Getstarted;