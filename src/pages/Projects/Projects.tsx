import React, { useRef, useState } from "react";

import {
  ResponsiveVideoPlayer,
  Typography,
  Modal,
  Carousel,
  ResponsiveLazyImage,
} from "../../components";

import styles from "./styles.module.scss";
import { useGetQuery } from "../../hooks";
import { ImageType, ProjectResponseDataType } from "../../types";

export const Projects = () => {
  const modalRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState<ImageType[]>([]);

  const handleSelectProject = async (projectImages?: ImageType[]) => {
    if (projectImages) {
      setSelectedProject(projectImages);
    }

    //@ts-ignore
    modalRef?.current?.openModal();
  };

  const { data: allProjects } = useGetQuery<Array<ProjectResponseDataType>>({
    queryKey: ["projects"],
    url: "/projects",
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
          {allProjects?.map((project) => {
            return project.isVisible ? (
              <button
                key={project.id}
                className={styles.picture}
                onClick={() => handleSelectProject(project.images)}
              >
                <ResponsiveLazyImage
                  height="100%"
                  width="100%"
                  placeholderSrc={project.images?.[0].placeholder}
                  src={project.images?.[0].url}
                  className={styles.imgHover}
                />

                <Typography
                  text={project.name}
                  type="body"
                  customContainerStyles={styles.captionWrapper}
                />
              </button>
            ) : (
              <></>
            );
          })}
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
        <Carousel images={selectedProject} />
      </Modal>
    </>
  );
};
