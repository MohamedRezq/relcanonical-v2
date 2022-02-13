import { SessionProvider } from "next-auth/react";
import PropTypes from "prop-types";
import Head from "next/head";
import "../assets/css/Custom.css";
import "../assets/css/Plugins.css";
import "../assets/css/Prismjs.css";
import "../assets/css/Styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { wrapper } from "../redux/store";
import Script from "next/script";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  session = null;
  return (
    <>
      <Head>
        <title>
          Create, Index, & Rank Important Pages On Your Site 3X Faster ::
          Relcanonical
        </title>
        <meta
          name="description"
          content="Relcanonical is a relcanonical platform that makes it faster, easier, and cheaper for search engines to rank the most important pages on your Relcanonical Templates."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=optional"
        />
        <link
          rel="shortcut icon"
          href="/assets/media/logos/logo_primary_letter.png"
        />
      </Head>
      <SessionProvider session={session}>
        <ToastContainer />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(MyApp);
