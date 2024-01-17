import React, { useEffect, useState } from 'react';

export default function FilterProduct({ handleFilter }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []); 

  const handleCategoryClick = (category) => {
    handleFilter(category);
  };

  return (
    <>
      <div className='cursor-pointer border p-4'>
        <h4 className='text-2xl mb-6 font-bold'>Filter Option</h4>
        <ul className='flex flex-col gap-4'>
          {categories.map((category, index) => (
            <li
              className='hover:bg-[#00000023] p-3'
              key={index}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
