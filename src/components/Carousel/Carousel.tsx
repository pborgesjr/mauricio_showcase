import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Carousel as RRCarousel } from "react-responsive-carousel";

import { ImageItem } from "../../constants";

import styles from "./styles.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Skeleton } from "../Skeleton/Skeleton";

interface CarouselProps {
  images?: ImageItem[];
  isLoading?: boolean;
  infiniteLoop?: boolean;
  autoPlay?: boolean;
  showArrows?: boolean;
  fullWidth?: boolean;
  interval?: number;
  transitionTime?: number;
}

export const Carousel = ({
  images,
  isLoading,
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
        <BsChevronLeft color="white" size={50} />
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
        <BsChevronRight color="white" size={50} />
      </button>
    );
  };

  return isLoading ? (
    <Skeleton width={1280} height={720} />
  ) : (
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
          <div
            className={`${styles.imageWrapper} ${
              fullWidth && styles.fullWidth
            }`}
            key={index}
          >
            <img src={item.url} loading={`${index > 0 ? "lazy" : "eager"}`} />
          </div>
        ))}
    </RRCarousel>
  );
};
