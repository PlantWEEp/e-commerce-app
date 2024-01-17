import React, { useState, useEffect } from 'react';
import FilterProduct from '../components/productFilter/FilterProduct';
import Pagination from '../components/productFilter/Pagination';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string; 
  price: string;
}

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filterItems, setFilterItems] = useState<Product[]>([]);

  function handleFilter(criteria: string) {
    const filteredProducts = products.filter((product) => 
      product.title.toLowerCase().includes(criteria.toLowerCase())
    );
    setFilterItems(filteredProducts);
  }

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=50')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  console.log(products);

  return (
    <>
      <div className='w-[90%] m-auto flex mt-[5rem] capitalize gap-6'>
        <div className='w-[20%]'>
          <FilterProduct handleFilter={handleFilter} />
        </div>
        <div className='w-[80%]'>
        <div className='grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {  products.map((product) => (
                  <div key={product.id} className='border p-5'>
                    <img src={product.image} className='h-[244px] object-contain w-full' alt={product.title} />
                    <h3 className='text-xl font-bold py-2'>{product.title}</h3>
                    <div className='flex justify-between items-center'>
                      <p className='text-red-500'> ${product.price}</p>
                      <span className='bg-[#4a62ff] px-5 py-[5px] text-white'>+ Cart</span>
                    </div>
                  </div> 
              )
            )}
          </div> 
          <div className='flex justify-center my-6'>
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
}
