import React, { useEffect, useRef, useState } from "react";
//styles
import style from "../styles/home.module.scss";
//next
import Link from "next/link";
//components
import Axonometric from "../components/Axonometric/Axonometric";
import Banner from "../components/Banner/Banner";
import Containers from "../components/Containers/Containers";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
//dependencies
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className={style.home}>
      <Header />
      <Banner />
      <div className={style.content}>
        <AboutSection />
        <Axonometric />
        <div className={style.parallax}>
          <div className={style.overlay}></div>
          <img src="/img/logos/sketch_logo.png" alt="Kontejner logo" />
        </div>
        <CoffeeSection />
        <ReferencesSection />
      </div>
      <Footer />
    </div>
  );
}

const AboutSection = () => {
  const base = useRef(null);
  return (
    <section className={`${style.about} about-section`}>
      <div className={`container ${style.container}`}>
        <Containers ref={base} />

        <div className={style.text}>
          <h2>o stavbě</h2>
          <p>
            &quot;V srdci Prahy 7 na Ortenově náměstí vyrostla dočasná stavba z
            recyklovaných lodních kontejnerů. Svou hrubou industriální estetikou
            odkazuje k průmyslové historii Holešovic. <br /> Svým obsahem
            navazuje na současné proměny této městské čtvrti. Hrubá, černá
            skořápka skrývá příjemnou městskou kavárnu, jež se velkoplošným
            prosklením v průřezech starých <br /> a omlácených kontejnerů
            otevírá svému okolí.&quot;
            <br /> <br />
            autor projektu{" "}
            <Link href="https://www.collarch.cz/" passHref>
              <a target={"_blank"}>Collarch studio.</a>
            </Link>
          </p>
        </div>
        <div className={style.containers}>
          <img
            ref={base}
            className={style.base}
            src="/img/containers/two-bases.png"
          />
        </div>
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
    <section className={`${style.coffee} coffee-section`}>
      <img className={style.bg} src={"/img/beans/beans_bg.png"} />
      <div className="container">
        <div className={style.text}>
          <h2>o kavárně</h2>
          <p>
            V parku obklopeni zelení, nedaleko dětského hřiště, ale stále v
            ruchu velkoměsta, se náš Kontejner stal součástí veřejného prostoru.
            A my jsme za to vděční! Na mlýnku máme zrnka od liberecké pražírny
            Nordbeans. Vitrínu denně nabitou sladkými i slanými dobrotami, které
            si všechny připravujeme a pečeme sami. Od pondělí do pátku si u nás
            také můžete užít brunch. Posezení máme jak uvnitř, tak venku,
            dokonce i na terasách v patře. Kontejner je kavárna pro všechny,
            kteří mají rádi život! Tak přijďte, těšíme se na vás! ♥
          </p>
        </div>
        <div ref={ref} className={style.photos}>
          <motion.div
            initial={{ x: "50%", rotate: -10 }}
            animate={{ x: visible ? 0 : "50%", rotate: visible ? 0 : -10 }}
            transition={{ duration: 1, delay: 0 }}
          >
            <img src="/img/coffee_photos/brunch.jpg" alt="Brunch" />
          </motion.div>
          <div>
            <img src="/img/coffee_photos/snidane.jpg" alt="Snídaně" />
          </div>
          <motion.div
            initial={{ x: "-50%", rotate: 10 }}
            animate={{ x: visible ? 0 : "-50%", rotate: visible ? 0 : 10 }}
            transition={{ duration: 1, delay: 0 }}
          >
            <img src="/img/coffee_photos/svarak.jpg" alt="Svařák" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ReferencesSection = () => {
  return (
    <section className={`${style.references} references-section`}>
      <div className="container">
        <div className={style.text}>
          <h2>psali o nás</h2>
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
      </div>
    </section>
  );
};
