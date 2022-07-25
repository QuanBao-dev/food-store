import "./StepItem.css";
import { useRef } from "react";
import { useViewportAnimationDisplay } from "../../hooks/useViewportAnimationDisplay";
const StepItem = ({ isArrow, imageSrc, numberStep, titleStep, indexStep }) => {
  const stepItemRef = useRef();
  useViewportAnimationDisplay(
    stepItemRef,
    0.5,
    {
      opacity: 0,
      transform: "translateY(10px)",
    },
    {
      opacity: 1,
      transform: "translateY(0)",
    },
    indexStep * 0.2
  );
  if (!isArrow)
    return (
      <li className="step-item" ref={stepItemRef}>
        <img src={imageSrc} alt="" />
        <span className="step-number">
          <span>{numberStep}</span>
        </span>
        <div className="text-description">{titleStep}</div>
      </li>
    );
  return (
    <li className="step-item-arrow" ref={stepItemRef}>
      <img src={imageSrc} alt=""></img>
    </li>
  );
};

export default StepItem;
