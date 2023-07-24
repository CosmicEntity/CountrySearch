import React, { useReducer, useEffect } from "react";
import SearchCountry from "./components/SearchCountry";
import NoCountry from "./components/NoCountry";
import Country from "./components/Country";
import axios from "axios";
import { FlagColors } from "./flagColorData/FlagColors";

export const SearchContext = React.createContext();

let color1 = "#fff";
let color2 = "#fff";
let color3 = "#fff";

const initialDisplayState = {
  loading: true,
  data: [],
  error: false,
};

const initialSearchState = {
  keyword: "",
};

const displayReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        data: action.payload,
        error: false,
      };
    case "FETCH_FAILURE":
      return {
        loading: false,
        data: [],
        error: true,
      };
    default:
      return state;
  }
};

const searchReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        keyword: action.payload,
      };
    default:
      return state;
  }
};
function App() {
  const [display, displayDispatch] = useReducer(
    displayReducer,
    initialDisplayState
  );

  const [search, searchDispatch] = useReducer(
    searchReducer,
    initialSearchState
  );

  useEffect(() => {
    if (search.keyword) {
      const country = search.keyword.replaceAll(" ", "%20");

      axios
        .get(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
        .then((res) => {
          displayDispatch({ type: "FETCH_SUCCESS", payload: res.data });
          const flagColors = FlagColors.find(
            (country) =>
              country.name === res.data[0].name.common ||
              country.name === res.data[0].name.official
          );
          color1 = flagColors.colors[0].hex;
          color2 = flagColors.colors[1].hex;
          flagColors.colors[2]
            ? (color3 = flagColors.colors[2].hex)
            : (color3 = "#fff");
        })
        .catch((err) => {
          displayDispatch({ type: "FETCH_FAILURE" });
        });
    }
  }, [search.keyword]);

  return (
    <SearchContext.Provider
      value={{
        countryData: display.data,
        errorState: display.error,
        searchDispatch: searchDispatch,
      }}
    >
      <div className="h-screen flex justify-center items-center">
        <div
          style={{
            background: `linear-gradient(${color1}, ${color3}, ${color2})`,
          }}
          className="w-4/5 h-9/10 flex flex-col bg-white bg-opacity-80 mx-auto rounded-xl shadow-2xl"
        >
          <SearchCountry />
          {display.loading ? (
            <NoCountry />
          ) : display.error ? (
            <NoCountry />
          ) : (
            <Country />
          )}
        </div>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
