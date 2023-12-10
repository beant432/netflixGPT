/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { API_OPTIONS, NOW_PLAYING_MOVIES_LIST_URL } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchNowPlayingMoviesList();
  }, []);
  const fetchNowPlayingMoviesList = async () => {
    const data = await fetch(NOW_PLAYING_MOVIES_LIST_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
};
export default useNowPlayingMovies;
