import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "./Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import WhatsAppButton from "../components/WhatsAppButton";
import SEO from "../components/SEO";

function Home() {
  return (
    <>
      <SEO
        title="Home Healthcare & Nursing Services"
        description="Reborn Home Care provides professional home nursing, patient care, elder care, physiotherapy, wound care and other home healthcare services in Bengaluru, Karnataka."
        path="/"
        image="/images/about.jpg"
      />

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