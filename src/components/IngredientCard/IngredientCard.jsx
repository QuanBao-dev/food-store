import { useRef } from "react";
import { useViewportAnimationDisplay } from "../../hooks/useViewportAnimationDisplay";
import "./IngredientCard.css";
const IngredientCard = ({ number, title, description }) => {
  const ingredientCardRef = useRef();
  useViewportAnimationDisplay(
    ingredientCardRef,
    0.5,
    {
      transform: "translateY(10px)",
      opacity: 0,
    },
    {
      transform: "translateY(0)",
      opacity: 1,
    }
  );
  return (
    <div className="ingredient-card-container" ref={ingredientCardRef}>
      <h1 className="title-heading">{title}</h1>
      <div className="ingredient-description">{description}</div>
      <div className="ingredient-number">{number}</div>
    </div>
  );
};

export default IngredientCard;
