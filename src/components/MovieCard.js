import React from "react";
import { Link } from "react-router-dom";
import { getImageUrl } from "../utils/urlBuilder";

function MovieCard(props) {
  return (
    <div className="flex justify-center">
      <Link to={`/movie/${props.id}`}>
        <div
          className="flex items-center
          h-auto
          w-11/12 
          max-w-4xl          
          bg-white shadow-md
          rounded-lg mx-4 my-2          
          overflow-hidden"
        >
          <img
            className=""
            src={getImageUrl(props.poster_path, "w154")}
            alt={props.title}
          />
          <div className="p-8">
            <div className="flex sm:justify-between sm:flex-row flex-col">
              <p className="sm:text-xl md:text-2xl truncate lg:text-4xl xl:text-6xl">
                {props.title}
              </p>
              <div className="flex items-center">
                <i className="text-orange-400 material-icons mr-2">stars</i>
                <p className="sm:text-lg md:text-xl lg:text-2xl xl:text-4xl">
                  {props.vote_average}/10
                </p>
              </div>
            </div>
            <hr />
            <p className="mt-5 sm:text-md md:text-lg lg:text-xl xl:text-2xl text-gray-600">
              Overview:
            </p>
            <p className="sm:text-xs md:text-sm lg:text-md xl:text-lg">
              {props.overview}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
