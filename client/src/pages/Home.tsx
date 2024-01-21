import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface HomePage {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
}

export default function Home() {
  const [homeproducts, setHomeProducts] = useState<HomePage[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=4')
      .then((res) => res.json())
      .then((json) => setHomeProducts(json));
  }, []);

  return (
    <div className='w-[90%] m-auto'>
      <div className='flex gap-3 m-x-[20px] '>
        {homeproducts.map((homeproduct) => (
          <div key={homeproduct.id} className='w-[270px] rounded overflow-hidden shadow-lg'>
            <div className='p-5'>
              <img src={homeproduct.image} className='h-[200px] object-contain w-full' alt={homeproduct.title} />
              <h3 className='text-xl font-bold py-2 h-[47px] relative truncate '>{homeproduct.title}</h3>
              <div className='flex justify-between items-center'>
                <p className='text-red-500'>${homeproduct.price}</p>
                <span className='bg-[#4a62ff] px-5 py-[5px] text-white'>+ Cart</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center mt-[20px]'>
      <div className='px-[46px] py-[16px] bg-[#DB4444]  '>
        <Link to="/all-products">View All Products</Link>
        </div>
      </div>
    </div>
  );
}
