const Searchbar = () => {
  return (
    <div className="flex justify-between items-center m-10 ">
      <div class="relative shadow-md">
        <input
          class="block w-72 h-14 appearance-none bg-white py-4  pl-8 pr-12 text-base text-slate-900 placeholder:text-slate-600 focus:outline-none sm:text-sm sm:leading-6"
          placeholder="Search for a country"
          style={{ caretColor: 'red' }}
        />
        <svg
          class="pointer-events-none absolute left-1 top-4 h-6 w-6 fill-slate-400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z"></path>
        </svg>
      </div>
      <select
        name="Filter by Region"
        placeholder="Filter"
        className="focus:outline-none shadow-md py-4 px-2"
      >
        <option value="" className="drop-shadow-md mb-6">
          Filter by Region
        </option>
        <option
          value="filter"
          className="bg-Very-Light-Gray focus:outline-none"
        >
          Africa{' '}
        </option>
        <option
          value="filter"
          className="bg-Very-Light-Gray focus:outline-none"
        >
          America{' '}
        </option>
        <option
          value="filter"
          className="bg-Very-Light-Gray focus:outline-none"
        >
          Asia{' '}
        </option>
        <option
          value="filter"
          className="bg-Very-Light-Gray focus:outline-none"
        >
          Europe{' '}
        </option>
        <option
          value="filter"
          className="bg-Very-Light-Gray focus:outline-none"
        >
          Oceania
        </option>
      </select>
    </div>
  );
};
export default Searchbar;
