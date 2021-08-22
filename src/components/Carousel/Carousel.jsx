import './Carousel.css';
import { updatePageActiveSlide, useGenerateVariableCarousel, useSlideFeature } from '../../hooks/useSlideFeature';
import CarouselSlide from '../CarouselSlide/CarouselSlide';
import PagesCarousel from '../PagesCarousel/PagesCarousel';

const dataListRaw = [
  {
    imageUrl: "https://food-g-app.web.app/static/media/banner-st.57953e4d.jpg",
    heading1: "Enjoy your meal",
    heading2: "Good food is wise",
    heading2Red: "medicine",
    buttonText: "Order now",
  },
  {
    imageUrl: "https://food-g-app.web.app/static/media/banner-nd.675b194a.jpg",
    heading1: "HAPPY YOUR SPECIAL",
    heading2: "Love at first",
    heading2Red: "bite",
    buttonText: "Order now",
  },
  {
    imageUrl: "https://food-g-app.web.app/static/media/banner-rd.5b0810a4.jpg",
    heading1: "GOOD FOOD IS GOOD MOOD",
    heading2: "The belly rules the",
    heading2Red: "mind",
    buttonText: "Order now",
  },
];
const Carousel = () => {
  const {
    amountProductsEachPageStateList,
    isDisplayLayerBlockStateList,
    dataList,
    isIntervalModeRef,
    listProductsWrapperRef,
    pageActiveStateList,
    realPageStateList,
    timeoutRef,
  } = useGenerateVariableCarousel(1, null, dataListRaw);

  const [amountProductsEachPage] = amountProductsEachPageStateList;
  const [realPage, setRealPage] = realPageStateList;
  const [pageActive, setPageActive] = pageActiveStateList;
  const [isDisplayLayerBlock, setIsDisplayLayerBlock] =
    isDisplayLayerBlockStateList;
  const carouselSlideListWrapperRef = listProductsWrapperRef;
  const isIntervalMode = isIntervalModeRef;
  const timeout = timeoutRef;

  const updatePageActive = (page, isAnimation) => {
    updatePageActiveSlide(
      carouselSlideListWrapperRef,
      page,
      isAnimation,
      timeout,
      setPageActive,
      setRealPage
    );
  };

  useSlideFeature(
    carouselSlideListWrapperRef,
    amountProductsEachPage,
    pageActive,
    setPageActive,
    setIsDisplayLayerBlock,
    dataListRaw.length,
    { arrayWidthCondition: null, setAmountProductsEachPage: null },
    { initIsIntervalModeRef: isIntervalMode, secondTimeInterval: 5 },
    timeout,
    setRealPage,
    realPage
  );
  console.log({realPage, pageActive});
  return (
    <div className="carousel-slide-list">
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
        className="carousel-slide-list-wrapper"
        ref={carouselSlideListWrapperRef}
      >
        {dataList.map(
          ({ imageUrl, heading1, heading2, heading2Red, buttonText }, key) => (
            <CarouselSlide
              key={key}
              imageUrl={imageUrl}
              heading1={heading1}
              heading2={heading2}
              heading2Red={heading2Red}
              buttonText={buttonText}
            />
          )
        )}
      </div>
      <PagesCarousel
        startPage={dataListRaw.length + amountProductsEachPage}
        realPage={realPage}
        amountProductsEachPage={amountProductsEachPage}
        lengthOfDataRawList={dataListRaw.length}
        updatePageActive={updatePageActive}
      />
    </div>
  );
};

export default Carousel;
