import { movies$ } from "./movies";

export const SET_MOVIES = "SET_MOVIES";
export const DELETE_MOVIE = "DELETE_MOVIE";
export const TOGGLE_LIKE = "TOGGLE_LIKE";
export const TOGGLE_DISLIKE = "TOGGLE_DISLIKE";
export const TOGGLE_CHECKED = "TOGGLE_CHECKED";

export function deleteMovie(id) {
  return { type: DELETE_MOVIE, id };
}

export function toggleLike(id) {
  return { type: TOGGLE_LIKE, id };
}

export function toggleDislike(id) {
  return { type: TOGGLE_DISLIKE, id };
}

export function toggleChecked(category) {
  return { type: TOGGLE_CHECKED, category };
}

function setMovies(movies) {
  return { type: SET_MOVIES, movies };
}

export function fetchMovies() {
  return function(dispatch) {
    // Amélioration: dans le cas d'une vraie API, attraper les erreurs
    return movies$.then(movies => dispatch(setMovies(movies)));
  };
}
