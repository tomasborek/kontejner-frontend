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
    const scrollTop = window.scrollY;
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
    const touchingPoint = baseBox.top + scrollTop + baseBox.height / 4;
    //If upperbox is above touching point
    if (upperBox.bottom + scrollTop < touchingPoint) {
      upperPart.current.style.top = `${scrollTop * scrollSpeed}px`;
      setStoppingPoint(null);
      craneHook.current.style.opacity = 1;
      //If the boxes are stacked on top of each other and we are scrolling up to unstack them
    } else if (scrollTop < stoppingPoint) {
      upperPart.current.style.top = `${scrollTop * scrollSpeed}px`;
      craneHook.current.style.opacity = 1;
    } else {
      //Put the upper part on top of the base if we scroll to touching point
      //+32 because of padding of 2rem
      upperPart.current.style.top = `${touchingPoint - upperBox.height + 32}px`;
      if (stoppingPoint === null && scrollTop < touchingPoint) {
        setStoppingPoint(scrollTop + 32);
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
