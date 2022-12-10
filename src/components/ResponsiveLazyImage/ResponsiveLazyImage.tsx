import React, { ImgHTMLAttributes, useState } from "react";
import { Blurhash } from "react-blurhash";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { imageSrcBuilder } from "../../utils";

import styles from "./styles.module.scss";

interface ResponsiveLazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasFinished: boolean;
  blurHash: string;
}

export const ResponsiveLazyImage = ({
  hasFinished,
  blurHash,
  ...rest
}: ResponsiveLazyImageProps) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const { width = "100%", height = "100%", className } = rest;

  const handleLoad = () => {
    setHasLoaded(true);
  };

  const shouldHideBlurHash = hasLoaded && hasFinished;

  return (
    <div className={`${styles.imageWrapper} ${className}`}>
      <LazyLoadImage
        height="100%"
        width="100%"
        effect="blur"
        afterLoad={handleLoad}
        className={styles.image}
        src={
          "https://images.unsplash.com/photo-1670506552296-668e793daf7a?ixid=MnwzNTM2MTR8MHwxfGFsbHwyfHx8fHx8Mnx8MTY3MDUzMTc3NA&ixlib=rb-4.0.3"
        }
        srcSet={
          imageSrcBuilder(
            "https://images.unsplash.com/photo-1670506552296-668e793daf7a?ixid=MnwzNTM2MTR8MHwxfGFsbHwyfHx8fHx8Mnx8MTY3MDUzMTc3NA&ixlib=rb-4.0.3"
          ).srcSet
        }
        {...rest}
      />

      <div
        className={`${styles.blurImage} ${
          shouldHideBlurHash && styles.fadeOutAnimation
        }`}
      >
        <Blurhash height={height} width={width} hash={blurHash} punch={1} />
      </div>
    </div>
  );
};
