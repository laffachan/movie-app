import React from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../actions";
import Layout from "../components/Layout";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchMovies());
  }

  render() {
    // Amélioration: afficher un message "chargement..." pendant que l'API
    // charge. Par exemple, en utilisant un état isFetching.
    return <Layout />;
  }
}

const AppContainer = connect()(App);

export default AppContainer;
