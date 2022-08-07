import React from "react";
import style from "./menuOverlay.module.scss";
import { useMenu } from "../../contexts/MenuContext";

const MenuOverlay = () => {
  const [open, setOpen] = useMenu();
  return (
    <div className={`${style.menu_overlay} ${open ? style.active : ""}`}></div>
  );
};

export default MenuOverlay;
