import React, { useState } from 'react';
import { toast } from 'react-toastify';


const Product = ({product,carts, setCarts,}) => {
    const [isBuy, setIsBuy] = useState(false)
    const handleBuyNow =() => {
        setIsBuy(true)
        setCarts([...carts,product])
        toast.success("Item added to cart!")
    }
    return (
        <div className='shadow-lg rounded-lg border'>
                   <div className='flex justify-between items-center p-3' >
                    
             <img src={product.icon} alt="" className="w-10 h-10 object-contain rounded-full" />
             <p className='border bg-amber-300 text-yellow-800 rounded-4xl p-1'>{product.tag}</p>
                   </div>
                   <div className='p-5'>
                    <h4 className='font-bold text-xl p-2'>{product.name}</h4>
                   <p className='text-gray-400 p-2'>{product.description}</p>
                  <div className='flex items-center'>
                     <h4 className='font-bold text-xl p-2'>${product.price}</h4>/ 
                     <p className='text-gray-400'>{product.period}</p>
                  </div>
                  <div>
                    <ul className="list-none space-y-2">
  {product.features.map((feature, index) => (
    <li key={index} className="text-sm text-gray-600">
      <span className="text-green-500 font-bold mr-2">✓</span>
      {feature}
    </li>
  ))}
</ul>
                  </div>
                  <button onClick={handleBuyNow} className='btn w-full bg-violet-700 text-white rounded-lg mt-5 '>{isBuy ? "Added To Cart" : "Buy Now" }</button>
                   </div>


                    </div>
    );
};

export default Product;