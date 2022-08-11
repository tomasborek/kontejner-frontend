import React, { useEffect } from "react";
import style from "./loader.module.scss";
const Loader = () => {
  return (
    <div className={style.loader}>
      <picture>
        <source srcSet="/media/neon.webp" type="image/webp" />
        <source srcSet="/media/neon.gif" type="image/gif" />
        <img src="/media/neon.webp" />
      </picture>
    </div>
  );
};

export default Loader;
