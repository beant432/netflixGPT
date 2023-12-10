import React from "react";

const VideoDetail = (props) => {
  const { title, overview } = props || {};
  return (
    <div className="py-[20%] absolute w-screen aspect-video h-100vh px-20 bg-gradient-to-r from-black text-white">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-lg w-1/4 py-12">{overview}</p>
      <button className="text-black bg-white rounded-md text-lg px-10 py-3 hover:opacity-80">
        ► Play
      </button>
      <button className="text-white bg-gray-500 rounded-md text-lg px-10 py-3 ml-2">
        More Info
      </button>
    </div>
  );
};

export default VideoDetail;
