import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/lang";
import { API_OPTIONS, MOVIE_NAME, SEARCH_MOVIE_URL } from "../utils/constant";
import { addSearchGptMovies } from "../utils/gptSearchSlice";
import { openai } from "../utils/openai";

const GptSearchBar = () => {
  const languageKey = useSelector((store) => store.language.lang);
  const dispatch = useDispatch();
  const searchRef = useRef();

  const fetchSuggestions = async () => {
    const searchQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchRef.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: searchQuery }],
      model: "gpt-3.5-turbo",
    });

    const moviesNamesArray =
      chatCompletion.choices[0].message.content.split(",");
    const promiseArrray = moviesNamesArray.map((movie) => {
      return fetchMovieResult(movie);
    });
    const tmdbResult = await Promise.all(promiseArrray);
    dispatch(
      addSearchGptMovies({
        gptSearchMovieName: moviesNamesArray,
        gptSearchMovieResult: tmdbResult,
      })
    );
  };

  const fetchMovieResult = async (movie) => {
    const data = await fetch(
      SEARCH_MOVIE_URL.replace(MOVIE_NAME, movie),
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleSearchClick = () => {
    fetchSuggestions();
  };
  return (
    <div className="flex justify-center pt-[50%] md:pt-[10%]">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid grid-cols-12 w-[95%] z-10 absolute bg-blue-200 p-0 md:w-1/2 md:p-2"
      >
        <input
          type="text"
          ref={searchRef}
          placeholder={lang[languageKey].gptPlaceholder}
          className="grid col-span-9 p-3"
        />
        <button
          className=" px-5 py-3 grid col-span-3 bg-purple-300 text-white"
          onClick={() => handleSearchClick()}
        >
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
