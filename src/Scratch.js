import React from "react";
import { getImageUrl } from "./utils/urlBuilder";

const data = {
  adult: false,
  backdrop_path: "/lh5lbisD4oDbEKgUxoRaZU8HVrk.jpg",
  belongs_to_collection: {
    id: 263,
    name: "The Dark Knight Collection",
    poster_path: "/bqS2lMgGkuodIXtDILFWTSWDDpa.jpg",
    backdrop_path: "/xfKot7lqaiW4XpL5TtDlVBA9ei9.jpg"
  },
  budget: 150000000,
  genres: [
    {
      id: 28,
      name: "Action"
    },
    {
      id: 80,
      name: "Crime"
    },
    {
      id: 18,
      name: "Drama"
    }
  ],
  homepage: "https://www.warnerbros.com/movies/batman-begins/",
  id: 272,
  imdb_id: "tt0372784",
  original_language: "en",
  original_title: "Batman Begins",
  overview:
    "Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.",
  popularity: 30.818,
  poster_path: "/8RW2runSEc34IwKN2D1aPcJd2UL.jpg",
  production_companies: [
    {
      id: 429,
      logo_path: "/2Tc1P3Ac8M479naPp1kYT3izLS5.png",
      name: "DC Comics",
      origin_country: "US"
    },
    {
      id: 923,
      logo_path: "/5UQsZrfbfG2dYJbx8DxfoTr2Bvu.png",
      name: "Legendary Entertainment",
      origin_country: "US"
    },
    {
      id: 9993,
      logo_path: "/2Tc1P3Ac8M479naPp1kYT3izLS5.png",
      name: "DC Entertainment",
      origin_country: "US"
    },
    {
      id: 9996,
      logo_path: "/3tvBqYsBhxWeHlu62SIJ1el93O7.png",
      name: "Syncopy",
      origin_country: "GB"
    },
    {
      id: 19231,
      logo_path: null,
      name: "Patalex III Productions Limited",
      origin_country: ""
    },
    {
      id: 174,
      logo_path: "/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png",
      name: "Warner Bros. Pictures",
      origin_country: "US"
    }
  ],
  production_countries: [
    {
      iso_3166_1: "GB",
      name: "United Kingdom"
    },
    {
      iso_3166_1: "US",
      name: "United States of America"
    }
  ],
  release_date: "2005-06-10",
  revenue: 374218673,
  runtime: 140,
  spoken_languages: [
    {
      iso_639_1: "en",
      name: "English"
    },
    {
      iso_639_1: "ur",
      name: "اردو"
    },
    {
      iso_639_1: "zh",
      name: "普通话"
    }
  ],
  status: "Released",
  tagline: "Evil fears the knight.",
  title: "Batman Begins",
  video: false,
  vote_average: 7.7,
  vote_count: 14662
};

function Scratch() {
  return (
    <div className="ml-2 mt-2 w-1/3 shadow-md rounded-sm overflow-hidden">
      <div className="w-full">
        <img
          className=""
          src={getImageUrl(data.backdrop_path, "w300")}
          alt="pic"
        />
        <div className="flex justify-between px-2 py-1">
          <p className="truncate">{data.title}</p>
          <p>{data.vote_average}</p>
        </div>
      </div>
    </div>
  );
}

export default Scratch;
