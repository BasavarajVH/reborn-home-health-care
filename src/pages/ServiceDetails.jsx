import { Link, useParams } from "react-router-dom";
import services from "../data/servicesData";
import { FaCheckCircle, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import SEO from "../components/SEO";

function ServiceDetails() {
  const { slug } = useParams();

  // Find selected service
  const service = services.find((item) => item.slug === slug);

  // Service-specific SEO data
  const seoData = {
    "patient-care": {
      seoTitle: "Best Patient Care at Home in Bengaluru",
      h1: "Patient Care at Home in Bengaluru",
      description:
        "Reborn Home Care provides compassionate patient care at home in Bengaluru with trained caregivers and personalized support for your loved ones.",
    },

    "elder-care": {
      seoTitle: "Best Elder Care at Home in Bengaluru",
      h1: "Elder Care at Home in Bengaluru",
      description:
        "Reborn Home Care provides compassionate elder care at home in Bengaluru with personalized support, assistance and comfort for senior citizens.",
    },

    "cancer-care": {
      seoTitle: "Best Cancer Care at Home in Bengaluru",
      h1: "Cancer Care at Home in Bengaluru",
      description:
        "Reborn Home Care provides compassionate cancer patient care at home in Bengaluru with personalized assistance, comfort and healthcare support.",
    },

    "wound-care": {
      seoTitle: "Best Wound Care at Home in Bengaluru",
      h1: "Wound Care at Home in Bengaluru",
      description:
        "Reborn Home Care provides professional wound dressing and wound care at home in Bengaluru with trained healthcare professionals.",
    },

    "nursing-care": {
      seoTitle: "Best Home Nursing Services in Bengaluru",
      h1: "Home Nursing Services in Bengaluru",
      description:
        "Reborn Home Care provides professional home nursing services in Bengaluru with qualified nurses offering personalized healthcare support at home.",
    },

    "diabetes-care": {
      seoTitle: "Best Diabetes Care at Home in Bengaluru",
      h1: "Diabetes Care at Home in Bengaluru",
      description:
        "Reborn Home Care provides diabetes care at home in Bengaluru, including monitoring, assistance and personalized support for patients.",
    },

    "physiotherapy": {
      seoTitle: "Best Physiotherapy at Home in Bengaluru",
      h1: "Physiotherapy at Home in Bengaluru",
      description:
        "Reborn Home Care provides professional physiotherapy at home in Bengaluru to support mobility, recovery, rehabilitation and physical well-being.",
    },

    "dementia-care": {
      seoTitle: "Best Dementia Care at Home in Bengaluru",
      h1: "Dementia Care at Home in Bengaluru",
      description:
        "Reborn Home Care provides compassionate dementia care at home in Bengaluru with personalized support for patients and their families.",
    },
  };

  // Service not found
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center px-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Service Not Found
          </h1>

          <p className="text-gray-600 mb-6">
            The healthcare service you are looking for could not be found.
          </p>

          <Link
            to="/services"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  // Current service SEO information
  const currentSEO = seoData[slug] || {
    seoTitle: `${service.title} at Home in Bengaluru`,
    h1: `${service.title} at Home in Bengaluru`,
    description: `Reborn Home Care provides professional ${service.title.toLowerCase()} services at home in Bengaluru.`,
  };

  return (
    <div className="bg-gray-50">
      {/* =========================
          SEO
      ========================== */}

      <SEO
        title={`${currentSEO.seoTitle} | Reborn Home Care`}
        description={currentSEO.description}
        path={`/services/${service.slug}`}
        image={service.image}
      />

      {/* =========================
          HERO SECTION
      ========================== */}

      <section className="relative">
        <img
          src={service.image}
          alt={`${currentSEO.h1} - Reborn Home Care`}
          className="w-full h-[400px] object-cover"
          loading="eager"
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {currentSEO.h1}
          </h1>

          <p className="max-w-2xl text-lg">
            {service.description}
          </p>
        </div>
      </section>

      {/* =========================
          ABOUT SERVICE
      ========================== */}

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">
          About {currentSEO.h1}
        </h2>

        <p className="text-gray-700 leading-8 text-lg">
          {service.description} Our experienced healthcare professionals
          provide safe, compassionate and personalized care at home to
          support recovery, comfort and overall well-being.
        </p>
      </section>

      {/* =========================
          SERVICES INCLUDED
      ========================== */}

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">
          Services Included
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {service.features?.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-xl p-5 flex items-center gap-4"
            >
              <FaCheckCircle className="text-green-600 text-2xl flex-shrink-0" />

              <span className="text-lg font-medium text-gray-800">
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          WHY CHOOSE REBORN
      ========================== */}

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-600 mb-8">
            Why Choose Reborn Home Care?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">
                Experienced Team
              </h3>

              <p className="text-gray-700">
                Qualified nurses and caregivers providing professional
                and compassionate home healthcare support.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">
                Affordable Care
              </h3>

              <p className="text-gray-700">
                High-quality healthcare services designed to provide
                reliable and affordable support for families.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">
                24×7 Support
              </h3>

              <p className="text-gray-700">
                Healthcare assistance and support whenever you need
                professional care at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FAQ
      ========================== */}

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="font-bold text-lg">
              Is {currentSEO.h1} available at home?
            </h3>

            <p className="mt-2 text-gray-600">
              Yes. Reborn Home Care provides professional healthcare
              services directly at your home in Bengaluru.
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="font-bold text-lg">
              Are your healthcare professionals trained?
            </h3>

            <p className="mt-2 text-gray-600">
              Our healthcare professionals are trained and experienced
              in providing home healthcare support.
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="font-bold text-lg">
              How can I book this service?
            </h3>

            <p className="mt-2 text-gray-600">
              You can book an appointment through our website or contact
              Reborn Home Care by phone or WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          CALL TO ACTION
      ========================== */}

      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Need {currentSEO.h1}?
          </h2>

          <p className="mb-8">
            Our healthcare team is ready to help you with professional
            home healthcare support in Bengaluru.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/booking"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Book Appointment
            </Link>

            <a
              href="https://wa.me/917829094405?text=Hello!%20I%20would%20like%20to%20book%20a%20home%20healthcare%20service."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Reborn Home Care on WhatsApp"
              className="bg-green-500 px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-green-600 transition"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            <a
              href="tel:+917829094405"
              aria-label="Call Reborn Home Care"
              className="bg-red-500 px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-red-600 transition"
            >
              <FaPhoneAlt />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceDetails;