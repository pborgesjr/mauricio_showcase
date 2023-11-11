import React from "react";
import ReactPlayer from "react-player";
import { BaseReactPlayerProps } from "react-player/base";

import styles from "./styles.module.scss";

interface ResponsiveVideoPlayerProps extends BaseReactPlayerProps {
  containerStyles?: string;
}

export const ResponsiveVideoPlayer = ({
  containerStyles,
  ...rest
}: ResponsiveVideoPlayerProps) => {
  return (
    <div className={`${styles.playerWrapper} ${containerStyles}`}>
      <ReactPlayer
        {...rest}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
        width="100%"
        height="100%"
      />
    </div>
  );
};
