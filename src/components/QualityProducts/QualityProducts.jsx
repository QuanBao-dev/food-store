import "./QualityProducts.css";

import { useRef } from "react";

import {
  updatePageActiveSlide,
  useGenerateVariableCarousel,
  useSlideFeature,
} from "../../hooks/useSlideFeature";
import { useViewportAnimationDisplay } from "../../hooks/useViewportAnimationDisplay";
import PagesCarousel from "../PagesCarousel/PagesCarousel";
import QualityProductCard from "../QualityProductCard/QualityProductCard";
import { useContainerResponsive } from "../../hooks/useContainerResponsive";

const dataListRaw = [
  {
    imageUrl: "https://food-g-app.web.app/static/media/product-1.3cab11b6.png",
    name: "Crazy Burger",
    description: "Buarning do amet contur dicivt suia non nuameius velit",
    price: "$20.00",
  },
  {
    imageUrl: "https://food-g-app.web.app/static/media/product-2.8dd2e21f.png",
    name: "Beefcakes Burgers",
    description: "Buarning do amet contur dicivt suia non nuameius velit",
    price: "$34.00",
  },
  {
    imageUrl: "https://food-g-app.web.app/static/media/product-3.70a8d716.png",
    name: "The Crispy Bun",
    description: "Buarning do amet contur dicivt suia non nuameius velit",
    price: "$15.00",
  },
  {
    imageUrl: "https://food-g-app.web.app/static/media/product-4.baa9b4a8.png",
    name: "Bugout Burgers",
    description: "Buarning do amet contur dicivt suia non nuameius velit",
    price: "$60.00",
  },
];
const QualityProducts = () => {
  const {
    listProductsWrapperRef,
    amountProductsEachPageStateList,
    realPageStateList,
    pageActiveStateList,
    isDisplayLayerBlockStateList,
    isIntervalModeRef,
    timeoutRef,
    dataList,
  } = useGenerateVariableCarousel(4, true, dataListRaw);
  const qualityProductsWrapperRef = listProductsWrapperRef;
  const qualityProductsContainerRef = useRef();
  const qualityProductsHeadline2Ref = useRef();

  const isIntervalMode = isIntervalModeRef;
  const [amountProductsEachPage, setAmountProductsEachPage] =
    amountProductsEachPageStateList;
  const [pageActive, setPageActive] = pageActiveStateList;
  const [realPage, setRealPage] = realPageStateList;
  const [isDisplayLayerBlock, setIsDisplayLayerBlock] =
    isDisplayLayerBlockStateList;
  useContainerResponsive(qualityProductsContainerRef);

  useViewportAnimationDisplay(
    qualityProductsHeadline2Ref,
    1,
    {
      opacity: 0,
      transform: "translateX(100%)",
    },
    {
      opacity: 1,
      transform: "translateX(0)",
    },
    0
  );

  useViewportAnimationDisplay(
    qualityProductsWrapperRef,
    1,
    {
      opacity: 0,
    },
    {
      opacity: 1,
    },
    0
  );
  useSlideFeature(
    qualityProductsWrapperRef,
    amountProductsEachPage,
    pageActive,
    setPageActive,
    setIsDisplayLayerBlock,
    dataListRaw.length,
    {
      arrayWidthCondition: [
        {
          minWidth: 1500,
          maxWidth: 1700,
          amount: 4,
        },
        {
          minWidth: 1050,
          maxWidth: 1500,
          amount: 3,
        },
        {
          maxWidth: 1050,
          minWidth: 562,
          amount: 2,
        },
        {
          maxWidth: 562,
          minWidth: 0,
          amount: 1
        }
      ],
      setAmountProductsEachPage: setAmountProductsEachPage,
    },
    { initIsIntervalModeRef: isIntervalMode, secondTimeInterval: 2 },
    timeoutRef,
    setRealPage,
    realPage,
    isDisplayLayerBlock
  );
  return (
    <div
      className="quality-products-container"
      ref={qualityProductsContainerRef}
    >
      {isDisplayLayerBlock && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "transparent",
            height: "100%",
            width: "100%",
            zIndex: 100,
            cursor: "grabbing",
          }}
        ></div>
      )}
      <div className="quality-products-headline">Quality Products</div>
      <div
        className="quality-products-headline-2"
        ref={qualityProductsHeadline2Ref}
      >
        Burger as expected <span className="high-light-text">delicious</span>{" "}
        one
      </div>
      <div className="list-products-container">
        <div className="list-products-wrapper" ref={qualityProductsWrapperRef}>
          {dataList.map(({ description, imageUrl, name }, index) => (
            <QualityProductCard
              style={{
                minWidth: `${100 / amountProductsEachPage}%`,
              }}
              key={index}
              description={description}
              imageUrl={imageUrl}
              name={name}
            />
          ))}
        </div>
        <PagesCarousel
          startPage={dataListRaw.length + amountProductsEachPage}
          realPage={realPage}
          amountProductsEachPage={amountProductsEachPage}
          lengthOfDataRawList={dataListRaw.length}
          updatePageActive={(page, isAnimation) => {
            updatePageActiveSlide(
              qualityProductsWrapperRef,
              page,
              isAnimation,
              timeoutRef,
              setPageActive,
              setRealPage
            );
          }}
        />
      </div>
    </div>
  );
};

export default QualityProducts;
