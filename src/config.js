export const api = {
  base_url: "https://api.themoviedb.org/3",
  key: "dba6775d5f0b300de08169cc6d606e1d",
  image_url: "https://image.tmdb.org/t/p/",
  img_w: ["w45", "w92", "w154", "w185", "w300", "w500", "original"],
  backdrop_w: ["w300", "w780", "w1280", "original"]
};

export const fallback = {
  no_img_url_potrait:
    "http://placehold.jp/24/666666/c9c9c9/154x231.png?text=No%20Image%20Available&css=%7B%22font-family%22%3A%22sans-serif%22%7D",
  no_img_url_landscape:
    "http://placehold.jp/24/666666/c9c9c9/300x180.png?text=No%20Image%20Available&css=%7B%22font-family%22%3A%22sans-serif%22%7D"
};
