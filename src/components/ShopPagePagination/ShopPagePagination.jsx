import "./ShopPagePagination.css";
const ShopPagePagination = ({ maxPage, page, updatePage }) => {
  const pageList = Array.from(Array(maxPage).keys());
  if (maxPage <= 1) return null;
  return (
    <ul className="shop-page-pagination">
      <li
        style={{ cursor: page - 1 === 0 ? "not-allowed" : null }}
        onClick={() => {
          if (page - 1 > 0) updatePage(page - 1);
        }}
      >
        <i className="fas fa-chevron-left"></i>
      </li>
      {pageList.map((pageItem) => (
        <li
          key={pageItem}
          className={page === pageItem + 1 ? "active" : ""}
          onClick={() => {
            updatePage(pageItem + 1);
          }}
        >
          {pageItem + 1}
        </li>
      ))}
      <li
        style={{ cursor: page + 1 > maxPage ? "not-allowed" : null }}
        onClick={() => {
          if (page + 1 <= maxPage) updatePage(page + 1);
        }}
      >
        <i className="fas fa-chevron-right"></i>
      </li>
    </ul>
  );
};

export default ShopPagePagination;
