import React, { useEffect, useRef, useState } from "react";
import style from "./containers.module.scss";

const Containers = React.forwardRef((props, ref) => {
  const [stoppingPoint, setStoppingPoint] = useState<number | null>(null);
  const upperPart = useRef(null);
  const base: any = ref;
  const craneHook = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [stoppingPoint]);

  useEffect(() => {
    const width = window.innerWidth;
    if (width < 750) {
      upperPart.current.style.opacity = 0;
    }
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const width = window.innerWidth;
    const baseBox = base.current.getBoundingClientRect();
    const upperBox = upperPart.current.getBoundingClientRect();
    const baseVisible = baseBox.top < window.innerHeight - baseBox.height;
    //On mobile devices, the scroll speed of the containers is sped up to 0.85
    const scrollSpeed = width < 750 ? 0.85 : 0.75;
    //On mobile devices, container is initially invisible
    if (!baseVisible && width < 750) {
      upperPart.current.style.opacity = 0;
    } else {
      upperPart.current.style.opacity = 1;
    }

    if (
      upperBox.bottom - baseBox.top <= baseBox.height / 4 ||
      scrollTop < stoppingPoint
    ) {
      upperPart.current.style.top = `${scrollTop * scrollSpeed}px`;
      setStoppingPoint(null);
      craneHook.current.style.opacity = 1;
    } else if (stoppingPoint === null) {
      craneHook.current.style.opacity = 0;
      setStoppingPoint(scrollTop);
    } else {
      craneHook.current.style.opacity = 0;
    }
  };
  return (
    <div className={style.upper_containers_wrapper}>
      <div ref={upperPart} className={style.upper_containers}>
        <img
          ref={craneHook}
          className={style.crane_hook}
          src="/img/containers/crane-hook.png"
        />
        <img
          className={style.upper_container}
          src="/img/containers/container-upper.png"
        />
      </div>
    </div>
  );
});

export default Containers;
