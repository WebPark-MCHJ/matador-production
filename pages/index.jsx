import Head from "next/head";
import Hero from "@/src/components/Hero/Hero";
import Main from "@/src/components/Main/Main";

//translation
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home({ prices }) {
  return (
    <>
      <Head>
        <title>AvtoMatador</title>
        <meta name="description" content="Avtomatador.uz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Hero prices={prices} />
      <Main />
    </>
  );
}

export async function getServerSideProps({ locale = "uz" }) {
  const prices = fetch("https://matador-api.onrender.com/metal")
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return {
    props: {
      prices: await prices,
      ...(await serverSideTranslations(locale, [
        "navbar",
        "hero",
        "our",
        "about",
        "why",
        "PriceInfo",
        "willCome",
        "payment",
        "contactUs",
        "map",
        "calculation",
        "footer",
      ])),
    },
  };
}
