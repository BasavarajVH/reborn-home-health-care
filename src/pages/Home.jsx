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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.rebornhomecare.in/#organization",

    name: "Reborn Home Care",

    url: "https://www.rebornhomecare.in/",

    logo: "https://www.rebornhomecare.in/favicon.svg",

    description:
      "Reborn Home Care provides professional home nursing, patient care, elder care, physiotherapy, wound care and other home healthcare services in Bengaluru.",

    telephone: "+917829094405",

    areaServed: {
      "@type": "City",
      name: "Bengaluru",
    },

    serviceType: [
      "Home Nursing Care",
      "Patient Care",
      "Elder Care",
      "Physiotherapy",
      "Wound Care",
      "Diabetes Care",
      "Dementia Care",
      "Cancer Care",
    ],
  };

  return (
    <>
      {/* Homepage SEO */}
      <SEO
        title="Home Nursing & Elder Care Services in Bengaluru | Reborn Home Care"
        description="Reborn Home Care provides professional home nursing, patient care, elder care, physiotherapy, wound care and other home healthcare services at home in Bengaluru."
        path="/"
      />

      {/* Local Business Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <Navbar />

      <main>
        <Hero />

        <Services />

        <WhyChooseUs />

        <Stats />

        <Testimonials />

        <FAQ />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default Home;