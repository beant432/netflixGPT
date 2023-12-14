import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSuggestions = () => {
  const movies = useSelector((store) => store.gptSearch);
  if (!movies) {
    return null;
  }
  const { gptSearchMovieName, gptSearchMovieResult } = movies || {};

  return (
    <div className=" bg-black opacity-90 mt-[16%] md:[12%]">
      {gptSearchMovieName?.map((movie, index) => (
        <MovieList
          title={movie}
          movies={gptSearchMovieResult[index]}
          key={movie}
        />
      ))}
    </div>
  );
};

export default GptSuggestions;
