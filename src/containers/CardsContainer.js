import { connect } from "react-redux";
import Cards from "../components/Cards";
import { deleteMovie, toggleLike, toggleDislike } from "../actions";

function getFilteredMovies(state) {
  return state.movies.filter(
    movie =>
      state.selectedCategories.length === 0 ||
      state.selectedCategories.includes(movie.category)
  );
}

function mapStateToProps(state) {
  return { movies: getFilteredMovies(state) };
}

const mapDispatchToProps = dispatch => {
  return {
    onDeleteClick: id => {
      dispatch(deleteMovie(id));
    },
    onLikeClick: id => {
      dispatch(toggleLike(id));
    },
    onDislikeClick: id => {
      dispatch(toggleDislike(id));
    }
  };
};

const CardsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);

export default CardsContainer;
