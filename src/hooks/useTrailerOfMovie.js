/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerOfMovie } from "../utils/moviesSlice";
import { useSearchParams } from 'react-router-dom';

const useTrailerOfMovie = (movieId) => {
  const dispatch = useDispatch();
  const [searchParams]=useSearchParams();
    const videoId=searchParams.get("v");
  const trailerOfMovies = useSelector((store) => store.movies.trailerVideo);
  useEffect(() => {
    !trailerOfMovies && fetchVideosOfMovie();
  }, []);
  
  useEffect(() => {
      fetchVideosOfMovie();
  }, [videoId]);
  const fetchVideosOfMovie = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailerOfVideo = filteredData ? filteredData[0] : json.results[0];
    dispatch(addTrailerOfMovie(trailerOfVideo));
  };
};

export default useTrailerOfMovie;
