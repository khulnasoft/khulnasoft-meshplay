import React from "react";
import Particles from "react-tsparticles";

import meshplay from "../../assets/images/app/projects/meshplay-logo-white.webp";
import smp from "../../assets/images/app/projects/smp.webp";
import imagehub from "../../assets/images/app/projects/khulnasoft-image-hub.webp";

export default () => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      opacity: 0 // Previously -> 0.4
    }}
  >
    <Particles
      className="particle"
      params={{
        particles: {
          number: {
            value: 3,
            density: { enable: true, value_area: 800 },
          },

          shape: {
            type: ["images"],
            images: [
              {
                src: `${meshplay}`,
                width: 20,
                height: 15,
                alt: "meshplay-image",
              },
              {
                src: `${smp}`,
                width: 30,
                height: 15,
                alt: "smp-image",
              },
              {
                src: `${imagehub}`,
                width: 20,
                height: 15,
                alt: "imageHub Image"
              },
              // {
              //     src: `${smp}`,
              //     width: 30,
              //     height: 15,
              // },
              // {
              //     src: `${meshplay}`,
              //     width: 20,
              //     height: 15,
              // }
            ],
          },
          opacity: {
            value: 0, // Previously -> 0.17626369048095938
            random: true,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 30,
            random: false,
          },
          line_linked: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: false,
            straight: false,
            bounce: true,
            attract: { enable: true,  rotateY: 200 },
          },
        },
        retina_detect: true,
      }}
    />
  </div>
);
