import React, { useEffect, useRef, useState } from "react";

import {
  Modal,
  ResponsiveVideoPlayer,
  Slider,
  Typography,
} from "../../components";

import styles from "./styles.module.scss";
import {
  AdvancedImage,
  lazyload,
  placeholder,
  responsive,
} from "@cloudinary/react";
import { fetchImages, transformImage } from "../../services";
import { useFetch } from "../../hooks";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string>();

  const modalRef = useRef(null);

  const handleSelectProject = async (path: string) => {
    const images = await fetchImages(path);

    setSelectedProject(images);

    modalRef?.current?.openModal();
  };

  const allImages = useFetch("projects");

  return (
    <>
      <div className={styles.topVideoWrapper}>
        {/*      <ResponsiveVideoPlayer
          url="https://www.youtube.com/watch?v=pfaM4c3006k&ab_channel=3DigitStudio"
          muted
          playing={false}
          controls={false}
          volume={0}
          loop
          containerStyles={styles.frozenPlayer}
        /> */}
      </div>

      <div className={styles.imageList}>
        {allImages.map((image, index) => (
          <button
            key={index}
            className={styles.pictureButton}
            onClick={() => handleSelectProject(image.filename)}
          >
            <AdvancedImage
              cldImg={transformImage(image.publicId)}
              plugins={[lazyload(), responsive({ steps: 200 }), placeholder()]}
            />
            <Typography
              text={image.filename}
              type="body"
              customContainerStyles={styles.captionWrapper}
            />
          </button>
        ))}
      </div>

      <div className={styles.bottomVideoWrapper}>
        {/*   <ResponsiveVideoPlayer
          url="https://www.youtube.com/watch?v=pfaM4c3006k&ab_channel=3DigitStudio"
          muted
          playing={false}
          volume={0}
          loop
        /> */}
      </div>
      <Modal ref={modalRef}>
        <Slider images={selectedProject} />
      </Modal>
    </>
  );
};
