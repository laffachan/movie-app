import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./Card.module.css";

// Retourne une valeur "compact" localisée (1234 -> 1K pour en-GB)
// Dépend du navigateur (fonctionne sous Chrome)
// Avantage: ne nécessite pas l'ajout d'une dépendance, API native
// Désavantage: inconsistance
const numberFormat = new Intl.NumberFormat("en-GB", {
  notation: "compact",
  compactDisplay: "short"
});

function Card({
  title,
  category,
  likes,
  isLiked,
  dislikes,
  isDisliked,
  onDeleteClick,
  onLikeClick,
  onDislikeClick
}) {
  const totalLikes = numberFormat.format(likes + (isLiked ? 1 : 0));
  const totalDislikes = numberFormat.format(dislikes + (isDisliked ? 1 : 0));

  return (
    <div className={styles.root}>
      <div
        className={styles.cover}
        style={{
          // Seed permet d'avoir une image différente selon le nom du film
          // EncodeURIComponent encode les éventuels caractères spéciaux de title (ex: "/")
          backgroundImage: `url(https://picsum.photos/seed/${encodeURIComponent(
            title
          )}/600/400)`
        }}
      >
        <button className={styles.delete} onClick={onDeleteClick}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.category}>{category}</p>
        <div className={styles.likeWrapper}>
          <button
            className={isLiked ? styles.isLiked : ""}
            onClick={onLikeClick}
          >
            <FontAwesomeIcon icon={faThumbsUp} />
            {totalLikes}
          </button>
          <button
            className={isDisliked ? styles.isDisliked : ""}
            onClick={onDislikeClick}
          >
            <FontAwesomeIcon icon={faThumbsDown} />
            {totalDislikes}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
