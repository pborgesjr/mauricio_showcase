import React from "react";
import ReactPlayer from "react-player";
import { BaseReactPlayerProps } from "react-player/base";

import "./styles.scss";

export const ResponsiveVideoPlayer = (props: BaseReactPlayerProps) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        {...props}
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
