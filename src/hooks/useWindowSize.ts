import { useState, useLayoutEffect } from "react";

type BreakpointType = {
  minWidth: number;
  itemsToShow: number;
};

export const useWindowSize = (breakpoints: Array<BreakpointType>) => {
  const INITIAL_VALUE = () => 6;
  const [itemsNumber, setItemsNumber] = useState(INITIAL_VALUE);

  const updateSize = () => {
    breakpoints.map((breakp) =>
      setItemsNumber((prevState) =>
        breakp.minWidth >= window.innerWidth ? breakp.itemsToShow : prevState
      )
    );
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", updateSize);

    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return itemsNumber;
};
