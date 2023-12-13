/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, POPULAR_MOVIES_LIST_URL } from "../utils/constant";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  useEffect(() => {
    !popularMovies && fetchPopularMoviesList();
  }, []);
  const fetchPopularMoviesList = async () => {
    const data = await fetch(POPULAR_MOVIES_LIST_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
};
export default usePopularMovies;
