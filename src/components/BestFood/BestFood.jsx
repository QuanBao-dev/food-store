import { useRef } from "react";
import { useViewportAnimationDisplay } from "../../hooks/useViewportAnimationDisplay";
import "./BestFood.css";
const BestFood = () => {
  const bestFoodContainerRef = useRef();
  useViewportAnimationDisplay(
    bestFoodContainerRef,
    0.5,
    {
      opacity: 0,
      transform: "translateY(10px)",
    },
    {
      opacity: 1,
      transform: "translateY(0)",
    },
    0
  );
  return (
    <div className="best-food-container" ref={bestFoodContainerRef}>
      <div>Best food</div>
      <div>
        Super delicious Steak <span className="high-light-text">Hamburger</span>
      </div>
      <div className="high-light-text">$25.00</div>
      <button>Order now</button>
    </div>
  );
};

export default BestFood;
