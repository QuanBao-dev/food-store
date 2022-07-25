import { useRef } from "react";
import { useViewportAnimationDisplay } from "../../hooks/useViewportAnimationDisplay";
import StatisticItem from "../../StatisticItem/StatisticItem";
import "./Statistic.css";
const dataProductsStatistic = [
  {
    name: "Cups of Coffee",
    amount: 350,
    isLarger: true,
  },
  {
    name: "Orders Everyday",
    amount: 2678,
    isLarger: true,
  },
  {
    name: "Skill Professionals",
    amount: 60,
  },
  {
    name: "Sandwich at Hour",
    amount: 30,
  },
];
const Statistic = () => {
  const statisticContainerRef = useRef();
  useViewportAnimationDisplay(
    statisticContainerRef,
    0.5,
    {
      transform: "translateY(20px)",
      opacity: 0,
    },
    {
      opacity: 1,
      transform: "translateY(0)",
    },
    0
  );
  return (
    <div className="statistic-container" ref={statisticContainerRef}>
      <div className="statistic-wrapper">
        {dataProductsStatistic.map(({ name, amount, isLarger }, key) => (
          <StatisticItem
            key={key}
            name={name}
            amount={amount}
            isLarger={isLarger}
          />
        ))}
      </div>
    </div>
  );
};

export default Statistic;
