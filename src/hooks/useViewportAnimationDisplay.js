import { useEffect } from "react";
import { fromEvent } from "rxjs";

export const useViewportAnimationDisplay = (
  elementRef,
  transition,
  from,
  to,
  delay
) => {
  useEffect(() => {
    // if (!elementRef.current) return;
    elementRef.current.style.transition = "0s";
    Object.keys(from).forEach((key) => {
      elementRef.current.style[key] = from[key];
    });
    const subscription = fromEvent(window, "scroll").subscribe(() => {
      if(!elementRef.current) return;
      const { y, height } = elementRef.current.getBoundingClientRect();
      if (y - window.innerHeight + height < 60) {
        elementRef.current.style.transition = transition + "s";
        if (delay !== undefined && delay !== null)
          elementRef.current.style.transitionDelay = delay + "s";
        Object.keys(to).forEach((key) => {
          elementRef.current.style[key] = to[key];
        });
        subscription.unsubscribe();
      }
    });
    return () => {
      subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay, transition]);
};
