import "./ShopProductDetail.css";

import { useState } from "react";
import { connect } from "react-redux";

import {
  updateDetailData,
  updateIsLoadingRelatedProducts,
  updateRelatedProducts,
} from "../../actions/shopProductDetail";
import Banner from "../../components/Banner/Banner";
import Counter from "../../components/Counter/Counter";
import DiscountOptions from "../../components/DiscountOptions/DiscountOptions";
import FormSubmitReview from "../../components/FormSubmitReview/FormSubmitReview";
import LoadingSkeleton from "../../components/LoadingSkeleton/LoadingSkeleton";
import ProductPrice from "../../components/ProductPrice/ProductPrice";
import ShopProductList from "../../components/ShopProductList/ShopProductList";
import Stars from "../../components/Stars/Stars";
import ZoomingImage from "../../components/ZoomingImage/ZoomingImage";
import {
  useFetchShopProductDetailByProductId,
  useFetchShopRelatedProducts,
} from "../../hooks/useApiMethod";
import { addToCart } from "../../actions/shopCart";

const commitments = [
  {
    iconClassName: "far fa-truck",
    label: "Free global shipping on all orders",
  },
  {
    iconClassName: "fas fa-toolbox",
    label: "2 hours easy returns if you change your mind",
  },
  {
    iconClassName: "fal fa-tag",
    label: "Order before noon for same day dispatch",
  },
];
const ShopProductDetail = (
  {
    match,
    detailData,
    cart,
    relatedProducts,
    isLoadingRelatedProducts,
    productAmount,
    updateDetailData,
    updateRelatedProducts,
    updateIsLoadingRelatedProducts,
    addItemToCart,
  } = { ...mapStateToProps(), ...mapDispatchToProps() }
) => {
  const productId = match.params.productId;
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  useFetchShopProductDetailByProductId(productId, updateDetailData);
  useFetchShopRelatedProducts(
    detailData.tags ? detailData.tags[0] : "",
    detailData.productId,
    updateRelatedProducts,
    updateIsLoadingRelatedProducts
  );
  return (
    <div style={{ fontFamily: "Roboto, san-serif" }}>
      <div style={
        {
          
        }
      }>
        
      </div>
      <Banner url={window.location.href} />
      <FirstSection
        detailData={detailData}
        addItemToCart={addItemToCart}
        productAmount={productAmount}
        cart={cart}
      />
      <div className="section-2-shop-product-detail-container">
        <div className="tabs-container">
          <div
            className="tab-active-background"
            style={{
              left: `${50 * activeTabIndex}%`,
            }}
          ></div>
          <div
            className="tab-item"
            style={{
              color: activeTabIndex === 0 ? "white" : "black",
            }}
            onClick={() => {
              setActiveTabIndex(0);
            }}
          >
            Description
          </div>
          <div
            className="tab-item"
            style={{
              color: activeTabIndex === 1 ? "white" : "black",
            }}
            onClick={() => {
              setActiveTabIndex(1);
            }}
          >
            Reviews
          </div>
        </div>
        {activeTabIndex === 0 && (
          <div className="description-container">
            <div className="text-description">{detailData.description}</div>
            <div className="text-ingredient">
              <h3>Ingredients</h3>
              <ul>
                {detailData.ingredients &&
                  detailData.ingredients.map((string, key) => (
                    <li key={key}>{string}</li>
                  ))}
              </ul>
            </div>
          </div>
        )}
        {activeTabIndex === 1 && <FormSubmitReview />}
      </div>
      <div className="related-products-container">
        {(relatedProducts.length > 0 || isLoadingRelatedProducts) && (
          <h1>Related Products</h1>
        )}
        <div className="related-products-list">
          <ShopProductList
            list={
              relatedProducts.length === 0
                ? Array.from(Array(4).keys())
                : relatedProducts.slice(0, 4)
            }
            layout={""}
            isLoading={isLoadingRelatedProducts}
          />
        </div>
      </div>
    </div>
  );
};

const FirstSection = ({ detailData, addItemToCart, productAmount }) => {
  return (
    <div className="section-1-shop-product-detail-container">
      <LoadingSkeleton
        LoadingComponent={
          <ZoomingImage
            src={detailData.imageUrl}
            height={550}
            width={550}
            ratio={3}
            responsiveConditions={[
              {
                minWidth: 1327,
                maxWidth: 2000,
                width: 550,
                height: 550,
              },
              {
                minWidth: 1000,
                maxWidth: 1327,
                width: 440,
                height: 440,
              },
            ]}
          />
        }
        height={"650px"}
        width={"650px"}
        isLoading={Object.keys(detailData).length === 0}
        margin={"0"}
      />
      <div className="container-text-description">
        <LoadingSkeleton
          LoadingComponent={<h1>{detailData.title}</h1>}
          height={"40px"}
          width={"500px"}
          margin={"1rem 0"}
          isLoading={Object.keys(detailData).length === 0}
        />
        <LoadingSkeleton
          LoadingComponent={
            <Stars activeKeyStar={parseInt(detailData.rate)} maxStars={5} />
          }
          height={"40px"}
          width={"50px"}
          isLoading={Object.keys(detailData).length === 0}
        />

        <LoadingSkeleton
          height={"40px"}
          width={"300px"}
          LoadingComponent={
            <ProductPrice
              price={parseFloat(
                detailData.price ? detailData.price.replace("$", "") : "0"
              )}
            />
          }
          isLoading={Object.keys(detailData).length === 0}
        />
        <div className="container-category-country">
          <LoadingSkeleton
            isLoading={Object.keys(detailData).length === 0}
            LoadingComponent={
              <div>
                <span>Category: </span>
                <span className="category">
                  {!detailData.tags || detailData.tags.length === 0
                    ? "Best Food"
                    : detailData.tags[0]}
                </span>
              </div>
            }
            height={"40px"}
            width={"150px"}
          />
          <LoadingSkeleton
            LoadingComponent={
              <div>
                <span>Country: </span>
                <span className="country">{detailData.location}</span>
              </div>
            }
            isLoading={Object.keys(detailData).length === 0}
            height={"40px"}
            width={"150px"}
          />
        </div>
        <LoadingSkeleton
          LoadingComponent={
            <div>
              <h3 className="choose-your-option">Choose your options</h3>
              <DiscountOptions />
            </div>
          }
          height={"150px"}
          width={"300px"}
          isLoading={Object.keys(detailData).length === 0}
          margin={"0 0 1rem 0"}
        />
        <LoadingSkeleton
          LoadingComponent={
            <div className="container-add-product-to-cart">
              <Counter />
              <button
                className="add-to-cart"
                onClick={() => {
                  const temp = { ...detailData };
                  delete temp.ingredients;
                  delete temp.description;
                  addItemToCart(temp, productAmount);
                }}
              >
                Add to cart
              </button>
              <i className="far fa-heart"></i>
            </div>
          }
          height={"90px"}
          width={"500px"}
          isLoading={Object.keys(detailData).length === 0}
        />
        <div className="commitments-container">
          {commitments.map(({ iconClassName, label }) => (
            <LoadingSkeleton
              key={label}
              LoadingComponent={
                <div className="commitment-item">
                  <i className={iconClassName}></i>
                  <span>{label}</span>
                </div>
              }
              height={"40px"}
              width={"350px"}
              isLoading={Object.keys(detailData).length === 0}
              margin={"0.2rem 0"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  detailData: state.shopProductDetail.detailData,
  relatedProducts: state.shopProductDetail.relatedProducts,
  isLoadingRelatedProducts: state.shopProductDetail.isLoadingRelatedProducts,
  cart: state.shopCart.cart,
  productAmount: state.shopProductDetail.productAmount,
});

const mapDispatchToProps = (dispatch) => ({
  updateDetailData: (detailData) => dispatch(updateDetailData(detailData)),
  updateRelatedProducts: (relatedProducts) =>
    dispatch(updateRelatedProducts([...relatedProducts])),
  updateIsLoadingRelatedProducts: (isLoading) =>
    dispatch(updateIsLoadingRelatedProducts(isLoading)),
  addItemToCart: (item, amount) => dispatch(addToCart(item, amount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopProductDetail);
