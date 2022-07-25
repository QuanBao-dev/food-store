import { useMemo } from "react";
import "./PagesCarousel.css";
const PagesCarousel = ({
  startPage,
  realPage,
  updatePageActive,
  lengthOfDataRawList,
}) => {
  const [internalPageActive, pages] = useMemo(() => {
    const pagesArray = Array.from(Array(lengthOfDataRawList).keys()).map(
      (value) => value + startPage
    );
    const endPage = pagesArray[lengthOfDataRawList - 1];
    let internalPageActive = realPage;
    if (startPage > realPage) {
      internalPageActive =
        pagesArray[lengthOfDataRawList - 1] -
        Math.abs(startPage - realPage) +
        1;
    }
    if (realPage > endPage) {
      internalPageActive = pagesArray[0] + Math.abs(endPage - realPage) - 1;
    }
    return [internalPageActive, pagesArray];
  }, [lengthOfDataRawList, realPage, startPage]);
  return (
    <div className="page-list-carousel">
      {pages.map((page) => (
        <div
          key={page}
          className={`page-item${page === internalPageActive ? " active" : ""}`}
          onClick={(e) => {
            if (!e.target.parentNode.className.includes("active"))
              updatePageActive(page, true);
          }}
        >
          <div></div>
        </div>
      ))}
    </div>
  );
};

export default PagesCarousel;
