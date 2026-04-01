import React from 'react';

const Cart = ({ carts }) => {
    // ডাটা ঠিকঠাক আসছে কি না তা চেক করার জন্য
    console.log(carts);

    return (
        <div className='py-10 container mx-auto px-4'>
            <h1 className='text-2xl font-bold mb-6'>Carts</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                   
                    carts && carts.map(item => (
        

                        <div key={item.id} className="border p-4 rounded-xl shadow-sm bg-white relative flex">
                            

                            <div className="flex justify-center items-center gap-2">
                               
                                <div className="w-16 h-16 mb-4 ">
                                    <img 
                                        src={item.icon} 
                                        alt={item.name} 
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold">{item.name}</h3>
                                <p className="text-purple-600 font-bold">${item.price}/{item.period}</p>
                                </div>
                                
                                
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Cart;