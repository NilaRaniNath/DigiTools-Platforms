import React from 'react';

const Rating = () => {
    return (
        <div>
             <div className="bg-purple-600 text-white py-12 px-4 lg:px-20 mt-10">
        <div className="flex flex-col md:flex-row justify-around items-center text-center gap-8">
            <div className="flex flex-col border-r-0 md:border-r border-purple-400 w-full md:w-1/3">
                <span className="text-5xl font-bold italic mb-2">50K+</span>
                <span className="text-purple-200 uppercase tracking-widest text-sm font-semibold">Active Users</span>
            </div>
            <div className="flex flex-col border-r-0 md:border-r border-purple-400 w-full md:w-1/3">
                <span className="text-5xl font-bold italic mb-2">200+</span>
                <span className="text-purple-200 uppercase tracking-widest text-sm font-semibold">Premium Tools</span>
            </div>
            <div className="flex flex-col w-full md:w-1/3">
                <span className="text-5xl font-bold italic mb-2">4.9</span>
                <span className="text-purple-200 uppercase tracking-widest text-sm font-semibold">Rating</span>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Rating;