import "./Stars.css";

import { useRef, useState } from "react";

const Stars = ({ maxStars, isEditable, activeKeyStar, setActiveKeyStar }) => {
  const arrayListStar = Array.from(Array(maxStars).keys());
  const elementRef = useRef();
  const [keyHoverStar, setKeyHoverStar] = useState(-1);
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="container-star-list"
      onMouseLeave={() => {
        if (isEditable) {
          setKeyHoverStar(-1);
          setIsHover(false);
        }
      }}
      onMouseEnter={() => {
        if (isEditable) setIsHover(true);
      }}
    >
      {arrayListStar.map((_, key) => {
        return (
          <i
            key={key}
            className={
              !isHover
                ? key < activeKeyStar
                  ? "fas fa-stars"
                  : "far fa-stars"
                : key <= keyHoverStar
                ? "fas fa-stars"
                : "far fa-stars"
            }
            ref={elementRef}
            onMouseEnter={() => {
              if (isEditable) setKeyHoverStar(key);
            }}
            onClick={() => {
              if (isEditable) setActiveKeyStar(key + 1);
            }}
          ></i>
        );
      })}
    </div>
  );
};

export default Stars;
