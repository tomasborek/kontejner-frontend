import React, { useEffect } from "react";
import style from "./loader.module.scss";
const Loader = () => {
  return (
    <div className={style.loader}>
      <picture>
        <source src="/media/neon.webp" type="picture/webp" />
        <source src="/logos/neon.gif" type="picture/gif" />
      </picture>
    </div>
  );
};

export default Loader;
