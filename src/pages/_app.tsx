import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import Layout from "@/core/Layout/Layout";
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </Layout>
  );
}
