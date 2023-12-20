import React from "react";
import VideoDetail from "./VideoDetail";
import VideoTrailer from "./VideoTrailer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movieData = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movieData) return;
  const mainVideo = movieData[0];
  const { original_title, overview, id } = mainVideo || {};
  return (
    <div className="pt-[50%] bg-black md:pt-0 md:bg-inherit">
      <VideoDetail title={original_title} overview={overview} movieId={id} />
      <VideoTrailer movieId={id} />
    </div>
  );
};

export default MainContainer;
