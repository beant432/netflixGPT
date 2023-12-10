import React from "react";
import { useSelector } from "react-redux";
import useTrailerOfMovie from "../hooks/useTrailerOfMovie";

const VideoTrailer = (props) => {
  const { movieId } = props || {};
  useTrailerOfMovie(movieId);
  const videoTrailer = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${videoTrailer?.key}?autoplay=1&mute=1`}
        title="Khush Rehne Ka Secret | Taarak Mehta Ka Ooltah Chashmah | Full Episode | Ep 3947 | 6 Dec 2023"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoTrailer;
