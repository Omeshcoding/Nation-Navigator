import React from 'react';
import India from '../India.png';

const ProductCard = () => {
  return (
    <div className="md:flex flex-wrap justify-center items-center m-4 gap-20">
      <div className="w-60 bg-light-gray m-4 rounded-md shadow-md">
        <div className="w-60">
          <img src={India} alt="" className="w-full rounded-t-md" />
        </div>
        <div className="px-6 pt-6 pb-10">
          <h3 className="text-xl">India</h3>
          <p>Population : 8134784</p>
          <p>Region: Asia</p>
          <p>Capital: Delhi</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
