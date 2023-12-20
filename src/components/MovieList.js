import React from "react";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const { title, movies } = props || {};
  if (!movies) return;
  return (
    <div className="mx-10 py-3">
      <h1 className="text-white text-lg py-3 md:text-3xl">{title}</h1>
      <div className="flex  overflow-x-scroll">
        {movies.map((movie) => (
          <MovieCard
            key={movie?.id}
            poster={movie?.poster_path}
            imgName={movie.original_title}
            id={movie?.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
