// pages/_app.js
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TravelVista - Your AI Travel Guide</title>
        <meta name="description" content="Explore top travel destinations with AI-powered recommendations." />
        <meta property="og:title" content="TravelVista - Your AI Travel Guide" />
        <meta property="og:description" content="Explore top travel destinations with AI-powered recommendations." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
