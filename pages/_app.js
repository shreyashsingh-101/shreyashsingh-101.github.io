import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Shreyash Singh</title>
        <meta
          name="description"
          content="Portfolio of Shreyash Singh | Web Developer "
        />
        <meta
          name="keywords"
          content="shreyash singh 101, shreyashsingh-101, portfolio, shreyash, shreyash singh, shreyash singh portfolio, shreyash portfolio, shreyash singh web developer, shreyash singh web developer portfolio, shreyash singh web developer portfolio, react, node, nextjs, javascript, html, css, web developer, web developer portfolio, web"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
            <!-- begin Convert Experiences code-->
              <script type="text/javascript" src="//cdn-4.convertexperiments.com/v1/js/10019181-10019516.js?environment=production"></script>
            <!-- end Convert Experiences code -->
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
