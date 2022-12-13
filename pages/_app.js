import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Shreyash Singh</title>
        <meta
          name="description"
          content="Portfolio of Shreyash Singh | Web Developer | Web Designer"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
