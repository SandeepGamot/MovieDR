import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getVideosUrl } from "../utils/urlBuilder";

function VideoData() {
  const [videos, setVideos] = useState([]);
  const { id } = useParams("id");

  useEffect(() => {
    fetch(getVideosUrl(id))
      .then(response => response.json())
      .then(result =>
        setVideos(
          result.results.filter(data => data.site.toLowerCase() === "youtube")
        )
      );
  }, [id]);

  return (
    <div>
      {typeof videos === undefined || videos.length === 0 ? (
        <h1> No Videos Found</h1>
      ) : (
        <div className="flex ">
          {videos.map(data => (
            <iframe
              className="mx-2 w-auto h-auto"
              title={data.name}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${data.key}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default VideoData;
