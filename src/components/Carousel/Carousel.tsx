import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Carousel as RRCarousel } from "react-responsive-carousel";

import { ImageItem } from "../../constants";

import "./styles.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface CarouselProps {
  images: ImageItem[];
}

export const Carousel = ({ images }: CarouselProps) => {
  const renderPrevArrow = (clickHandler: () => void, hasPrev: boolean) => {
    return (
      <button
        disabled={!hasPrev}
        onClick={clickHandler}
        className="prev-button"
      >
        <BsChevronLeft color="white" size={50} />
      </button>
    );
  };

  const renderNextArrow = (clickHandler: () => void, hasNext: boolean) => {
    return (
      <button
        disabled={!hasNext}
        onClick={clickHandler}
        className="next-button"
      >
        <BsChevronRight color="white" size={50} />
      </button>
    );
  };

  return (
    <RRCarousel
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
      className="container"
      renderArrowPrev={renderPrevArrow}
      renderArrowNext={renderNextArrow}
    >
      {images &&
        images.map((item, index) => (
          <div className="image-wrapper">
            <img src={item.url} loading={`${index > 0 ? "lazy" : "eager"}`} />
          </div>
        ))}
    </RRCarousel>
  );
};
