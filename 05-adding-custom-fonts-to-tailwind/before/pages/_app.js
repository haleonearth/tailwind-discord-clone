import Head from "next/head";
import "tailwindcss/tailwind.css";
import "../styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Discord Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{fontFamily: 'Whitney'}}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
