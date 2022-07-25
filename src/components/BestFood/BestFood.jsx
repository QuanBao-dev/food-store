import "./BestFood.css";

import { useRef } from "react";
import { useViewportAnimationDisplay } from "../../hooks/useViewportAnimationDisplay";

const BestFood = () => {
  const heading1Ref = useRef();
  const heading2Ref = useRef();
  const highlightRef = useRef();
  const buttonOrderNowRef = useRef();

  useViewportAnimationDisplay(
    heading1Ref,
    0.5,
    {
      opacity: 0,
    },
    {
      opacity: 1,
    },
    0
  );

  useViewportAnimationDisplay(
    heading2Ref,
    0.5,
    {
      opacity: 0,
      transform: "translateX(-100%)",
    },
    {
      opacity: 1,
      transform: "translateX(0)",
    },
    0.5
  );

  useViewportAnimationDisplay(
    highlightRef,
    0.5,
    {
      opacity: 0,
      transform: "translateX(-100%)",
    },
    {
      opacity: 1,
      transform: "translateX(0)",
    },
    1
  );

  useViewportAnimationDisplay(
    buttonOrderNowRef,
    0.5,
    {
      opacity: 0,
    },
    {
      opacity: 1,
    },
    1.5
  );

  return (
    <div className="best-food-container">
      <div ref={heading1Ref}>Best food</div>
      <div ref={heading2Ref}>
        Super delicious Steak <span className="high-light-text">Hamburger</span>
      </div>
      <div className="high-light-text" ref={highlightRef}>
        $25.00
      </div>
      <button ref={buttonOrderNowRef}>Order now</button>
    </div>
  );
};

export default BestFood;
