import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";
import { BG_IMG } from "../utils/constant";

const GptSeach = () => {
  return (
    <div>
      <div className="opacity-90 bg-black">
        <img
          src={BG_IMG}
          className="fixed -z-10 h-[100vh]"
          alt="background"
          height={"100%"}
          width={"100%"}
        />
      </div>
      <GptSearchBar />
      <GptSuggestions />
    </div>
  );
};

export default GptSeach;
