import React from "react";
import ContentLoader from "react-content-loader";

import styles from "./styles.module.scss";

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  className?: string;
}

export const Skeleton = ({ width, height, className }: SkeletonProps) => {
  return (
    <ContentLoader
      width={width}
      height={height}
      speed={1}
      className={`${styles.container} ${className}`}
    >
      <rect width={width} height={height} />
    </ContentLoader>
  );
};
