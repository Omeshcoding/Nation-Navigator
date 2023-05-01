import React, { useState } from 'react';

const Filter = ({ filters, handleClick }) => {
  return (
    <div
      name="Filter by Region"
      placeholder="Filter"
      className="flex flex-col focus:outline-none  py-4 px-3 cursor-pointer "
    >
      <div className="mb-10">
        <button
          value=""
          className=" bg-light-gray focus:bg-zinc-100 dark:bg-dark-blue text-very-dark-blue rounded-sm dark:text-white shadow-lg"
        >
          Filter By Region
        </button>
      </div>
      <div className="flex flex-col bg-light-gray focus:bg-zinc-100 dark:bg-dark-blue text-very-dark-blue rounded-sm dark:text-white shadow-lg">
        {filters.map((filter, index) => {
          return (
            <button
              key={index}
              className="drop-shadow-md p-4 mt-10"
              onClick={() => handleClick(filter)}
            >
              {filter}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
