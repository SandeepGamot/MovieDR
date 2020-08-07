import React, { useContext } from "react";
import { Context } from "../context/SearchContext";
import MovieCard from "./MovieCard";

function MovieList() {
  const context = useContext(Context);
  const list = context.movieList;

  if (context.show) {
    return (
      <h1 className="flex justify-center text-gray-700 text-2xl">Loading...</h1>
    );
  }

  if (list === undefined) {
    return <div />;
  } else if (list.length === 0) {
    return (
      !context.show && (
        <h1 className="flex justify-center text-gray-700 text-2xl">
          No Movies Found
        </h1>
      )
    );
  } else {
    const movies = list.map(data => <MovieCard key={data.id} {...data} />);
    return <div>{movies}</div>;
  }
}
export default MovieList;
