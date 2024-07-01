import React from "react";
import classes from "./RecipeItem.module.css";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import useFavorites from "../../hooks/useFavorites";

export default function RecipeItem({ recipe }) {
  const { favorites } = useFavorites();

  const { toggleFavorites } = useActions();

  const isExists = favorites.some((rec) => rec.id === recipe.id);

  return (
    <div className={classes.item}>
      {/* <image /> */}
      <h3>{recipe.name}</h3>
      <button onClick={() => toggleFavorites(recipe)}>
        {isExists ? "Remove from favorites" : "Add to favorites"}
      </button>
    </div>
  );
}
