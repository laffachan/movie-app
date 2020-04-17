import React from "react";
import Card from "./Card";
import styles from "./Cards.module.css";

function Cards({ movies, onDeleteClick, onLikeClick, onDislikeClick }) {
  return (
    <div className={styles.root}>
      {movies.map(movie => (
        <Card
          title={movie.title}
          category={movie.category}
          likes={movie.likes}
          isLiked={movie.isLiked}
          dislikes={movie.dislikes}
          isDisliked={movie.isDisliked}
          onDeleteClick={() => onDeleteClick(movie.id)}
          onLikeClick={() => onLikeClick(movie.id)}
          onDislikeClick={() => onDislikeClick(movie.id)}
        />
      ))}
    </div>
  );
}

export default Cards;
