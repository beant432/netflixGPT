import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lang } from "../utils/lang";
import { API_OPTIONS, MOVIE_NAME, SEARCH_MOVIE_URL } from "../utils/constant";
import { addSearchGptMovies } from "../utils/gptSearchSlice";
import OpenAI from "openai";


const GptSearchBar = () => {
  const languageKey = useSelector((store) => store.language.lang);
  const dispatch = useDispatch();
  const searchRef = useRef();
  const [apiKey, setApiKey] = useState(null);
  const [apiKeyError, setApiKeyError] = useState(false);
  const [error, setError] = useState("");

  const OPENAI_API_KEY = apiKey;
  const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
    dangerouslyAllowBrowser: true, // This is the default and can be omitted
  });
  const fetchSuggestions = async () => {
    try {
      setApiKeyError(false);
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
    }
    catch (err) {
      setError(err.message)
    }
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
    apiKey !== null && fetchSuggestions();
    setApiKeyError(true)
  };
  return (
    <div className="flex justify-center pt-[50%] md:pt-[10%]">
      <div
        onSubmit={(e) => e.preventDefault()}
        className="grid grid-cols-12 w-[95%] z-15 absolute bg-blue-200 p-0  md:w-1/2 md:p-5 h-[30%] "
      >
        <input
          type="text"
          onChange={(e) => setApiKey(e.target.value)}
          placeholder={lang[languageKey].privateKeyPlaceholder}
          className="grid col-span-12 p-3 h-12"
        />
      </div>
      {apiKeyError && <p className=" pt-[15%] text-red-900 z-20 md:pt-[6%] md:ml-0 ">Please enter private key to get Search suggestions</p>}

      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid grid-cols-12 w-[95%] z-10 absolute bg-blue-200 mt-28 mb-5 md:w-1/2 md:p-5"
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
        <p className="text-red-900 grid pt-[20%] text-center"> {error}</p>

      </form>

    </div>
  );
};

export default GptSearchBar;
