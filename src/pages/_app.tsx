import type { AppProps } from "next/app";
import Layout from "@/core/Layout/Layout";
import "@/styles/globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />{" "}
    </Layout>
  );
}
