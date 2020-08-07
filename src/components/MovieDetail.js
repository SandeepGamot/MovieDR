import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getMovieDetailsUrl,
  getImageUrl,
  getRecommendations
} from "../utils/urlBuilder";
import HScroll from "../components/HScroll";
import MovieData from "./MovieData";
import VideoData from "./VideoData";

function MovieDetail() {
  const { id } = useParams("id");
  const [data, setData] = useState(null);

  useEffect(() => {
    let url = getMovieDetailsUrl(id);
    fetch(url)
      .then(response => response.json())
      .then(result => {
        setData(result);
      });
    window.scrollTo(0, 0);
  }, [id]);

  console.log(id);
  return (
    <div>
      {data === null ? (
        <h1 className="flex justify-center text-3xl text-gray-800">
          Loading...
        </h1>
      ) : (
        <div>
          <div className="mx-8 my-4">
            {/* <img className="object-cover object-top h-48 w-full sm:h-56 md:h-64 lg:h-full max-h-32"src={getImageUrl(data.backdrop_path,"original")} alt="backdrop"/>
       <div className="absolute top-0 bg-gray-900 h-48 w-full sm:h-56 md:h-64 lg:h-full opacity-50 object-cover" />  */}
            <img
              className="pr-4 border-r-2 border-gray-300 "
              src={getImageUrl(data.poster_path, "w185")}
              alt="poster"
            />
            <h1>{data.title}</h1>
            <p>{data.vote_average}</p>
            <p>{data.release_date}</p>
            <div className="flex">
              {data.genres.map(genre => (
                <div
                  key={genre.id}
                  className="bg-orange-400 mr-1 px-3 rounded text-xs whitespace-no-wrap"
                >
                  {genre.name}
                </div>
              ))}
            </div>

            <hr className="my-2" />
            <h1 className="text-3xl text-gray-900">Overview</h1>
            <p className="text-gray-800">{data.overview}</p>
            <hr className="my-2" />
            <HScroll>
              <VideoData />
            </HScroll>
            <hr className="my-2" />
            <h1 className="text-3xl text-gray-900">Recommendations</h1>
            <HScroll>
              <MovieData id={id} url={getRecommendations(id)} />
            </HScroll>
            <div />
          </div>
        </div>
      )}
    </div>
  );
}

export default React.memo(MovieDetail);
