import React from "react";
import { IMG_CDN_URL } from "../utils/constant";
import { useNavigate } from 'react-router-dom';

const MovieCard = (props) => {
  const navigate = useNavigate();
  const { poster, imgName, id } = props || {};
  if (!poster) return null;
  const navigateToViewMovie = () => {
    navigate('/watch?v=' + id);
  }
  return (
    <div className="w-60 pr-4">
      <div className=" w-20 md:w-44 pr-2">
        <img src={IMG_CDN_URL + poster} alt={imgName} className="mr-2 cursor-pointer" onClick={()=>{navigateToViewMovie()}}/>
      </div>
    </div>
  );
};

export default MovieCard;
