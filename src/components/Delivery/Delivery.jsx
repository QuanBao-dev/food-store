import "./Delivery.css";

import { useRef } from "react";

import { useContainerResponsive } from "../../hooks/useContainerResponsive";
import { useViewportAnimationDisplay } from "../../hooks/useViewportAnimationDisplay";
import { useHistory } from "react-router-dom";

const Delivery = () => {
  const deliveryContainerRef = useRef();
  const heading2Ref = useRef();
  const descriptionDeliveryRef = useRef();
  const deliverOrderNumRef = useRef();
  const buttonOrderRef = useRef();
  const imageOrderRef = useRef();
  const deliveryRightSectionRef = useRef();
  const history = useHistory();
  useContainerResponsive(deliveryContainerRef);

  useViewportAnimationDisplay(
    heading2Ref,
    1,
    {
      opacity: 0,
      transform: "translateX(-100%)",
    },
    {
      opacity: 1,
      transform: "translateX(0)",
    },
    0
  );

  useViewportAnimationDisplay(
    descriptionDeliveryRef,
    1,
    {
      opacity: 0,
      display: "block",
      transform: "translateY(40px)",
    },
    {
      opacity: 1,
      transform: "translateY(0)",
    },
    1
  );

  useViewportAnimationDisplay(
    imageOrderRef,
    0.5,
    {
      opacity: 0,
    },
    {
      opacity: 1,
    },
    1.5
  );

  useViewportAnimationDisplay(
    deliverOrderNumRef,
    0.5,
    {
      opacity: 0,
      transform: "translateY(50px)",
    },
    {
      opacity: 1,
      transform: "translateY(0)",
    },
    2
  );

  useViewportAnimationDisplay(
    buttonOrderRef,
    0.5,
    {
      opacity: 0,
    },
    {
      opacity: 1,
    },
    2.5
  );

  useViewportAnimationDisplay(
    deliveryRightSectionRef,
    1,
    {
      opacity: 0,
      transform: "translateX(200px)",
    },
    {
      opacity: 1,
      transform: "translateX(0)",
    },
    0
  );
  return (
    <div className="delivery-container" ref={deliveryContainerRef}>
      <div className="delivery-left-section">
        <div className="heading-1">Delivery</div>
        <h1 className="heading-2" ref={heading2Ref}>
          A Moments Of Delivered{" "}
          <span className="high-light">On Right Time & Place</span>
        </h1>
        <p className="description-delivery" ref={descriptionDeliveryRef}>
          Food G is a restaurant, bar and coffee roastery located on a busy
          corner site in Farringdon's Exmouth Market. With glazed frontage on
          two sides of the building, overlooking the market and a bustling
          London inteon.
        </p>
        <div className="deliver-order-container">
          <img
            ref={imageOrderRef}
            src={
              "https://food-g-app.web.app/static/media/small-delivery.5b86892b.svg"
            }
            alt=""
          />
          <div ref={deliverOrderNumRef}>
            <div>Delivery Order Num</div>
            <div className="phone-number">123-59794069</div>
          </div>
          <button
            className="button-order"
            ref={buttonOrderRef}
            onClick={() => {
              history.push("/shop");
            }}
          >
            ORDER NOW
          </button>
        </div>
      </div>
      <div className="delivery-right-section" ref={deliveryRightSectionRef}>
        <img
          src="https://food-g-app.web.app/static/media/big-delivery.e0228901.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Delivery;
