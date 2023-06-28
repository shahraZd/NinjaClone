import Hero from "./Hero";
import Services from "./Services";
import CTA from "./CTA";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import FAQ from "./FAQ";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <CTA />
      <Testimonials />
      <FAQ />
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;
