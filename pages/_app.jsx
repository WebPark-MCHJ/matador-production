import Layout from "@/src/components/Layout";
import "@/styles/globals.scss";

//transaltion
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default appWithTranslation(App);
