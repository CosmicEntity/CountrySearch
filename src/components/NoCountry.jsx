import React, { useContext } from "react";
import { SearchContext } from "../App";

function NoArticle() {
  const { errorState } = useContext(SearchContext);
  return errorState ? (
    <div className="w-4/5 m-auto text-center text-3xl font-bold">
      No Country Found. Check Entered Name.
    </div>
  ) : (
    <div className="w-4/5 m-auto">
      <img
        src="/images/world.svg"
        alt="Search Country"
        className=" w-full md:w-1/2 mx-auto"
      />
      <h1 className=" text-2xl text-gray-800 text-center mx-auto md:text-4xl">
        Search a Country
      </h1>
    </div>
  );
}

export default NoArticle;
