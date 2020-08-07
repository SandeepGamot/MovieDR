import React from "react";
import { Route, Link, useLocation } from "react-router-dom";
import { getImageUrl } from "../utils/urlBuilder";
import MovieDetail from "../components/MovieDetail";
// const props = {
//   "adult":false,
//   "backdrop_path":"/lh5lbisD4oDbEKgUxoRaZU8HVrk.jpg",
//   "belongs_to_collection":{},
//   "budget":150000000,
//   "genres":[],
//   "homepage":"https://www.warnerbros.com/movies/batman-begins/",
//   "id":272,
//   "imdb_id":"tt0372784",
//   "original_language":"en",
//   "original_title":"Batman Begins",
//   "overview":"Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.",
//   "popularity":30.818,
//   "poster_path":"/8RW2runSEc34IwKN2D1aPcJd2UL.jpg",
//   "production_companies":[],
//   "production_countries":[],
//   "release_date":"2005-06-10",
//   "revenue":374218673,
//   "runtime":140,
//   "spoken_languages":[
//      {},
//      {},
//      {}
//   ],
//   "status":"Released",
//   "tagline":"Evil fears the knight.",
//   "title":"Batman Begins",
//   "video":false,
//   "vote_average":7.7,
//   "vote_count":14662
// }

export default props => {
  const { id, backdrop_path, title } = props;

  return (
    <>
      <div className="ml-2 mt-2  shadow-md rounded-sm overflow-hidden">
        <div className="md:w-64 w-32  h-auto">
          <img
            className="object-cover"
            src={getImageUrl(backdrop_path, "w300", true)}
            alt="pic"
          />
          <p className="truncate mx-2 px-2">{title}</p>
        </div>
      </div>
    </>
  );
};
