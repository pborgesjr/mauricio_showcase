import React, { useRef, useState } from "react";

import {
  ResponsiveVideoPlayer,
  Typography,
  Modal,
  Carousel,
  ResponsiveLazyImage,
} from "../../components";

import styles from "./styles.module.scss";
import { addClassName, imageSrcBuilder, MOCK_IMAGES } from "../../utils";
import { useCustomGetQuery } from "../../hooks";
import { mockProjects } from "../../utils/mockProjects";

export const Projects = () => {
  const modalRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState<string>("none");

  const handleSelectProject = async (path: string) => {
    /* setSelectedProject(path); */
    //@ts-ignore
    modalRef?.current?.openModal();
  };

  const { data, isFetching, isFetched, isSuccess } = useCustomGetQuery({
    queryKey: "random",
    baseURL: "http://localhost:3333/images",
  });

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

      <div className="bleedSideways">
        <div className={styles.imageList}>
          {mockProjects.map((project) => (
            <button
              key={project.id}
              className={styles.picture}
              onClick={() => handleSelectProject("image.name")}
            >
              <ResponsiveLazyImage
                height="100%"
                width="100%"
                placeholderSrc={project.thumbImage.placeholderSrc}
                src={project.thumbImage.src}
              />
              <Typography
                text={"image.name"}
                type="body"
                customContainerStyles={styles.captionWrapper}
              />
            </button>
          ))}
        </div>
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
        <Carousel images={MOCK_IMAGES} />
      </Modal>
    </>
  );
};
