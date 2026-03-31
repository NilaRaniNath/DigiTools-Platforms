import React from 'react';

const Getstarted = () => {
    return (
        <div>
            <section class="py-16 bg-white">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold text-slate-900 mb-4">Get Started In 3 Steps</h2>
      <p class="text-slate-500">Start using premium digital tools in minutes, not hours.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      
      <div class="card bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 relative pt-12 pb-8 px-6 text-center rounded-2xl">
        <div class="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full">
          01
        </div>
        <div class="bg-purple-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
         <img src="../public/user.png" alt="" />
        </div>
        <h3 class="text-xl font-bold text-slate-800 mb-3">Create Account</h3>
        <p class="text-slate-500 text-sm leading-relaxed">
          Sign up for free in seconds. No credit card required to get started.
        </p>
      </div>

      <div class="card bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 relative pt-12 pb-8 px-6 text-center rounded-2xl">
        <div class="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full">
          02
        </div>
        <div class="bg-purple-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <img src="../public/package.png" alt="" />
        </div>
        <h3 class="text-xl font-bold text-slate-800 mb-3">Choose Products</h3>
        <p class="text-slate-500 text-sm leading-relaxed">
          Browse our catalog and select the tools that fit your needs.
        </p>
      </div>

      <div class="card bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 relative pt-12 pb-8 px-6 text-center rounded-2xl">
        <div class="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full">
          03
        </div>
        <div class="bg-purple-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
         <img src="../public/rocket.png" alt="" />
        </div>
        <h3 class="text-xl font-bold text-slate-800 mb-3">Start Creating</h3>
        <p class="text-slate-500 text-sm leading-relaxed">
          Download and start using your premium tools immediately.
        </p>
      </div>

    </div>
  </div>
</section>
        </div>
    );
};

export default Getstarted;