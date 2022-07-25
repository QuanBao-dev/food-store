import "./ZoomingImage.css";

import React, { useEffect, useRef, useState } from "react";
import { fromEvent } from "rxjs";
const ZoomingImage = ({
  src,
  width,
  height,
  ratio = 3,
  responsiveConditions,
}) => {
  const [widthState, setWidthState] = useState(width);
  const [heightState, setHeightState] = useState(height);
  const zoomSquareRef = useRef();
  const zoomInImageRef = useRef();
  const zoomInWindowRef = useRef();
  const containerImageProductRef = useRef();
  const widthSquare = widthState / ratio;
  const heightSquare = heightState / ratio;
  useEffect(() => {
    const subscription = fromEvent(window, "resize").subscribe(() => {
      responsiveConditions.forEach((condition) => {
        const { minWidth, maxWidth, height, width } = condition;
        if (window.innerWidth < maxWidth && window.innerWidth >= minWidth) {
          setWidthState(width);
          setHeightState(height);
        }
      });
    });
    return () => {
      subscription.unsubscribe();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    zoomInImageRef.current.style.width = `${
      containerImageProductRef.current.offsetWidth * ratio
    }px`;
  }, [ratio]);
  useEffect(() => {
    const subscription = fromEvent(window, "resize").subscribe(() => {
      zoomInImageRef.current.style.width = `${
        containerImageProductRef.current.offsetWidth * ratio
      }px`;
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [ratio]);
  return (
    <div
      style={{
        width: widthState,
        height: heightState,
        minWidth: widthState,
        minHeight: heightState,
      }}
    >
      <div className="container-image-product" ref={containerImageProductRef}>
        <div
          className="container-image-wrapper"
          onMouseEnter={() => {
            zoomSquareRef.current.style.opacity = "1";
            zoomInWindowRef.current.style.opacity = "1";
            zoomInWindowRef.current.style.width = `${widthSquare * ratio}px`;
            zoomInWindowRef.current.style.height = `${heightSquare * ratio}px`;
            zoomInWindowRef.current.style.zIndex = 10;
          }}
          onMouseMove={(e) => {
            const adjustOriginY =
              containerImageProductRef.current.offsetTop + heightSquare / 2;
            const adjustOriginX =
              containerImageProductRef.current.offsetLeft + widthSquare / 2;
            const left = e.pageX - adjustOriginX;
            const top = e.pageY - adjustOriginY;
            if (
              left >= 0 &&
              left < containerImageProductRef.current.offsetWidth - widthSquare
            ) {
              zoomSquareRef.current.style.left = `${left}px`;
              zoomInImageRef.current.style.left = `${-left * ratio}px`;
            }

            if (left < 0) {
              zoomSquareRef.current.style.left = `${0}px`;
              zoomInImageRef.current.style.left = `${0}px`;
            }

            if (
              left >=
              containerImageProductRef.current.offsetWidth - widthSquare - 2
            )
              zoomSquareRef.current.style.left = `${
                containerImageProductRef.current.offsetWidth - widthSquare - 2
              }px`;

            if (
              top >= 0 &&
              top < containerImageProductRef.current.offsetHeight - heightSquare
            ) {
              zoomSquareRef.current.style.top = `${top}px`;
              zoomInImageRef.current.style.top = `${-top * ratio}px`;
            }

            if (top < 0) {
              zoomSquareRef.current.style.top = `${0}px`;
              zoomInImageRef.current.style.top = `${0}px`;
            }

            if (
              top >=
              containerImageProductRef.current.offsetHeight - heightSquare -0.5
            )
              zoomSquareRef.current.style.top = `${
                containerImageProductRef.current.offsetHeight - heightSquare - 0.5
              }px`;
          }}
          onMouseLeave={() => {
            zoomSquareRef.current.style.opacity = "0";
            zoomInWindowRef.current.style.opacity = "0";
            zoomInWindowRef.current.style.zIndex = -1;
          }}
        >
          <img src={src} alt="" />
          <span
            ref={zoomSquareRef}
            style={{
              width: widthSquare,
              height: heightSquare,
              borderRadius: "15px",
            }}
          ></span>
        </div>
        <div className="zoom-in-window" ref={zoomInWindowRef}>
          <div style={{ position: "relative" }}>
            <img src={src} alt="" ref={zoomInImageRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoomingImage;
