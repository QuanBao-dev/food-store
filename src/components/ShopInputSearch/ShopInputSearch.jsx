import { useEffect, useRef } from "react";
import { fromEvent } from "rxjs";
import "./ShopInputSearch.css";
const ShopInputSearch = ({keySearch, updateKeySearch}) => {
  const inputRef = useRef();
  useEffect(() => {
    const subscription = fromEvent(inputRef.current,"input").subscribe(() => {
      updateKeySearch(inputRef.current.value)
    });
    return () => {
      subscription.unsubscribe();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <input
      ref={inputRef}
      defaultValue={keySearch}
      className="input-search-shop"
      type="text"
      placeholder={"Search your product"}
    />
  );
};

export default ShopInputSearch;
