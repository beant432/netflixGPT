import React from "react";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const { title, movies } = props || {};
  if (!movies) return;
  return (
    <div className="mx-10 py-3">
      <h1 className="text-white text-3xl py-3">{title}</h1>
      <div className="flex  overflow-x-scroll">
        {movies.map((movie) => (
          <div className="w-60 pr-4"  key={movie?.id}>
            <MovieCard
             
              poster={movie?.poster_path}
              imgName={movie.original_title}
            />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
