import { useEffect } from "react";
import { fromEvent, tap } from "rxjs";

export const useContainerResponsive = (containerRef) => {
  useEffect(() => {
    const subscription = fromEvent(window, "resize")
      .pipe(
        tap(() => {
          if (window.screen.availWidth < 805) {
            containerRef.current.style.width = "100%";
          } else {
            containerRef.current.style.width = "74%";
          }
        })
      )
      .subscribe(() => {});
    return () => {
      subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
