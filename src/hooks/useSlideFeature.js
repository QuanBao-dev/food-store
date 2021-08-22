import { useEffect, useMemo, useRef, useState } from "react";
import { filter, fromEvent, interval, tap, withLatestFrom } from "rxjs";

import { mobileAndTabletCheck } from "../util/checkMobileDevice";

export const updatePageActiveSlide = (
  sliderContainerRef,
  page,
  isAnimation,
  timeoutRef,
  setPageActive,
  setRealPage
) => {
  if (timeoutRef.current) clearTimeout(timeoutRef.current);
  if (sliderContainerRef.current) {
    if (isAnimation) sliderContainerRef.current.style.transition = "0.5s";
    else sliderContainerRef.current.style.transition = "0s";
    setPageActive(page);
    if (setRealPage) setRealPage(page);
  }
};
export const useSlideFeature = (
  sliderWrapperRef,
  amountProductsEachPage,
  pageActive,
  setPageActive,
  setIsDisplayLayerBlock,
  lengthOfDataRawList,
  { arrayWidthCondition, setAmountProductsEachPage },
  { initIsIntervalModeRef, secondTimeInterval },
  timeoutRef,
  setRealPage,
  realPage
) => {
  const [isMobile, setIsMobile] = useState();
  const [widthEachItem, setWidthEachItem] = useState();
  const isMouseDown = useRef();
  const posX1 = useRef(0);
  const posX2 = useRef(0);
  const delta = useRef(0);
  const isIntervalMode = useRef(initIsIntervalModeRef.current);

  useEffect(() => {
    sliderWrapperRef.current.style.transform = `translateX(${
      widthEachItem * (amountProductsEachPage - pageActive)
    }px)`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amountProductsEachPage, pageActive, widthEachItem]);
  useAutoSlideCarousel(
    secondTimeInterval,
    isIntervalMode,
    realPage,
    setPageActive,
    amountProductsEachPage,
    sliderWrapperRef,
    lengthOfDataRawList,
    timeoutRef,
    setRealPage,
    pageActive
  );

  useResizeSlideOnResize(
    sliderWrapperRef,
    amountProductsEachPage,
    setWidthEachItem,
    setIsMobile,
    arrayWidthCondition,
    setAmountProductsEachPage,
    realPage,
    timeoutRef,
    setPageActive,
    setRealPage
  );

  useMouseDownSlide(
    sliderWrapperRef,
    isMouseDown,
    isMobile,
    setIsDisplayLayerBlock,
    isIntervalMode,
    timeoutRef
  );
  useMouseUpSlide(
    sliderWrapperRef,
    posX1,
    posX2,
    delta,
    isMouseDown,
    widthEachItem,
    pageActive,
    setPageActive,
    isMobile,
    amountProductsEachPage,
    setIsDisplayLayerBlock,
    isIntervalMode,
    initIsIntervalModeRef,
    lengthOfDataRawList,
    setRealPage,
    realPage
  );
  useMouseMoveSlide(
    sliderWrapperRef,
    posX1,
    posX2,
    delta,
    isMouseDown,
    widthEachItem,
    pageActive,
    isMobile,
    amountProductsEachPage,
    lengthOfDataRawList
  );
};

const useResizeSlideOnResize = (
  sliderContainerRef,
  amountSlideItemEachPage,
  setWidthSlideItem,
  setIsMobile,
  arrayWidthCondition,
  setAmountSlideItemEachPage,
  page,
  timeoutRef,
  setPageActive,
  setRealPage
) => {
  useEffect(() => {
    const widthSlideItem =
      sliderContainerRef.current.offsetWidth / amountSlideItemEachPage;
    setWidthSlideItem(widthSlideItem);
    setIsMobile(mobileAndTabletCheck());
    const subscription = fromEvent(window, "resize").subscribe(() => {
      const widthSlideItem =
        sliderContainerRef.current.offsetWidth / amountSlideItemEachPage;
      setWidthSlideItem(widthSlideItem);
      updatePageActiveSlide(
        sliderContainerRef,
        page,
        false,
        timeoutRef,
        setPageActive,
        setRealPage
      );
      setIsMobile(mobileAndTabletCheck());
      if (arrayWidthCondition)
        arrayWidthCondition.forEach(({ minWidth, maxWidth, amount }) => {
          if (window.innerWidth > minWidth && window.innerWidth <= maxWidth) {
            setAmountSlideItemEachPage(amount);
          }
        });
    });
    return () => {
      subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amountSlideItemEachPage]);
};

export const useAutoSlideCarousel = (
  timeInterval,
  isIntervalMode,
  realPage,
  setPageActive,
  amountProductsEachPage,
  carouselFoodCategoryWrapperRef,
  dataListRawLength,
  timeoutRef,
  setRealPage,
  pageActive
) => {
  useEffect(() => {
    const subscription = interval(timeInterval * 1000)
      .pipe(
        filter(() => isIntervalMode.current),
        withLatestFrom(
          interval(500).pipe(
            tap(() => {
              if (Math.abs(realPage - pageActive) === dataListRawLength) {
                updatePageActiveSlide(
                  carouselFoodCategoryWrapperRef,
                  realPage,
                  false,
                  timeoutRef,
                  setPageActive,
                  setRealPage
                );
              }
            })
          )
        ),
        tap(() => {
          handleClickGoForwardPageIntervalCarousel(
            realPage,
            amountProductsEachPage,
            dataListRawLength,
            timeoutRef,
            carouselFoodCategoryWrapperRef,
            setPageActive,
            setRealPage,
            pageActive
          );
        })
      )
      .subscribe(() => {});
    return () => {
      subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageActive, realPage, amountProductsEachPage, timeInterval]);
};

const useMouseDownSlide = (
  sliderContainerRef,
  isMouseDown,
  isMobile,
  setIsDisplayLayerBlock,
  isIntervalMode,
  timeoutRef
) => {
  useEffect(() => {
    const subscription = fromEvent(
      sliderContainerRef.current,
      isMobile ? "touchstart" : "mousedown"
    ).subscribe((e) => {
      clearTimeout(timeoutRef.current);
      if (!isMobile) e.preventDefault();
      if (isIntervalMode) isIntervalMode.current = false;
      sliderContainerRef.current.style.cursor = "grabbing";
      isMouseDown.current = true;
      if (setIsDisplayLayerBlock) setIsDisplayLayerBlock(true);
    });
    return () => {
      subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);
};

const useMouseUpSlide = (
  sliderContainerRef,
  posX1,
  posX2,
  delta,
  isMouseDown,
  widthEachItem,
  pageActive,
  setPageActive,
  isMobile,
  amountElementPerPage,
  setIsDisplayLayerBlock,
  isIntervalMode,
  initIsIntervalMode,
  lengthOfDataRawList,
  setRealPage,
  realPage
) => {
  useEffect(() => {
    const subscription = fromEvent(window, isMobile ? "touchend" : "mouseup")
      .pipe(filter(() => isMouseDown.current))
      .subscribe(() => {
        if (isIntervalMode && initIsIntervalMode.current === true)
          isIntervalMode.current = true;
        if (setIsDisplayLayerBlock) setIsDisplayLayerBlock(false);
        const currentOffsetLeft = extractTranslateX(
          sliderContainerRef.current.style.transform
        );
        sliderContainerRef.current.style.transition = "0.5s";
        let newPage =
          parseInt(Math.abs(currentOffsetLeft) / widthEachItem) +
          amountElementPerPage;

        if (Math.abs(posX2.current) < 5) {
          const checkNewPage =
            Math.round(Math.abs(currentOffsetLeft) / widthEachItem) +
            amountElementPerPage;
          newPage = checkNewPage;
        }

        if (Math.abs(posX2.current) > 5) {
          if (posX2.current > 0) {
            newPage += 1;
          }
        }

        if (newPage === pageActive) {
          sliderContainerRef.current.style.transform = `translateX(${
            (amountElementPerPage - pageActive) * widthEachItem
          }px)`;
        } else {
          setPageActive(newPage);
        }
        if (realPage && setRealPage) {
          const startPage = lengthOfDataRawList + amountElementPerPage;
          const endPage = startPage + lengthOfDataRawList - 1;
          let realPageBonus = newPage - pageActive;

          if (
            realPage + realPageBonus >= startPage &&
            realPage + realPageBonus <= endPage
          ) {
            setRealPage(realPage + realPageBonus);
          }

          if (realPage + realPageBonus < startPage) {
            setRealPage(endPage + (realPage + realPageBonus - startPage + 1));
          }

          if (realPage + realPageBonus > endPage) {
            setRealPage(startPage + (realPage + realPageBonus - endPage - 1));
          }
        }

        sliderContainerRef.current.style.cursor = "grab";
        posX1.current = 0;
        posX2.current = 0;
        delta.current = 0;
        isMouseDown.current = false;
      });
    return () => {
      subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [realPage, pageActive, widthEachItem, isMobile, lengthOfDataRawList]);
};
const useMouseMoveSlide = (
  sliderContainerRef,
  posX1,
  posX2,
  delta,
  isMouseDown,
  widthEachItem,
  pageActive,
  isMobile,
  amountElementPerPage,
  dataRawListLength
) => {
  useEffect(() => {
    const subscription = fromEvent(window, isMobile ? "touchmove" : "mousemove")
      .pipe(filter(() => isMouseDown.current))
      .subscribe((e) => {
        const currentOffsetLeft =
          (amountElementPerPage - pageActive) * widthEachItem;
        if (!isMobile) posX2.current = posX1.current - e.clientX;
        else posX2.current = posX1.current - e.touches[0].clientX;
        if (posX1.current !== 0) {
          delta.current -= posX2.current;
          sliderContainerRef.current.style.transition = "0s";
          const newPageEstimated = definedNewPage(
            currentOffsetLeft + delta.current,
            widthEachItem,
            amountElementPerPage
          );
          const pageEstimatedDownLimit =
            dataRawListLength + amountElementPerPage;
          const pageEstimatedUpLimit =
            pageEstimatedDownLimit +
            dataRawListLength -
            (amountElementPerPage - 2);
          // console.log({
          //   pageActive,
          //   dataRawListLength,
          //   newPageEstimated,
          //   widthEachItem,
          //   amountElementPerPage,
          //   pageEstimatedUpLimit,
          //   pageEstimatedDownLimit,
          // });

          if (
            newPageEstimated >= pageEstimatedDownLimit &&
            newPageEstimated <= pageEstimatedUpLimit
          )
            sliderContainerRef.current.style.transform = `translateX(${
              currentOffsetLeft + delta.current
            }px)`;
          if (newPageEstimated <= pageEstimatedDownLimit) {
            sliderContainerRef.current.style.transform = `translateX(${
              currentOffsetLeft +
              delta.current -
              widthEachItem * dataRawListLength
            }px)`;
          }

          if (newPageEstimated >= pageEstimatedUpLimit) {
            sliderContainerRef.current.style.transform = `translateX(${
              currentOffsetLeft +
              delta.current +
              widthEachItem * dataRawListLength
            }px)`;
          }
        }
        if (!isMobile) posX1.current = e.clientX;
        else posX1.current = e.touches[0].clientX;
      });
    return () => {
      subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageActive, widthEachItem, isMobile, amountElementPerPage]);
};

function definedNewPage(
  currentOffsetLeft,
  widthEachItem,
  amountElementPerPage
) {
  let newPage =
    Math.round(Math.abs(currentOffsetLeft) / widthEachItem) +
    amountElementPerPage;
  return newPage;
}

function extractTranslateX(stringTransform) {
  return parseFloat(
    stringTransform.replace("translateX(", "").replace("px)", "")
  );
}

export function createNewArray(array) {
  return [...array, ...array, ...array, ...array.slice(0, 2)];
}

export function useGenerateVariableCarousel(
  amountProductsPerPage,
  isInterval,
  dataListRaw
) {
  const listProductsWrapperRef = useRef();
  const [amountProductsEachPage, setAmountProductsEachPage] = useState(
    amountProductsPerPage
  );
  const [realPage, setRealPage] = useState(
    dataListRaw.length + amountProductsEachPage
  );
  const [pageActive, setPageActive] = useState(
    dataListRaw.length + amountProductsEachPage
  );
  const [isDisplayLayerBlock, setIsDisplayLayerBlock] = useState();
  const isIntervalModeRef = useRef(isInterval);
  const timeoutRef = useRef();
  const dataList = useMemo(() => {
    return createNewArray(dataListRaw);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    listProductsWrapperRef,
    amountProductsEachPageStateList: [
      amountProductsEachPage,
      setAmountProductsEachPage,
    ],
    realPageStateList: [realPage, setRealPage],
    pageActiveStateList: [pageActive, setPageActive],
    isDisplayLayerBlockStateList: [isDisplayLayerBlock, setIsDisplayLayerBlock],
    isIntervalModeRef,
    timeoutRef,
    dataList,
  };
}

export function handleClickGoForwardPage(
  pageActive,
  amountProductsEachPage,
  dataListRawLength,
  timeout,
  sliderContainerRef,
  setPageActive,
  setRealPage
) {
  return () => {
    const startPage = dataListRawLength + amountProductsEachPage;
    const endPage = startPage + dataListRawLength - 1;
    if (pageActive <= endPage) {
      updatePageActiveSlide(
        sliderContainerRef,
        pageActive + 1,
        true,
        timeout,
        setPageActive,
        setRealPage
      );
    }
    if (pageActive + 1 > endPage) {
      timeout.current = setTimeout(() => {
        if (timeout.current) {
          updatePageActiveSlide(
            sliderContainerRef,
            pageActive - (dataListRawLength - 1),
            false,
            timeout,
            setPageActive,
            setRealPage
          );
          timeout.current = null;
        }
      }, 500);
    }
  };
}
function handleClickGoForwardPageIntervalCarousel(
  realPage,
  amountProductsEachPage,
  dataListRawLength,
  timeout,
  sliderContainerRef,
  setPageActive,
  setRealPage
) {
  const startPage = dataListRawLength + amountProductsEachPage;
  const endPage = startPage + dataListRawLength - 1;
  if (realPage < endPage) {
    updatePageActiveSlide(
      sliderContainerRef,
      realPage + 1,
      true,
      timeout,
      setPageActive,
      setRealPage
    );
  }
  if (realPage + 1 > endPage) {
    updatePageActiveSlide(
      sliderContainerRef,
      realPage + 1,
      true,
      timeout,
      setPageActive,
      setRealPage
    );
    timeout.current = setTimeout(() => {
      if (timeout.current) {
        updatePageActiveSlide(
          sliderContainerRef,
          startPage,
          false,
          timeout,
          setPageActive,
          setRealPage
        );
        timeout.current = null;
      }
    }, 500);
  }
}

export function handleClickGoBackPage(
  pageActive,
  amountProductsEachPage,
  dataListRawLength,
  timeout,
  sliderContainerRef,
  setPageActive,
  setRealPage
) {
  return () => {
    const startPage = dataListRawLength + amountProductsEachPage;
    if (pageActive >= startPage) {
      updatePageActiveSlide(
        sliderContainerRef,
        pageActive - 1,
        true,
        timeout,
        setPageActive,
        setRealPage
      );
    }
    if (pageActive - 1 < startPage) {
      timeout.current = setTimeout(() => {
        if (timeout.current) {
          updatePageActiveSlide(
            sliderContainerRef,
            pageActive + dataListRawLength - 1,
            false,
            timeout,
            setPageActive,
            setRealPage
          );
          timeout.current = null;
        }
      }, 500);
    }
  };
}
