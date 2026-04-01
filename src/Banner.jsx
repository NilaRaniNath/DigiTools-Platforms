import React from 'react';
import BannerImg from "./assets/banner.png"
import playImg from "./assets/play.png"

const Banner = () => {
    return (
    
              <div className="hero min-h-[70vh] bg-white px-4 lg:px-20">
        <div className="flex justify-between items-center flex-col lg:flex-row-reverse gap-12">
            <div className="lg:w-1/2 relative">
                <div className="rounded-2xl overflow-hidden">
                    <img src={BannerImg} className="w-11/12 mx-auto" />
                </div>
            </div>

            <div className="w-2/3 lg:w-1/2">
                <div className="badge badge-primary bg-purple-100 text-purple-700 border-none p-4 mb-6 font-semibold flex gap-2">
                   <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
                   New: AI-Powered Tools Available
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-gray-900">
                    Supercharge Your  Digital Workflow
                </h1>
                <p className="py-6 text-gray-500 text-lg max-w-md">
                    Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
                </p>
                <div className="flex flex-wrap gap-4">
                    <button className="btn btn-primary bg-purple-600 border-none rounded-full px-8 text-white h-auto py-4">Explore Products</button>
                    <button className="btn btn-outline border-purple-600 text-purple-600 rounded-full px-8 flex gap-2 h-auto py-4">
                    <img src={playImg} alt="" />Watch Demo
                    </button>
                </div>
            </div>
        </div>
    </div>

    );
};

export default Banner;