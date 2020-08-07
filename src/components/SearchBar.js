// Image overlay searchbar
/* <div className="flex relative items-center justify-center">                                
        <img className="w-full object-cover h-full lg:object-none object-top"src={getImageUrl(props.backdrop_path, "original")} alt="backdrop" />      
        <div className="absolute bg-gray-900 w-full h-full top-0 opacity-75"></div>        
        <input className="absolute bg-gray-300 px-4 py-2 w-4/5 rounded placeholder-gray-700 " type="input" placeholder="Enter Text"/>
      </div> */

import React, { useContext, useState } from "react";
import { Context } from "../context/SearchContext";
function SearchBar() {
  const [query, setQuery] = useState("");
  const context = useContext(Context);

  function onChangeHandler(event) {
    setQuery(event.target.value);
  }

  return (
    <div
      className="flex justify-center
     mt-32 mb-12 w-screen"
    >
      <div className=" flex shadow-lg bg-white rounded-full max-w-4xl w-11/12">
        <span className="m-2 material-icons text-gray-500 border-r-2 pr-2">
          search
        </span>
        <input
          className="w-full rounded-r-full text-gray-600 focus:outline-none"
          type="input"
          placeholder="Search Movies"
          value={query}
          onChange={onChangeHandler}
          onKeyDown={e => {
            if (e.key === "Enter" || e.key === 13) {
              context.updateMovieList(query);
              window.scrollTo(0, 0);
            }
          }}
        />
      </div>
    </div>
  );
}

export default SearchBar;
