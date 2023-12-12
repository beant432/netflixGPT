import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice=createSlice({
    name:"gptSearch",
    initialState:{gptSearchShow:false},
    reducers:{
        toggleGptSearch:(state)=>{
            state.gptSearchShow=!state.gptSearchShow
        }
    }
})
export const {toggleGptSearch}=gptSearchSlice.actions;
export default gptSearchSlice.reducer;