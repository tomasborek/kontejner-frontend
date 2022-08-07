import React, { useEffect } from "react";
import style from "./loader.module.scss";
const Loader = () => {
  return (
    <div className={style.loader}>
      <img src={"/img/logos/kontejner-logo.png"} />
    </div>
  );
};

export default Loader;
