import React from 'react';

const Banner = () => {
    return (
    
              <div class="hero min-h-[70vh] bg-white px-4 lg:px-20">
        <div class="flex justify-between items-center flex-col lg:flex-row-reverse gap-12">
            <div class="lg:w-1/2 relative">
                <div class="rounded-2xl overflow-hidden">
                    <img src="../public/banner.png" class="w-11/12 mx-auto" />
                </div>
            </div>

            <div class="w-2/3 lg:w-1/2">
                <div class="badge badge-primary bg-purple-100 text-purple-700 border-none p-4 mb-6 font-semibold flex gap-2">
                   <span class="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
                   New: AI-Powered Tools Available
                </div>
                <h1 class="text-5xl lg:text-7xl font-bold leading-tight text-gray-900">
                    Supercharge Your  Digital Workflow
                </h1>
                <p class="py-6 text-gray-500 text-lg max-w-md">
                    Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
                </p>
                <div class="flex flex-wrap gap-4">
                    <button class="btn btn-primary bg-purple-600 border-none rounded-full px-8 text-white h-auto py-4">Explore Products</button>
                    <button class="btn btn-outline border-purple-600 text-purple-600 rounded-full px-8 flex gap-2 h-auto py-4">
                    <img src="../public/play.png" alt="" />Watch Demo
                    </button>
                </div>
            </div>
        </div>
    </div>

    );
};

export default Banner;