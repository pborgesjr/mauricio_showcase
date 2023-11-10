import React, { ImgHTMLAttributes } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { mockImage, mockImageBlur } from "../../assets";

import styles from "./styles.module.scss";

interface ResponsiveLazyImageProps
  extends Omit<
    ImgHTMLAttributes<HTMLImageElement>,
    "placeholder" | "src" | "onLoad"
  > {
  src?: string;
  placeholderSrc?: string;
}

export const ResponsiveLazyImage = (props: ResponsiveLazyImageProps) => {
  const { className, ...rest } = props;

  return (
    <LazyLoadImage
      effect="blur"
      placeholderSrc={mockImageBlur}
      src={mockImage}
      className={`${styles.image} ${className}`}
      {...rest}
    />
  );
};
