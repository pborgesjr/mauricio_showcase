import React from "react";
import { big_image } from "../../assets";

import "./styles.scss";

export const About = () => {
  const addClassName = (id: string) => {
    document.getElementById(id)?.classList.add("easeLoad");
  };

  return (
    <>
      <div className="wrapper">
        <div className="item">
          <article>
            <img
              onLoad={() => addClassName("right-image")}
              src={big_image}
              className={"image"}
              id="right-image"
              width={345}
              height={345}
            />
            <div>
              <h1>Maurício Alves</h1>
              <div className="brand">
                <h1>Archviz</h1>
                <div />
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat ut wisi enim ad minim veniam quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip.
            </p>
            <p>
              Ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore. Ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore.{" "}
            </p>
          </article>
        </div>

        <div className="item">
          <article>
            <img
              src={big_image}
              className={"image"}
              onLoad={() => addClassName("left-image")}
              id="left-image"
              width={345}
              height={345}
            />
            <div>
              <h1>Lorem ipsum</h1>
              <div className="brand">
                <h1>dolor</h1>
                <div />
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat ut wisi enim ad minim veniam quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip.
            </p>
            <p>
              Ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore. Ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore.
            </p>
          </article>
        </div>
      </div>
    </>
  );
};
