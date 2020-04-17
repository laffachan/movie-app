import {
  DELETE_MOVIE,
  TOGGLE_LIKE,
  TOGGLE_DISLIKE,
  TOGGLE_CHECKED,
  SET_MOVIES
} from "./actions";

const initialState = {
  movies: [],
  selectedCategories: []
};

// Comme le state est simple, je n'utilise pas de subreducers
function reducers(state = initialState, action) {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.movies
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.id),
        // Amélioration: il faudrait enlever les catégories qui n'existent plus
        // dans la liste des films.
        // Ici on vide le tableau pour ne pas avoir de bug avec des
        // catégories "fantômes".
        selectedCategories: []
      };
    case TOGGLE_LIKE:
      return {
        ...state,
        movies: state.movies.map(movie => {
          if (movie.id === action.id) {
            return { ...movie, isLiked: !movie.isLiked, isDisliked: false };
          } else {
            return movie;
          }
        })
      };
    case TOGGLE_DISLIKE:
      return {
        ...state,
        movies: state.movies.map(movie => {
          if (movie.id === action.id) {
            return { ...movie, isDisliked: !movie.isDisliked, isLiked: false };
          } else {
            return movie;
          }
        })
      };
    case TOGGLE_CHECKED:
      let selectedCategories;
      // Si une catégorie est déjà présente dans selectedCategories, on la retire.
      // Si une catégorie n'est pas encore sélectionnée, on l'ajoute.
      if (state.selectedCategories.includes(action.category)) {
        selectedCategories = state.selectedCategories.filter(
          category => category !== action.category
        );
      } else {
        selectedCategories = [...state.selectedCategories, action.category];
      }

      return {
        ...state,
        selectedCategories
      };
    default:
      return state;
  }
}

export default reducers;
