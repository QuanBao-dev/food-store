import {
  updatePageActiveSlide,
  useGenerateVariableCarousel,
  useSlideFeature,
} from "../../hooks/useSlideFeature";
import PagesCarousel from "../PagesCarousel/PagesCarousel";
import Review from "../Review/Review";
import "./Reviews.css";
const dataListRaw = [
  {
    name: "Tim Cook",
    role: "CEO of Apple",
    review:
      "I had lunch with some of my colleagues at Echo on Day 1. I had the wedge salad - it was delicious. On Night 2, I enjoyed a drink at the bar. I had a Margarita. The service was excellent",
    imageUrl:
      "https://food-g-app.web.app/static/media/user-review-3.3fbbdde9.jpg",
  },
  {
    name: "mark zuckerberg",
    role: "Co-founding Facebook, Inc",
    review:
      "I chose food G because of their value And incredible superior customer Service they really awesome Food with quality service Ha of their value And incredible sup with quality",
    imageUrl:
      "https://food-g-app.web.app/static/media/user-review-1.05fc2331.jpg",
  },
  {
    name: "Rose",
    role: "Main vocalist of Backpink group",
    review:
      "Had dinner with girl friends. Menu is perfect, something for everyone. Service was awesome and Jason was very accommodating. Will be back definitely!",
    imageUrl:
      "https://food-g-app.web.app/static/media/user-review-2.8b773fe5.jpg",
  },
];
const Reviews = () => {
  const {
    amountProductsEachPageStateList,
    dataList,
    isDisplayLayerBlockStateList,
    isIntervalModeRef,
    listProductsWrapperRef,
    pageActiveStateList,
    realPageStateList,
    timeoutRef,
  } = useGenerateVariableCarousel(1, true, dataListRaw);
  const [amountProductEachPage, setAmountProductEachPage] =
    amountProductsEachPageStateList;
  const [isDisplayLayerBlock, setIsDisplayLayerBlock] =
    isDisplayLayerBlockStateList;
  const [pageActive, setPageActive] = pageActiveStateList;
  const [realPage, setRealPage] = realPageStateList;

  useSlideFeature(
    listProductsWrapperRef,
    amountProductEachPage,
    pageActive,
    setPageActive,
    setIsDisplayLayerBlock,
    dataListRaw.length,
    {
      arrayWidthCondition: null,
      setAmountProductsEachPage: setAmountProductEachPage,
    },
    {
      initIsIntervalModeRef: isIntervalModeRef,
      secondTimeInterval: 5,
    },
    timeoutRef,
    setRealPage,
    realPage,
    isDisplayLayerBlock
  );
  return (
    <div className="reviews-container">
      <img
        src="https://food-g-app.web.app/static/media/bg-icon-4.2a06c70e.svg"
        alt=""
        className="floating-food"
        style={{
          top: "20%",
          left: 0,
        }}
      />
      <img
        src="https://food-g-app.web.app/static/media/bg-icon-5.89e109c4.svg"
        alt=""
        className="zooming-food"
        style={{
          top: "30%",
          left: "60%",
        }}
      />
      <img
        src="https://food-g-app.web.app/static/media/bg-icon-6.ccbc0c31.svg"
        alt=""
        className="floating-food"
        style={{
          top: "10%",
          left: "90%",
        }}
      />
      <img
        src="https://food-g-app.web.app/static/media/bg-icon-7.4ecf8097.svg"
        alt=""
        className="floating-food"
        style={{
          top: "60%",
          left: 1200,
        }}
      />
      <img
        src="https://food-g-app.web.app/static/media/bg-icon-8.a5998863.svg"
        alt=""
        className="floating-food"
        style={{
          top: "60%",
          left: "30%",
        }}
      />
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
      <div className="reviews-wrapper" ref={listProductsWrapperRef}>
        {dataList.map(({ imageUrl, name, review, role }, key) => (
          <Review
            imageUrl={imageUrl}
            name={name}
            review={review}
            role={role}
            key={key}
            style={{
              minWidth: `${100 / amountProductEachPage}%`,
            }}
          />
        ))}
      </div>
      <PagesCarousel
        lengthOfDataRawList={dataListRaw.length}
        realPage={realPage}
        startPage={amountProductEachPage + dataListRaw.length}
        updatePageActive={(page, isAnimation) => {
          updatePageActiveSlide(
            listProductsWrapperRef,
            page,
            isAnimation,
            timeoutRef,
            setPageActive,
            setRealPage
          );
        }}
      />
    </div>
  );
};

export default Reviews;
