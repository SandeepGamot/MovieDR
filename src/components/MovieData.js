import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MiniCard from "./MiniCard";
import Proptypes from "prop-types";

function MovieData({ id, url }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(result => {
        setMovies(result.results);
      });
  }, [id, url]);

  return (
    <div>
      {typeof movies === undefined ? (
        <h1>Loading...</h1>
      ) : movies.length === 0 ? (
        <h1 className="text-gray-400 text-xl">No Movies to show</h1>
      ) : (
        <div className="flex">
          {movies.map(data => (
            <Link to={`/movie/${data.id}`}>
              <MiniCard {...data} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

MovieData.propTypes = {
  id: Proptypes.string.isRequired,
  url: Proptypes.string.isRequired
};

export default MovieData;
