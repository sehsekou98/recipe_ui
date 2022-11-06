import "./recipeCard.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ name, imgSrc, id }) => {
  const navigate = useNavigate();

  const goToRecipeDetailsPage = () => {
    navigate(`/details/${id}`);
  };
  return (
    <div className="recipe__card" onClick={goToRecipeDetailsPage}>
      <img src={imgSrc} alt={name} />
      <h2>{name}</h2>
    </div>
  );
};

export default RecipeCard;
