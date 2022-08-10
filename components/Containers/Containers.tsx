import React, { useEffect, useRef, useState } from "react";
import style from "./containers.module.scss";

const Containers = React.forwardRef((props, ref) => {
  const [stoppingPoint, setStoppingPoint] = useState<number | null>(null);
  const upperPart = useRef(null);
  const base: any = ref;
  const craneHook = useRef(null);
  const logoContainer = useRef(null);
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
    const isPhone = width < 750;
    const baseBox = base.current.getBoundingClientRect();
    const upperBox = upperPart.current.getBoundingClientRect();
    const baseVisible = baseBox.top < window.innerHeight - baseBox.height;
    //On mobile devices, the scroll speed of the containers is sped up to 0.85
    const scrollSpeed = isPhone ? 0.85 : 0.75;
    //On mobile devices, container is initially invisible
    if (!baseVisible && isPhone) {
      upperPart.current.style.opacity = 0;
    } else {
      upperPart.current.style.opacity = 1;
    }
    const touchingPoint = isPhone
      ? baseBox.top + scrollTop
      : baseBox.top + scrollTop + baseBox.height / 6;
    const upperPartAbsoluteBottom = upperBox.bottom + scrollTop;

    if (upperPartAbsoluteBottom <= touchingPoint || scrollTop < stoppingPoint) {
      upperPart.current.style.top = `${scrollTop * scrollSpeed}px`;
      setStoppingPoint(null);
      craneHook.current.style.opacity = 1;
    } else {
      upperPart.current.style.top = `${
        touchingPoint - upperBox.height + 112
      }px`;
      if (stoppingPoint === null) {
        setStoppingPoint(scrollTop);
      } else {
        craneHook.current.style.opacity = 0;
      }
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
          ref={logoContainer}
          className={style.upper_container}
          src="/img/containers/container-upper.png"
        />
      </div>
    </div>
  );
});

Containers.displayName = "Containers";

export default Containers;
