import "./ShopFilter.css";

import ShopPopularOptions from "../ShopPopularOptions/ShopPopularOptions";
import ShopPriceOptions from "../ShopPriceOptions/ShopPriceOptions";
import ShopStarOptions from "../ShopStarOptions/ShopStarOptions";

const dataRawList = {
  popular: [
    {
      name: "Burgers",
      className: "fas fa-hamburger",
    },
    {
      name: "Breads",
      className: "fas fa-bread-slice",
    },
    {
      name: "Sandwich",
      className: "fas fa-sandwich",
    },
    {
      name: "Drinks",
      className: "fas fa-wine-bottle",
    },
    {
      name: "Pizza",
      className: "fas fa-pizza",
    },
  ],
  price: [
    {
      name: "Under $100",
      isActive: false,
    },
    {
      name: "$50 to $100",
      isActive: false,
    },
    {
      name: "Under $50",
      isActive: false,
    },
    {
      name: "Above $100",
      isActive: false,
    },
  ],
  rate: [
    {
      amount: 5,
    },
    {
      amount: 4,
    },
    {
      amount: 3,
    },
  ],
};
const ShopFilter = () => {
  return (
    <div className="shop-filter-container">
      <div className="shop-filter-item">
        <h1>Popular</h1>
        <ShopPopularOptions popularOptions={dataRawList.popular} />
      </div>
      <div className="shop-filter-item">
        <h1>Price</h1>
        <ShopPriceOptions priceOptionList={dataRawList.price} />
      </div>
      <div className="shop-filter-item">
        <h1>Rate</h1>
        <ShopStarOptions rates={dataRawList.rate} />
      </div>
    </div>
  );
};

export default ShopFilter;
