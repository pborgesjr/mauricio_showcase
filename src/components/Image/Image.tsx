import React, { ImgHTMLAttributes } from "react";
import { Skeleton } from "../Skeleton/Skeleton";

import styles from "./styles.module.scss";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  isLoading?: boolean;
}

export const Image = ({
  isLoading,
  width,
  height,
  className,
  ...rest
}: ImageProps) => {
  return isLoading ? (
    <Skeleton width={width} height={height} className={className} />
  ) : (
    <img
      width={width}
      height={height}
      className={`${styles.container} ${className}`}
      {...rest}
    />
  );
};
