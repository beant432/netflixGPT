export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVTAR =
  "https://occ-0-122-1009.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";
export const BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/7cb9679b-dd82-47aa-8629-efe9606364cf/CA-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};
export const NOW_PLAYING_MOVIES_LIST_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const IMG_CDN_URL = "http://image.tmdb.org/t/p/w500";
export const POPULAR_MOVIES_LIST_URL =
  "https://api.themoviedb.org/3/movie/popular?page=1";
export const TOP_RATED_MOVIES_LIST_URL =
  "https://api.themoviedb.org/3/movie/top_rated?page=1";
export const UPCOMING_MOVIES_LIST_URL =
  "https://api.themoviedb.org/3/movie/upcoming?page=1'";

export const SUPPORTED_LANG = [
  { identifier: "en", name: "English" },
  { identifier: "hi", name: "Hindi" },
  { identifier: "fr", name: "French" },
];

export const MOVIE_NAME = "MOVIE_NAME";
export const SEARCH_MOVIE_URL = `https://api.themoviedb.org/3/search/movie?query=${MOVIE_NAME}&include_adult=false&language=en-US&page=1`;
