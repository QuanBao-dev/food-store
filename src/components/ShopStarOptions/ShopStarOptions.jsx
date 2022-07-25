import './ShopStarOptions.css';

import StarsOptionItem from '../StarsOptionItem/StarsOptionItem';

const ShopStarOptions = ({ rates }) => {
  return (
    <ul className="shop-star-options">
      {rates.map(({ amount }, key) => (
        <StarsOptionItem
          key={key}
          index={key}
          amount={amount}
        />
      ))}
    </ul>
  );
};

export default ShopStarOptions;
