import React, { useRef, useState } from "react";

import {
  ResponsiveVideoPlayer,
  Typography,
  Modal,
  Carousel,
} from "../../components";

import styles from "./styles.module.scss";
import { useFetch } from "../../hooks";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string>();

  const { imageList } = useFetch("projetos");

  const { imageList: selectedProjectImages } = useFetch(selectedProject);

  const modalRef = useRef(null);

  const handleSelectProject = async (path: string) => {
    setSelectedProject(path);

    modalRef?.current?.openModal();
  };

  const addClassName = (id: string) => {
    document.getElementById(id)?.classList.add("easeLoad");
  };

  return (
    <>
      <div className={styles.topVideoWrapper}>
        <ResponsiveVideoPlayer
          url="https://www.youtube.com/watch?v=pfaM4c3006k&ab_channel=3DigitStudio"
          muted
          playing={true}
          controls={false}
          width={1280}
          height={720}
          volume={0}
          loop={true}
          containerStyles={styles.frozenPlayer}
        />
      </div>

      <div className={styles.imageList}>
        {imageList.map((image) => (
          <button
            key={image.name}
            className={styles.picture}
            onClick={() => handleSelectProject(image.name)}
          >
            <img
              src={image.url}
              id={image.name}
              className={styles.image}
              onLoad={() => addClassName(image.name)}
              width={392}
              height={320}
              alt={image.prefix || image.name}
            />
            <Typography
              text={image.name}
              type="body"
              customContainerStyles={styles.captionWrapper}
            />
          </button>
        ))}
      </div>

      <div className={styles.bottomVideoWrapper}>
        <ResponsiveVideoPlayer
          url="https://www.youtube.com/watch?v=pfaM4c3006k&ab_channel=3DigitStudio"
          muted
          width={1280}
          height={720}
          playing={false}
          volume={0}
          loop
        />
      </div>

      <Modal ref={modalRef}>
        <Carousel images={selectedProjectImages} />
      </Modal>
    </>
  );
};
