import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    gptSearchShow: false,
    gptSearchMovieName: null,
    gptSearchMovieResult: null,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.gptSearchShow = !state.gptSearchShow;
    },
    addSearchGptMovies: (state, action) => {
      const { gptSearchMovieName, gptSearchMovieResult } = action.payload;
      state.gptSearchMovieName = gptSearchMovieName;
      state.gptSearchMovieResult = gptSearchMovieResult;
    },
  },
});
export const { toggleGptSearch, addSearchGptMovies } = gptSearchSlice.actions;
export default gptSearchSlice.reducer;
