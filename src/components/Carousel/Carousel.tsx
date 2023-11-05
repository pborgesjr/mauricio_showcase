import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Carousel as RRCarousel } from "react-responsive-carousel";

import styles from "./styles.module.scss";

import { ResponsiveLazyImage } from "../ResponsiveLazyImage/ResponsiveLazyImage";

type ImageType = {
  src?: string;
  placeholderSrc?: string;
};
interface CarouselProps {
  images?: ImageType[];
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
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
      className={styles.container}
      swipeable={false}
      renderArrowPrev={renderPrevArrow}
      renderArrowNext={renderNextArrow}
    >
      {images &&
        images.map((item, index) => (
          <ResponsiveLazyImage
            {...item}
            className={`${fullWidth && styles.fullWidth}`}
            key={index}
          />
        ))}
    </RRCarousel>
  );
};
