import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = (props) => {
  const { poster, imgName } = props || {};
  if (!poster) return null;
  return (
    <div className="w-60 pr-4">
      <div className=" w-20 md:w-44 pr-2">
        <img src={IMG_CDN_URL + poster} alt={imgName} className="mr-2" />
      </div>
    </div>
  );
};

export default MovieCard;
