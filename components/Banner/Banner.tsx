import React from "react";
//style
import style from "./banner.module.scss";
//dependencies
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <div className={style.banner}>
      <img src="/img/pudorys.png" className={style.bg} />
      <div className="container">
        <h1>_kontejner</h1>
        <h2>
          <Typewriter
            options={{
              strings: [
                "Kavárna v srdci Holešovic",
                "Ortenovo náměstí 169, Praha 7",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 2,
            }}
          />
        </h2>
      </div>
    </div>
  );
};

export default Banner;
