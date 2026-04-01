import React, { use } from 'react';

import Product from './Product';

const Products = ({productPromise, carts, setCarts}) => {
    const products = use(productPromise)

    return (
        <div className='py-20'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Premium Digital Tools</h2>
                <p>Choose from our curated collection of premium digiatl products designed to boost your productivity and creativity</p>
            </div>
           
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 '>
                {products.map(product=>
                    <Product key={product.id} product={product} carts={carts} setCarts={setCarts}></Product>
                )}
            </div>


        </div>
    );
};

export default Products;