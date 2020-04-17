import { connect } from "react-redux";
import Filters from "../components/Filters";
import { toggleChecked } from "../actions";

function getCategories(state) {
  const uniqueCategories = [
    ...new Set(state.movies.map(movie => movie.category))
  ];
  return uniqueCategories.map(category => ({
    label: category,
    checked: state.selectedCategories.includes(category)
  }));
}

function mapStateToProps(state) {
  return { categories: getCategories(state) };
}

const mapDispatchToProps = dispatch => {
  return {
    onFilterChange: category => {
      dispatch(toggleChecked(category));
    }
  };
};

const FiltersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);

export default FiltersContainer;
