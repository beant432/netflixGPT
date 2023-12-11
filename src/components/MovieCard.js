import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = (props) => {
  const { poster, imgName } = props || {};
  return (
    <div className="w-32">
      <img src={IMG_CDN_URL + poster} alt={imgName} className="w-44 mr-2" />
    </div>
  );
};

export default MovieCard;
