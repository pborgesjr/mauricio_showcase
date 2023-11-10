import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Carousel as RRCarousel } from "react-responsive-carousel";

import styles from "./styles.module.scss";

import { ResponsiveLazyImage } from "../ResponsiveLazyImage/ResponsiveLazyImage";
import { ImageType } from "../../types";

interface CarouselProps {
  images: ImageType[];
  infiniteLoop?: boolean;
  autoPlay?: boolean;
  showArrows?: boolean;
  fullWidth?: boolean;
  interval?: number;
  transitionTime?: number;
}

export const Carousel = ({
  images,
  infiniteLoop,
  autoPlay,
  showArrows = true,
  fullWidth,
  interval,
  transitionTime,
}: CarouselProps) => {
  const renderPrevArrow = (clickHandler: () => void, hasPrev: boolean) => {
    return (
      <button
        disabled={!hasPrev}
        onClick={clickHandler}
        className={`${styles.carouselButton} ${styles.prevButton}`}
      >
        <BsChevronLeft color="white" size={40} />
      </button>
    );
  };

  const renderNextArrow = (clickHandler: () => void, hasNext: boolean) => {
    return (
      <button
        disabled={!hasNext}
        onClick={clickHandler}
        className={`${styles.carouselButton} ${styles.nextButton}`}
      >
        <BsChevronRight color="white" size={40} />
      </button>
    );
  };

  return (
    <RRCarousel
      infiniteLoop={infiniteLoop}
      autoPlay={autoPlay}
      showArrows={showArrows}
      interval={interval}
      transitionTime={transitionTime}
      showIndicators
      showThumbs={false}
      showStatus={false}
      useKeyboardArrows
      className={styles.container}
      emulateTouch
      renderArrowPrev={renderPrevArrow}
      renderArrowNext={renderNextArrow}
    >
      {images &&
        images.map((item, index) => (
          <ResponsiveLazyImage
            id={item.id}
            src={item.url}
            placeholderSrc={item.placeholder}
            className={`${fullWidth && styles.fullWidth}`}
            key={index}
          />
        ))}
    </RRCarousel>
  );
};
