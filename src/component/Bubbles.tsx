import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";

import { loadSlim } from "@tsparticles/slim"; 

export const Bubbles = () => {
  const [init, setInit] = useState(false);

 
  useEffect(() => {
    initParticlesEngine(async (engine) => {
     
      await loadSlim(engine);
     ;
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#0d47a1",
        },
        opacity:0.1
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ["#22333b", "#0a0908", "#668281"],
        },
       
       
        links: {
          color: "#ff3f2f",
          distance: 150,
          enable: true,
          opacity: 0.1,
          width: 1,
       
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 40,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 10, max: 40 },
        },
       
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute top-0 left-0 w-full h-[2500px] md:h-full  z-[-1] bg-gradient-to-tr from-[#e8ed86]  to-[#668281]  " 
      />
    );
  }

  return <></>;
};