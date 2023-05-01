import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
const Filter = ({ filters, filterRegion }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div className="relative flex flex-col focus:outline-none  py-4 px-3 cursor-pointer ">
      <div className="mb-4">
        <button
          className="flex items-center gap-3 py-3 px-5 bg-light-gray focus:bg-zinc-100 dark:bg-dark-blue text-very-dark-blue rounded-sm dark:text-white shadow-lg"
          onClick={handleClick}
        >
          Filter By Region
          {!show ? <BsChevronDown /> : <BsChevronUp />}
        </button>
      </div>
      {show && (
        <div
          className="highlight absolute top-20 py-3 pl-6 pr-24  flex flex-col bg-light-gray focus:bg-zinc-100 dark:bg-dark-blue text-very-dark-blue rounded-sm dark:text-white shadow-lg text-left 
       transition-all  duration-600 ease-in-out "
        >
          {filters.map((filter, index) => {
            return (
              <button
                key={index}
                className="drop-shadow-md py-1 px-0 hr text-left "
                onClick={() => filterRegion(filter)}
              >
                {filter}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Filter;
