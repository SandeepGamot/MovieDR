import React, { useState } from "react";
import { searchMovieUrl } from "../utils/urlBuilder";

const Context = React.createContext();
function ContextProvider(props) {
  const [movieList, setMovieList] = useState();
  const [show, setShow] = useState(false);

  function updateMovieList(query) {
    setShow(true);
    fetch(searchMovieUrl(query))
      .then(response => response.json())
      .then(result => {
        setMovieList(result.results);
        setShow(false);
      });
  }
  return (
    <Context.Provider value={{ movieList, show, updateMovieList }}>
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
