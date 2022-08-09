import React from "react";
import style from "./footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={`container`}>
        <div className={style.content}>
          <img
            className={style.logo}
            src="/img/logos/kontejner-logo.png"
            alt=""
          />
          <div className={style.contact}>
            <div className={style.item}>Ortenovo náměstí 169, Praha 7</div>
            <div className={style.item}>Po-Pá 8:00 - 19:00</div>
            <div className={style.item}>So-Ne 10:00 - 18:00</div>
            <div className={style.item}>
              <i className="fas fa-phone"></i>
              <p>
                <span>+420</span> 605 243 205
              </p>
            </div>
            <div className={style.social}>
              <Link href="https://www.facebook.com/kontejnercafe/" passHref>
                <a target={"_blank"}>
                  <i className="fab fa-facebook-square"></i>
                </a>
              </Link>
              <Link href="https://www.instagram.com/kontejner_7/" passHref>
                <a target={"_blank"}>
                  <i className="fab fa-instagram"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className={style.signature}>
          <Link href="https://statements.cz" passHref>
            <a target={"_blank"}>Built by statements</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
