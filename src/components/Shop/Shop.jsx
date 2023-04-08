import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShopProps from './ShopProps';

const Shop = () => {
    const productData = useLoaderData()
    console.log(productData);

    // 

    return (
      <div className='px-12 my-10'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {productData.map((pd) => <ShopProps pd={pd} key={pd.id} ></ShopProps>)}
        </div>
      </div>
    );
};

export default Shop;