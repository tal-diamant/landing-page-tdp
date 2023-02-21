import Hero from "@/modules/Home/containers/Hero/Hero";
import Customers from "@/modules/Home/containers/Customers/Customers";
import Features from "@/modules/Home/containers/Features/Features";
import Process from "./containers/Process/Process";
import Info from "./containers/Info/Info";
import Testimonials from "./containers/Testimonials/Testimonials"
import Fit from "./containers/Fit/Fit";
import FAQ from "./containers/FAQ/FAQ";
import CTA from "./containers/CTA/CTA";

export default function Home() {
  return (
    <>
      {/* header */}

      <Hero />
      <Customers />
      <Features />
      <Process />
      <Info />
      <Testimonials />
      <Fit />
      <FAQ />
      <CTA />

      {/* footer */} {/* <-- */}
    </>
  );
}
