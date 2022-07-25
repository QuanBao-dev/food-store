import { useRef } from "react";
import "./ShopPopularOptionItem.css";
const ShopPopularOptionItem = ({
  name,
  className,
  popular,
  updatePopular,
  index,
}) => {
  const popularOptionItemRef = useRef();
  return (
    <li
      ref={popularOptionItemRef}
      className={
        "popular-option-item" + (parseInt(popular) === index ? " active" : "")
      }
      onClick={() => {
        if (popularOptionItemRef.current.className.includes(" active")) {
          updatePopular("");
        } else {
          updatePopular(index.toString());
        }
      }}
    >
      <i className={className}></i>
      <span>{name}</span>
    </li>
  );
};

export default ShopPopularOptionItem;
