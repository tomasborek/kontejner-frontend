import React, { useEffect } from "react";
import style from "./loader.module.scss";
const Loader = () => {
  return (
    <div className={style.loader}>
      <img src={"/media/neon.webp"} />
      <picture>
        <source src="/media/neon.webp" type="picture/webp" />
        <source src="/logos/kontejner-logo.png" type="picture/png" />
      </picture>
    </div>
  );
};

export default Loader;
