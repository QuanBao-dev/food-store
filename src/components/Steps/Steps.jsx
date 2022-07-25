import "./Steps.css";

import { useEffect, useState } from "react";
import { fromEvent } from "rxjs";

import StepItem from "../StepItem/StepItem";

const dataStep = [
  {
    isArrow: false,
    imageSrc: "https://food-g-app.web.app/static/media/step-1.7975394a.jpg",
    numberStep: "01 step",
    titleStep: "Choose Your Favorite",
    key: 0,
  },
  {
    isArrow: true,
    imageSrc: "https://food-g-app.web.app/static/media/arrow-1.e50b7ddf.png",
    key: 1,
  },
  {
    isArrow: false,
    imageSrc: "https://food-g-app.web.app/static/media/step-2.0d5ff727.jpg",
    numberStep: "02 step",
    titleStep: "We Deliver Your Meals",
    key: 2,
  },
  {
    isArrow: true,
    imageSrc: "https://food-g-app.web.app/static/media/arrow-2.7a8b4722.png",
    key: 3,
  },
  {
    isArrow: false,
    imageSrc: "https://food-g-app.web.app/static/media/step-3.070bae01.jpg",
    numberStep: "03 step",
    titleStep: "Cash on Delivery",
    key: 4,
  },
  {
    isArrow: true,
    imageSrc: "https://food-g-app.web.app/static/media/arrow-3.efc3debf.png",
    key: 5,
  },
  {
    isArrow: false,
    imageSrc: "https://food-g-app.web.app/static/media/step-4.d6316948.jpg",
    numberStep: "04 step",
    titleStep: "Eat And Enjoy",
    key: 6,
  },
];
const Steps = () => {
  const [isCircle, setIsCircle] = useState(false);
  useEffect(() => {
    if (window.screen.availWidth > 517 && window.screen.availWidth < 1100) {
      if (!isCircle) setIsCircle(true);
    } else {
      if (isCircle) setIsCircle(false);
    }
    const subscription = fromEvent(window, "resize").subscribe(() => {
      if (window.screen.availWidth > 517 && window.screen.availWidth < 1100) {
        if (!isCircle) setIsCircle(true);
      } else {
        if (isCircle) setIsCircle(false);
      }
    });
    return () => {
      subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCircle]);
  return (
    <div className="steps-container">
      <div className="heading-title-1">Order now!</div>
      <h1 className="heading-title-2">How it works</h1>
      <div
        className="steps-wrapper-circle"
        style={{
          display: isCircle ? "block" : "none",
        }}
      >
        <ul className="steps-list-container">
          {dataStep
            .slice(0, 3)
            .map(({ isArrow, imageSrc, numberStep, titleStep, key }) => (
              <StepItem
                key={key}
                isArrow={isArrow}
                imageSrc={imageSrc}
                numberStep={numberStep}
                titleStep={titleStep}
                indexStep={key}
              />
            ))}
        </ul>
        <ul className="steps-arrow-down">
          <StepItem
            isArrow={dataStep[3].isArrow}
            imageSrc={dataStep[3].imageSrc}
            numberStep={dataStep[3].numberStep}
            titleStep={dataStep[3].titleStep}
            indexStep={3}
          />
        </ul>
        <ul className="steps-list-container">
          {dataStep
            .slice(4, 7)
            .reverse()
            .map(({ isArrow, imageSrc, numberStep, titleStep, key }) => (
              <StepItem
                key={key}
                isArrow={isArrow}
                imageSrc={imageSrc}
                numberStep={numberStep}
                titleStep={titleStep}
                indexStep={key}
              />
            ))}
        </ul>
      </div>

      <ul
        className="steps-wrapper"
        style={{
          display: !isCircle ? "flex" : "none",
        }}
      >
        {dataStep.map(({ isArrow, imageSrc, numberStep, titleStep, key }) => (
          <StepItem
            key={key}
            isArrow={isArrow}
            imageSrc={imageSrc}
            numberStep={numberStep}
            titleStep={titleStep}
            indexStep={key}
          />
        ))}
      </ul>
    </div>
  );
};

export default Steps;
