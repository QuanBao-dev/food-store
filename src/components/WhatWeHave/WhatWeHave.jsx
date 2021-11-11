import "./WhatWeHave.css";

import { useRef } from "react";

import { useContainerResponsive } from "../../hooks/useContainerResponsive";
import {
  handleClickGoBackPage,
  handleClickGoForwardPage,
  useGenerateVariableCarousel,
  useSlideFeature,
} from "../../hooks/useSlideFeature";
import { useViewportAnimationDisplay } from "../../hooks/useViewportAnimationDisplay";

let dataListRaw = [
  {
    imageSrc: "https://food-g-app.web.app/static/media/pork.98f99006.svg",
    description: "pork ham",
  },
  {
    imageSrc: "https://food-g-app.web.app/static/media/dinner.5e12f363.svg",
    description: "dinner",
  },
  {
    imageSrc: "https://food-g-app.web.app/static/media/tea.591a2362.svg",
    description: "tea",
  },
  {
    imageSrc: "https://food-g-app.web.app/static/media/lunch.68d27597.svg",
    description: "lunch",
  },
  {
    imageSrc: "https://food-g-app.web.app/static/media/juice.dd087137.svg",
    description: "juice",
  },
  {
    imageSrc: "https://food-g-app.web.app/static/media/chicken.0bf00278.svg",
    description: "grilled chicken",
  },
  {
    imageSrc: "https://food-g-app.web.app/static/media/beef.95b6ea9e.svg",
    description: "roast beef",
  },
  {
    imageSrc: "https://food-g-app.web.app/static/media/burger.33e152d0.svg",
    description: "breakfast",
  },
  {
    imageSrc: "https://food-g-app.web.app/static/media/coffee.06d317df.svg",
    description: "coffee",
  },
];
const WhatWeHave = () => {
  const {
    amountProductsEachPageStateList,
    dataList,
    isDisplayLayerBlockStateList,
    isIntervalModeRef,
    listProductsWrapperRef,
    pageActiveStateList,
    realPageStateList,
    timeoutRef,
  } = useGenerateVariableCarousel(7, true, dataListRaw);
  const [amountProductsEachPage, setAmountProductsEachPage] =
    amountProductsEachPageStateList;
  const [realPage, setRealPage] = realPageStateList;
  const [pageActive, setPageActive] = pageActiveStateList;
  const [isDisplayLayerBlock, setIsDisplayLayerBlock] =
    isDisplayLayerBlockStateList;
  const carouselFoodCategoryWrapperRef = listProductsWrapperRef;
  const isIntervalMode = isIntervalModeRef;
  const timeout = timeoutRef;
  const whatWeHaveContainerRef = useRef();
  const containerCarouselFoodCategoryRef = useRef();
  const heading1Ref = useRef();
  const heading2Ref = useRef();
  useContainerResponsive(whatWeHaveContainerRef);
  useViewportAnimationDisplay(
    heading1Ref,
    0.5,
    {
      opacity: 0,
    },
    {
      opacity: 1,
    },
    0
  );
  useViewportAnimationDisplay(
    heading2Ref,
    0.5,
    {
      opacity: 0,
    },
    {
      opacity: 1,
    },
    0.3
  );
  useViewportAnimationDisplay(
    containerCarouselFoodCategoryRef,
    0.5,
    {
      opacity: 0,
      transform: "translateY(30px)",
    },
    {
      opacity: 1,
      transform: "translateY(0)",
    },
    0.5
  );
  useSlideFeature(
    carouselFoodCategoryWrapperRef,
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
          amount: 7,
        },
        {
          minWidth: 1200,
          maxWidth: 1500,
          amount: 6,
        },
        {
          minWidth: 1000,
          maxWidth: 1200,
          amount: 5,
        },
        {
          minWidth: 900,
          maxWidth: 1000,
          amount: 4,
        },
        {
          maxWidth: 900,
          minWidth: 800,
          amount: 3,
        },
        {
          maxWidth: 800,
          minWidth: 0,
          amount: 2,
        },
      ],
      setAmountProductsEachPage: setAmountProductsEachPage,
    },
    { initIsIntervalModeRef: isIntervalMode, secondTimeInterval: 2 },
    timeout,
    setRealPage,
    realPage,
    isDisplayLayerBlock
  );

  return (
    <div className="what-we-have-container" ref={whatWeHaveContainerRef}>
      <div ref={heading1Ref}>What we have</div>
      <div ref={heading2Ref}>Browse food category</div>
      <div
        className="container-carousel-food-category"
        ref={containerCarouselFoodCategoryRef}
      >
        <div
          className="arrow-left-container"
          onClick={handleClickGoBackPage(
            pageActive,
            amountProductsEachPage,
            dataListRaw.length,
            timeout,
            carouselFoodCategoryWrapperRef,
            setPageActive,
            setRealPage
          )}
        >
          <i className="fas fa-chevron-left"></i>
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="carousel-food-category">
          {isDisplayLayerBlock && (
            <div>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  backgroundColor: "transparent",
                  height: "100%",
                  width: "100%",
                  zIndex: 1000,
                  cursor: "grabbing",
                }}
              ></div>
            </div>
          )}
          <div
            className="carousel-food-category-wrapper"
            ref={carouselFoodCategoryWrapperRef}
          >
            {dataList.map((data, key) => (
              <div
                key={key}
                style={{
                  minWidth: `${100 / amountProductsEachPage}%`,
                }}
              >
                <div className="food-slide-item">
                  <div className="food-item-wrapper">
                    <div className="food-item-image-wrapper">
                      <img src={data.imageSrc} alt=""></img>
                    </div>
                    <div>{data.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="arrow-right-container"
          onClick={handleClickGoForwardPage(
            pageActive,
            amountProductsEachPage,
            dataListRaw.length,
            timeout,
            carouselFoodCategoryWrapperRef,
            setPageActive,
            setRealPage
          )}
        >
          <i className="fas fa-chevron-right"></i>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default WhatWeHave;
