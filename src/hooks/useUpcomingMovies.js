/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { API_OPTIONS, UPCOMING_MOVIES_LIST_URL } from "../utils/constant";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchUpcomingMoviesList();
  }, []);
  const fetchUpcomingMoviesList = async () => {
    const data = await fetch(UPCOMING_MOVIES_LIST_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };
};
export default useUpcomingMovies;
