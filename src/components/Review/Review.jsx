import { useRef } from "react";
import { useViewportAnimationDisplay } from "../../hooks/useViewportAnimationDisplay";
import "./Review.css";
const Review = ({ imageUrl, name, role, review, style }) => {
  const reviewContainerRef = useRef();
  useViewportAnimationDisplay(
    reviewContainerRef,
    2,
    {
      transform: "translateY(40px)",
      opacity: "0",
    },
    {
      transform: "translateY(0)",
      opacity: "1",
    },
    0
  );
  return (
    <div
      className="review-container"
      style={{ ...style }}
      ref={reviewContainerRef}
    >
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <h1 className="name">{name}</h1>
      <p className="role">{role}</p>
      <div className="review-text">{review}</div>
    </div>
  );
};

export default Review;
