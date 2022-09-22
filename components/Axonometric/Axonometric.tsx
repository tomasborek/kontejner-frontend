import React from "react";
//style
import style from "./axonometric.module.scss";
//components
import Reveal from "../Reveal/Reveal";

const Axonometric = () => {
  return (
    <section className={style.axonometric}>
      <div className="container">
        <div className={style.gallery}>
          <Reveal className={style.item}>
            <div className={style.image}>
              <img src="/img/axonometric/axonometric_1.png" />
            </div>
            <p className={style.description}>jeden použitý lodní kontejner</p>
          </Reveal>
          <Reveal className={style.item} delay={0.5}>
            <div className={style.image}>
              <img src="/img/axonometric/axonometric_2.png" />
            </div>
            <p className={style.description}>dva tvoří základ</p>
          </Reveal>
          <Reveal className={style.item} delay={1}>
            <div className={style.image}>
              <img src="/img/axonometric/axonometric_3.png" />
            </div>
            <p className={style.description}>třetí tvoří podlaží</p>
          </Reveal>
          <Reveal className={style.item} delay={1.5}>
            <div className={style.image}>
              <img src="/img/axonometric/axonometric_4.png" />
            </div>
            <p className={style.description}>
              otvory ve fasádě spojí interiér a exteriér
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Axonometric;
