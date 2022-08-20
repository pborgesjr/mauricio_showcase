import React, { ImgHTMLAttributes } from "react";
import ContentLoader from "react-content-loader";

import "./styles.scss";

interface ImageSkeletonProps {
  width: number;
  height: number;
}

export const ImageSkeleton = ({ width, height }: ImageSkeletonProps) => {
  return (
    <ContentLoader
      width={width}
      height={height}
      speed={1}
      //TODO: importar cores de _colors.scss
      backgroundColor={"#e3e3e3"}
      foregroundColor={"#999"}
    >
      <rect width={width} height={height} />
    </ContentLoader>
  );
};
