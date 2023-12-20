import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useTrailerOfMovie from '../hooks/useTrailerOfMovie';


const ViewMovie = (props) => {
    const [searchParams]=useSearchParams();
    const videoId=searchParams.get("v");
    const videoTrailer = useSelector((store) => store.movies?.trailerVideo);
    useTrailerOfMovie(videoId);
  return (
    <div> <div>
    <iframe
      className="w-screen aspect-video"
      src={`https://www.youtube.com/embed/${videoTrailer?.key}?autoplay=1&mute=1`}
      title="Khush Rehne Ka Secret | Taarak Mehta Ka Ooltah Chashmah | Full Episode | Ep 3947 | 6 Dec 2023"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  </div></div>
  )
}

export default ViewMovie