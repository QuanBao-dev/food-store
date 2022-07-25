import "./ShopPriceOptions.css";

import ShopPriceOptionItem from "../ShopPriceOptionItem/ShopPriceOptionItem";

const ShopPriceOptions = ({ priceOptionList }) => {
  return (
    <ul className="shop-price-options">
      {priceOptionList.map(({ name }, key) => (
        <ShopPriceOptionItem name={name} key={key} index={key} />
      ))}
    </ul>
  );
};

export default ShopPriceOptions;
