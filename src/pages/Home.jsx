import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "./Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import WhatsAppButton from "../components/WhatsAppButton";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Stats />
      <Testimonials />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default Home;