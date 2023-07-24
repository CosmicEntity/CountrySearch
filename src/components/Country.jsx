import React, { useContext } from "react";
import { SearchContext } from "../App";

const Country = () => {
  const { countryData } = useContext(SearchContext);
  return (
    <div
      className={`w-9/10 h-3/4 flex flex-col justify-evenly lg:flex-row gap-4 m-auto`}
    >
      <div className="rounded-lg flex flex-col justify-evenly w-full bg-white bg-opacity-50 h-1/2 shadow-lg lg:w-1/2 lg:h-full">
        <div>
          <p className="text-center text-md font-bold lg:text-xl ">
            {countryData[0].name.official}
          </p>
          <p className="text-center text-sm lg:text-lg">
            Capital: {countryData[0].capital}
          </p>
        </div>
        <img
          className="w-1/3 h-1/3 md:w-1/2 md:h-1/2 self-center"
          src={`${countryData[0].coatOfArms.svg}`}
          alt="Coat of Arms"
        />
        <p className="text-center italic text-sm lg:text-lg">Coat of Arms</p>
      </div>
      <div className="flex flex-col justify-evenly rounded-xl w-full h-1/2 bg-white bg-opacity-50 shadow-lg lg:w-1/2 lg:h-full">
        <div
          className={`w-3/4 h-1/3 fib fi-${countryData[0].cca2.toLowerCase()} self-center`}
        />
        <div>
          <p className="text-center  p-4 text-sm lg:text-lg">
            <span className="font-bold ">Continent: </span>
            {countryData[0].continents[0]}
          </p>
          <p className="text-center p-4 text-sm lg:text-lg">
            <span className="font-bold ">Region:</span>{" "}
            {countryData[0].subregion}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Country;
