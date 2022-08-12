import React from "react";
import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";

import { transformImage } from "../../services";
import { useFetch } from "../../hooks";

import "./styles.scss";

export const About = () => {
  const allImages = useFetch("about");

  return (
    <div className="container">
      <div className="wrapper">
        <div className="item">
          <article>
            {allImages.length > 0 && (
              <div id="right-image">
                <AdvancedImage
                  cldImg={transformImage(allImages[0].publicId).resize(
                    thumbnail().width(350).height(350)
                  )}
                  plugins={[lazyload(), placeholder()]}
                />
              </div>
            )}
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
            {allImages.length > 0 && (
              <div id="left-image">
                <AdvancedImage
                  cldImg={transformImage(allImages[1].publicId).resize(
                    thumbnail().width(350).height(350)
                  )}
                  plugins={[lazyload(), placeholder()]}
                />
              </div>
            )}
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
    </div>
  );
};
