import { api, fallback } from "../config";

export function searchMovieUrl(query) {
  let url = `${api.base_url}/search/movie?api_key=${api.key}&query=${query}`;
  return url;
}
export function getMovieDetailsUrl(id) {
  return `${api.base_url}/movie/${id}?api_key=${api.key}`;
}

export function getImageUrl(path, size = "original", landscape = false) {
  let imgurl = path
    ? `${api.image_url}${size}${path}`
    : landscape
    ? fallback.no_img_url_landscape
    : fallback.no_img_url;
  return imgurl;
}

export function truncateText(para) {
  return para.substring(0, 125) + "...";
}

export function getSimilarMovies(id) {
  return `${api.base_url}/movie/${id}/similar?api_key=${api.key}`;
}

export function getRecommendations(id) {
  return `${api.base_url}/movie/${id}/recommendations?api_key=${api.key}`;
}

export function getVideosUrl(id) {
  return `${api.base_url}/movie/${id}/videos?api_key=${api.key}`;
}
