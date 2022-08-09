import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { ImageItem } from "../../constants";

import "./styles.scss";

interface SliderProps {
  images?: ImageItem[];
}

type ButtonType = "prev" | "next";

export const Slider = ({ images }: SliderProps) => {
  const INITIAL_VALUE = () => 0;
  const [position, setPosition] = useState(INITIAL_VALUE);

  const PATHS_LENGTH = images?.length || 0;

  const handleSlide = (type?: ButtonType) => {
    setPosition((prevState) =>
      type === "prev" ? prevState - 1 : prevState + 1
    );
  };

  const handleIsDisabled = (type: ButtonType) => {
    if (type === "next") {
      const currentPosition = position + 1;
      return currentPosition === PATHS_LENGTH;
    }
    return position <= 0;
  };

  return (
    <div className="main">
      <button
        onClick={() => handleSlide("prev")}
        disabled={handleIsDisabled("prev")}
        className={`button ${handleIsDisabled("prev") && "invisible-button"}`}
      >
        <BsChevronLeft />
      </button>

      <div>
        {images && images?.[position] && <img src={images[position].url} />}
      </div>

      <button
        onClick={() => handleSlide("next")}
        disabled={handleIsDisabled("next")}
        className={`button ${handleIsDisabled("next") && "invisible-button"}`}
      >
        <BsChevronRight />
      </button>
    </div>
  );
};
