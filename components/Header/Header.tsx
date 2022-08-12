import React, { useState, useEffect } from "react";
import style from "./header.module.scss";
import { Spin as Hamburger } from "hamburger-react";
import { useMenu } from "../../contexts/MenuContext";

const Header = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const [open, setOpen] = useMenu();
  useEffect(() => {
    //Add event listener for scroll, remove it on unmount
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  return (
    <header className={`${style.header} ${scroll ? style.scroll : ""}`}>
      <div className={style.hamburger}>
        <Hamburger toggled={open} toggle={setOpen} color={"white"} />
      </div>
      <div className={style.brand}>
        <img src="/img/logos/kontejner-logo.png" alt="" />
      </div>
    </header>
  );
};

export default Header;
