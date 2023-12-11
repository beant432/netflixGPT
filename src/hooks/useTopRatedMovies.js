/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { API_OPTIONS, TOP_RATED_MOVIES_LIST_URL } from "../utils/constant";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchTopRatedMoviesList();
  }, []);
  const fetchTopRatedMoviesList = async () => {
    const data = await fetch(TOP_RATED_MOVIES_LIST_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
};
export default useTopRatedMovies;
