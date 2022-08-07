import React, { useEffect, useRef, useState } from "react";
import Axonometric from "../components/Axonometric/Axonometric";
import Banner from "../components/Banner/Banner";
import Containers from "../components/Containers/Containers";
import Header from "../components/Header/Header";
import style from "../styles/home.module.scss";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className={style.home}>
      <Header />
      <div className="container">
        <Banner />
      </div>
      <div className={style.content}>
        <div className="container">
          <AboutSection />
          <Axonometric />
        </div>
        <CoffeeSection />
        <div className="container">
          <ReferencesSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

const AboutSection = () => {
  const base = useRef(null);
  return (
    <section className={style.about}>
      <Containers ref={base} />

      <div className={style.text}>
        <h2>_o stavbě</h2>
        <p>
          _v srdci Prahy 7 na Ortenově náměstí vyrostla dočasná stavba z
          recyklovaných lodních kontejnerů. Svou hrubou industriální estetikou
          odkazuje k průmyslové historii Holešovic. Svým obsahem navazuje na
          současné proměny této městské čtvrti. Hrubá, černá skořápka skrývá
          příjemnou městskou kavárnu, jež se velkoplošným prosklením v průřezech
          starých a omlácených kontejnerů otevírá svému okolí.
          <br /> <br />O stavbu se postaral tým{" "}
          <Link href="https://www.collarch.cz/" passHref>
            <a target={"_blank"}>Collarch</a>
          </Link>{" "}
          studio.
        </p>
      </div>
      <div className={style.containers}>
        <img
          ref={base}
          className={style.base}
          src="/img/containers/container-base.png"
        />
      </div>
    </section>
  );
};

const CoffeeSection = () => {
  const { ref, inView } = useInView();
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);
  return (
    <section className={style.coffee}>
      <img className={style.bg} src={"/img/beans/beans_bg.png"} />
      <div className="container">
        <div className={style.text}>
          <h2>_o kavárně</h2>
          <p>
            _kromě unikátní budovy, se zde podává unikátní káva od libereckých
            Nordbeans, lahodné deserty pro lepší náladu a každý den snídaně či
            brunch. Zastavte se tak ochutnat kávu nebo něco zakousnout nevim
            nevim
          </p>
        </div>
        <div ref={ref} className={style.photos}>
          <motion.div
            initial={{ x: "50%", rotate: -10 }}
            animate={{ x: visible ? 0 : "50%", rotate: visible ? 0 : -10 }}
            transition={{ duration: 1, delay: 0 }}
          >
            <img src="/img/coffee_photos/brunch.jpg" />
          </motion.div>
          <div>
            <img src="/img/coffee_photos/snidane.jpg" />
          </div>
          <motion.div
            initial={{ x: "-50%", rotate: 10 }}
            animate={{ x: visible ? 0 : "-50%", rotate: visible ? 0 : 10 }}
            transition={{ duration: 1, delay: 0 }}
          >
            <img src="/img/coffee_photos/svarak.jpg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ReferencesSection = () => {
  return (
    <section className={`${style.references}`}>
      <div className={style.text}>
        <h2>_psali o nás</h2>
      </div>
      <div className={style.items}>
        <Link
          href="https://www.idnes.cz/bydleni/na-navsteve/kavarna-kontejner-stavba-z-kontejneru-kafe-holesovice-praha-namesti-collarch.A211116_115917_dum_osobnosti_web"
          passHref
        >
          <a target={"_blank"} className={style.item}>
            <img src="/img/references_logos/idnes.png" />
          </a>
        </Link>
        <Link
          href="https://cc.cz/postavili-ji-ze-tri-lodnich-kontejneru-ted-netradicni-kavarna-v-holesovicich-ziskala-architektonickou-cenu/"
          passHref
        >
          <a target={"_blank"} className={style.item}>
            <img src="/img/references_logos/czechcrunch.png" />
          </a>
        </Link>
        {/* <Link href="https://google.com" passHref>
          <a target={"_blank"} className={style.item}>
            <img src="/img/references_logos/arch_daily.png" />
          </a>
        </Link> */}
        <Link href="https://www.archiweb.cz/b/kavarna-kontejner" passHref>
          <a target={"_blank"} className={style.item}>
            <img src="/img/references_logos/archiweb.png" />
          </a>
        </Link>
        <Link
          href="https://www.earch.cz/architektura/clanek/kavarna-jako-industrialni-pavilon-mesta-holesovicke-namesti-ozivila-kavarna-z-lodnich-kontejneru"
          passHref
        >
          <a target={"_blank"} className={style.item}>
            <img src="/img/references_logos/earch.png" />
          </a>
        </Link>
      </div>
    </section>
  );
};
