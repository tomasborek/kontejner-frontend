import React, { useEffect, useState } from "react";
import MenuOverlay from "../components/MenuOverlay/MenuOverlay";
import Head from "next/head";
import "../styles/global.scss";
import MenuProvider from "../contexts/MenuContext";
import Loader from "../components/Loader/Loader";

function MyApp({ Component, pageProps }) {
  const [loader, setLoader] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
      document.querySelector("body").style.overflowY = "scroll";
    }, 1500);
  }, []);

  return (
    <>
      <Head>
        <title>Kontejner | Kavárna v srdci holešovic</title>
        <meta
          name="description"
          content="Skvělá výběrová káva, kterou můžete zapít naše lahodné
            deserty, snídaně či brunch a to vše v unikátní kontejnerové stavbě v srdci Holešovic na Ortenově náměstí."
        />
        <meta
          property="og:title"
          content="Kontejner | Kavárna v srdci holešovic"
        />
        <meta
          property="og:description"
          content="Skvělá výběrová káva, kterou můžete zapít naše lahodné
            deserty, snídaně či brunch a to vše v unikátní kontejnerové stavbě v srdci Holešovic na Ortenově náměstí."
        />
        <meta property="og:image" content="/img/kontejner_sun.jpg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
          integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/logos/kontejner-logo-favicon.png"
        />
        <meta name="format-detection" content="telephone=no"></meta>
      </Head>

      <MenuProvider>
        <MenuOverlay />
        {loader && <Loader />}
        <Component {...pageProps} />
      </MenuProvider>
    </>
  );
}

export default MyApp;
