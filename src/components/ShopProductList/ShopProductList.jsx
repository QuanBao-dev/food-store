import "./ShopProductList.css";

import React from "react";

import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";
import ShopProductItem from "../ShopProductItem/ShopProductItem";
import { useEffect } from "react";
import { fromEvent } from "rxjs";
import { useState } from "react";

const ShopProductList = ({ list, layout, isLoading }) => {
  const [numberOfProducts, setNumberOfProducts] = useState(4);
  useEffect(() => {
    checkInnerWidth(setNumberOfProducts);
    const subscription = fromEvent(window, "resize").subscribe(() => {
      checkInnerWidth(setNumberOfProducts);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);
  return (
    <ul
      className={
        "shop-product-list" + (layout === "vertical" ? " vertical" : "")
      }
    >
      {list.map(
        (
          { productId, description, imageUrl, location, title, price, rate },
          key
        ) => {
          if (!isLoading && typeof list[0] === "number") {
            return undefined;
          }
          return (
            <LoadingSkeleton
              LoadingComponent={
                <ShopProductItem
                  description={description}
                  productId={productId}
                  imageUrl={imageUrl}
                  location={location}
                  title={title}
                  price={price}
                  rate={rate}
                />
              }
              height={"322px"}
              width={`${100 / numberOfProducts - 4}%`}
              isLoading={isLoading}
              margin={"10px"}
              key={key}
            />
          );
        }
      )}
    </ul>
  );
};

function checkInnerWidth(setNumberOfProducts) {
  if (window.innerWidth < 496) {
    setNumberOfProducts(1);
    return;
  }
  if (window.innerWidth < 744) {
    setNumberOfProducts(2);
    return;
  }
  if (window.innerWidth < 992) {
    setNumberOfProducts(3);
    return;
  }
}

export default ShopProductList;
