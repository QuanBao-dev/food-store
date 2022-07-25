import { useEffect, useRef, useState } from "react";
import { fromEvent, interval, takeWhile } from "rxjs";
import "./StatisticItem.css";
const StatisticItem = ({ amount, isLarger, name }) => {
  const statisticItemRef = useRef();
  const [isStartCounting, setIsStartCounting] = useState(false);
  const [countState, setCountState] = useState(0);
  useEffect(() => {
    const subscription = fromEvent(window,"scroll").subscribe(() => {
      if(!statisticItemRef.current) return;
      const { y, height } = statisticItemRef.current.getBoundingClientRect();
      if(y - window.innerHeight + height < 0){
        setIsStartCounting(true)
        subscription.unsubscribe();
      }
    })
    return () => {
      subscription.unsubscribe();
    }
  },[])
  useEffect(() => {
    const subscription = interval(50)
      .pipe(takeWhile(() => (countState <= amount && isStartCounting)))
      .subscribe(() => {
        let stepCount = 10;
        if(amount < 100){
          stepCount = 2;
        }
        if (amount > 2000) {
          stepCount = 52;
        }
        if (countState + stepCount > amount) {
          setCountState(amount);
        } else {
          setCountState(countState + stepCount);
        }
      });
    return () => {
      subscription.unsubscribe();
    };
  }, [amount, countState, isStartCounting]);
  return (
    <div className="statistic-item-container">
      <div ref={statisticItemRef}>
        {parsePrice(countState.toString())}
        {isLarger ? "+" : ""}
      </div>
      <div>{name}</div>
    </div>
  );
};

export default StatisticItem;
function parsePrice(priceString) {
  priceString = parseFloat(priceString).toString();
  let ans = "";
  if (priceString.length < 3) {
    return priceString;
  }
  while (priceString.length > 0) {
    if (priceString.length >= 3) {
      ans =
        (priceString.length > 3 ? "," : "") +
        priceString.slice(priceString.length - 3, priceString) +
        ans;
      priceString = priceString.slice(0, priceString.length - 3);
    } else {
      ans = priceString + ans;
      break;
    }
  }
  return ans;
}
