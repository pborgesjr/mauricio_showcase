import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Carousel as RRCarousel } from "react-responsive-carousel";

import { ImageItem } from "../../constants";

import styles from "./styles.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface CarouselProps {
  images: ImageItem[];
  infiniteLoop?: boolean;
  autoPlay?: boolean;
  showArrows?: boolean;
  interval?: number;
  transitionTime?: number;
}

export const Carousel = ({
  images,
  infiniteLoop,
  autoPlay,
  showArrows = true,
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
          <div className={styles.imageWrapper}>
            <img src={item.url} loading={`${index > 0 ? "lazy" : "eager"}`} />
          </div>
        ))}
    </RRCarousel>
  );
};
