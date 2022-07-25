import "./ShopProducts.css";

import { useEffect, useRef } from "react";
import { connect } from "react-redux";

import {
  listProductsShop,
  setRawListShop,
  startLoadingShop,
  stopLoadingShop,
  updateKeySearchShop,
  updatePageShop,
  updateSortModeShop,
} from "../../actions/shopProducts";
import { useFetchProductShop } from "../../hooks/useApiMethod";
import SelectSortMode from "../SelectSortMode/SelectSortMode";
import ShopInputSearch from "../ShopInputSearch/ShopInputSearch";
import ShopPagePagination from "../ShopPagePagination/ShopPagePagination";
import ShopProductList from "../ShopProductList/ShopProductList";
import ShopProductsLayoutOptions from "../ShopProductsLayoutOptions/ShopProductsLayoutOptions";

const ShopProducts = (
  {
    list,
    page,
    isLoading,
    sort,
    rawList,
    keySearch,
    popular,
    layout,
    price,
    rate,
    updateKeySearch,
    updateList,
    updatePage,
    setRawList,
    updateSortMode,
    startLoading,
    stopLoading,
  } = {
    ...mapStateToProps(),
    ...mapDispatchToProps(),
  }
) => {
  const containerProductsRef = useRef();
  let savedListRef = useRef([...rawList]);
  const updateListByConditions = (rawList) => {
    updateListBasedOnRawList(
      rawList,
      updateList,
      savedListRef,
      page,
      sort,
      price,
      rate,
      keySearch,
      popular
    );
  };

  useFetchProductShop(
    startLoading,
    stopLoading,
    setRawList,
    page,
    price,
    rate,
    keySearch,
    updateListByConditions,
    popular,
    containerProductsRef
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    updateListByConditions(rawList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort]);

  useEffect(() => {
    updateListByConditions(rawList);
    updatePage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price, rate, keySearch, popular]);

  return (
    <div className="container-products" ref={containerProductsRef}>
      <div className="container-shop-search">
        <ShopInputSearch
          keySearch={keySearch}
          updateKeySearch={updateKeySearch}
        />
        <div
          className="container-shop-sort"
        >
          <SelectSortMode updateSortMode={updateSortMode} />
          <ShopProductsLayoutOptions layout={layout} />
        </div>
      </div>

      <ShopProductList
        list={isLoading ? Array.from(Array(16).keys()) : list}
        layout={layout}
        isLoading={isLoading}
      />

      <ShopPagePagination
        updatePage={updatePage}
        page={page}
        maxPage={Math.ceil(savedListRef.current.length / 16)}
        containerRef={containerProductsRef}
      />
    </div>
  );
};

const updateListBasedOnRawList = (
  rawList,
  updateList,
  savedListRef,
  page,
  sort,
  price,
  rate,
  keySearch,
  popular
) => {
  savedListRef.current = [...rawList];
  if (
    sort === "0" &&
    price === "" &&
    keySearch === "" &&
    rate === "" &&
    popular === ""
  ) {
    updateList(rawList.slice((page - 1) * 16, page * 16));
  }

  if (price !== "") {
    updateListByPriceMode(price, savedListRef);
  }

  if (keySearch !== "") {
    updateListByKeySearch(keySearch, savedListRef);
  }

  if (sort !== "0") {
    updateListBySortMode(sort, savedListRef);
  }

  if (rate !== "") {
    updateListByRateMode(rate, savedListRef);
  }

  if (popular !== "") {
    updateListByPopularMode(popular, savedListRef);
  }

  updateList(savedListRef.current.slice((page - 1) * 16, page * 16));
};

const updateListByPopularMode = (popular, savedListRef) => {
  const listPopularOptions = ["burger", "bread", "sandwich", "drink", "pizza"];
  savedListRef.current = savedListRef.current.filter(
    ({ tags }) => tags && tags.includes(listPopularOptions[parseInt(popular)])
  );
};

const updateListByRateMode = (rate, savedListRef) => {
  switch (rate) {
    case "0":
      savedListRef.current = savedListRef.current.filter(
        ({ rate }) => parseInt(rate) >= 5
      );
      return;
    case "1":
      savedListRef.current = savedListRef.current.filter(
        ({ rate }) => parseInt(rate) >= 4
      );
      return;
    case "2":
      savedListRef.current = savedListRef.current.filter(
        ({ rate }) => parseInt(rate) >= 3
      );
      return;
    default:
      return;
  }
};

const updateListBySortMode = (sort, savedListRef) => {
  switch (sort) {
    case "1":
      savedListRef.current = savedListRef.current.sort(
        (a, b) =>
          parseInt(a.price.replace("$", "")) -
          parseInt(b.price.replace("$", ""))
      );
      return;
    case "2":
      savedListRef.current = savedListRef.current.sort(
        (a, b) =>
          -parseInt(a.price.replace("$", "")) +
          parseInt(b.price.replace("$", ""))
      );
      return;
    case "3":
      savedListRef.current = savedListRef.current.sort(
        (a, b) => parseInt(a.rate) - parseInt(b.rate)
      );
      return;
    case "4":
      savedListRef.current = savedListRef.current.sort(
        (a, b) => -parseInt(a.rate) + parseInt(b.rate)
      );
      return;
    default:
      return;
  }
};

const updateListByPriceMode = (price, savedListRef) => {
  switch (price) {
    case "0":
      savedListRef.current = savedListRef.current.filter(
        ({ price }) => parseInt(price.replace("$", "")) <= 100
      );
      return;
    case "1":
      savedListRef.current = savedListRef.current.filter(
        ({ price }) =>
          parseInt(price.replace("$", "")) <= 100 &&
          parseInt(price.replace("$", "")) >= 50
      );
      return;
    case "2":
      savedListRef.current = savedListRef.current.filter(
        ({ price }) => parseInt(price.replace("$", "")) <= 50
      );
      return;
    case "3":
      savedListRef.current = savedListRef.current.filter(
        ({ price }) => parseInt(price.replace("$", "")) >= 100
      );
      return;
    default:
      return;
  }
};

const updateListByKeySearch = (keySearch, savedListRef) => {
  savedListRef.current = savedListRef.current.filter(({ title }) =>
    title.match(new RegExp(keySearch, "i"))
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.productsShop.list,
    page: state.productsShop.page,
    isLoading: state.productsShop.isLoading,
    sort: state.productsShop.sort,
    rawList: state.productsShop.rawList,
    keySearch: state.productsShop.keySearch,
    price: state.productsShop.price,
    rate: state.productsShop.rate,
    popular: state.productsShop.popular,
    layout: state.productsShop.layout,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateList: (data = []) => dispatch(listProductsShop(data)),
    updateSortMode: (sortMode) => dispatch(updateSortModeShop(sortMode)),
    updateKeySearch: (keySearch) => dispatch(updateKeySearchShop(keySearch)),
    updatePage: (page) => dispatch(updatePageShop(page)),
    setRawList: (rawList = []) => dispatch(setRawListShop(rawList)),
    startLoading: () => dispatch(startLoadingShop()),
    stopLoading: () => dispatch(stopLoadingShop()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopProducts);
