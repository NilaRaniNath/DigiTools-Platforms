import React from 'react';
import { toast } from 'react-toastify';


const Cart = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((sum, item )=> sum + item.price, 0)
    
const handlePayment =() => {
    setCarts([]);
      toast.success("Payment Successful!")
};
const handleDelete = (item) => {
    const fillterArray = carts. filter (c => c.id !== item.id);
    setCarts(fillterArray);
      toast.success("Item Deleted")
}



    return (
        <div className='py-10 max-w-7xl  container mx-auto px-4'>
            <h1 className='text-2xl font-bold mb-6'>Carts</h1>
            {
                carts.length === 0 ? <p className='text-center font-semibold p-5 bg-gray-400'>Cart is Empty</p> : 
                <>
               <div className='max-w-7xl mx-auto '>
                 <div className='grid grid-cols-1 md:grid-cols-1 gap-6 '>
                {
                   
                    carts && carts.map(item => (
        

                        <div key={item.id} className="border p-4 rounded-xl shadow-sm bg-white relative flex">

                             <p onClick={()=>handleDelete(item)} className="absolute right-2 bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full font-bold"> Remove
                                 </p>
                        
                            

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
            <div className='flex justify-between bg-black text-white p-5 mt-5 rounded-full text-2xl font-bold'>
                <div>Total</div>
                <div>${totalPrice}</div>
            </div>
            <button onClick={handlePayment} className='btn w-full bg-violet-700 text-white text-xl rounded-lg mt-5'>Proceed To Checkout</button>
               </div>
                </>
            }
            
        </div>
    );
};

export default Cart;