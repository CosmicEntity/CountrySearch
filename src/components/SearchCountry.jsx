import React, { useState, useContext } from "react";
import { SearchContext } from "../App";

const SearchCountry = () => {
  const [keyword, setKeyword] = useState("");
  const searchContext = useContext(SearchContext);
  return (
    <div className=" w-4/5 md:w-3/4 flex mx-auto mt-8">
      <input
        className=" text-sm lg:text-md border border-gray-700 w-3/4 h-10 rounded-l-md pl-2 outline-none bg-transparent focus:bg-white duration-200 transition-all ease-linear"
        type="text"
        placeholder="Enter Country Name"
        value={keyword}
        onChange={(event) => {
          setKeyword(event.target.value);
        }}
      />
      <button
        onClick={() =>
          searchContext.searchDispatch({ type: "SEARCH", payload: keyword })
        }
        className="h-10 border border-gray-700 border-l-0 rounded-r-md w-1/4 bg-gray-900 text-zinc-50 hover:bg-custom_green hover:text-black duration-200 transition-all ease-linear"
      >
        Search
      </button>
    </div>
  );
};

export default SearchCountry;
