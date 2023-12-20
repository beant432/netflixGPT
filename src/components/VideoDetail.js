import React from "react";
import { useNavigate } from 'react-router-dom';
const VideoDetail = (props) => {
  const { title, overview,movieId } = props || {};
  const navigate=useNavigate();
   const navigateToViewMovie = () => {
    navigate('/watch?v=' + movieId);
  }
  return (
    <div className="py-[30%] absolute w-screen aspect-video h-100vh px-10 md:px-20 bg-gradient-to-r from-black text-white md:py-[20%]">
      <h1 className="text-lg font-bold md:text-6xl w-full md:w-1/4">{title}</h1>
      <p className="text-sm w-full md:w-1/4 hidden md:block  py-12">
        {overview}
      </p>
      <button className="text-black bg-white rounded-md text-lg px-2 py-1 hover:opacity-80 md:py-3 md:px-10" onClick={()=>navigateToViewMovie()}>
        ► Play
      </button>
      <button className="text-white bg-gray-500 rounded-md text-lg px-2 py-1 ml-2 md:py-3 md:px-10">
        More Info
      </button>
    </div>
  );
};

export default VideoDetail;
