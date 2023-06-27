import Hero from "./Hero";
import Services from "./Services";
import CTA from "./CTA";
import Industries from "./Industries";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import FAQ from "./FAQ";
import "./home.css";

export default function () {
  return (
    <div>
      <Hero />
      <Services />
      <CTA />
      {/* <Industries /> */}
      <Testimonials />
      <FAQ />
      <Blog />
      <Contact />
    </div>
  );
}
