import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice";
import MoviesReducer from "./moviesSlice";
import GptSearchReducer from './gptSearchSlice';
import languageReducer from './languageSlice';
const appStore = configureStore({
  reducer: {
    user: UserReducer,
    movies: MoviesReducer,
    gptSearch:GptSearchReducer,
    language:languageReducer
  },
});

export default appStore;
