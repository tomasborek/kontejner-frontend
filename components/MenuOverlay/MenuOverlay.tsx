import React, { useState } from "react";
import style from "./menuOverlay.module.scss";
import { useMenu } from "../../contexts/MenuContext";

const MenuOverlay = () => {
  const [open, setOpen] = useMenu();
  return (
    <div className={`${style.menu_overlay} ${open ? style.active : ""}`}>
      <ul>
        <MenuItem section={"about"}>_o stavbě</MenuItem>
        <MenuItem section={"coffee"}>_o kavárně</MenuItem>
        <MenuItem section={"references"}>_psali o nás</MenuItem>
        <MenuItem section={"contact"}>_kontakt</MenuItem>
      </ul>
    </div>
  );
};

export default MenuOverlay;

const MenuItem = ({ children, section }) => {
  const [hover, setHover] = useState<boolean>(false);
  const [open, setOpen] = useMenu();
  return (
    <li
      onClick={() => {
        setOpen(false);
        const yOffset = -30;
        const element =
          section === "contact"
            ? undefined
            : document.querySelector(`.${section}-section`);
        const y =
          section === "contact"
            ? document.body.scrollHeight
            : element?.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={style.item}
    >
      <p>{children}</p>
      <span
        style={{
          width: hover ? "100%" : "0",
          height: "2px",
          backgroundColor: "rgb(255, 42, 106)",
          transition: "all 0.3s ease-in-out",
        }}
      ></span>
    </li>
  );
};
