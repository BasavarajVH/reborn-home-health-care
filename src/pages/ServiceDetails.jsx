import { Link, useParams } from "react-router-dom";
import services from "../data/servicesData";
import { FaCheckCircle, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import SEO from "../components/SEO";

function ServiceDetails() {
  const { slug } = useParams();

  // Find the selected service
  const service = services.find((item) => item.slug === slug);

  // Service-specific SEO data
  const seoData = {
    "patient-care": {
      title: "Patient Care at Home",
      description:
        "Professional patient care services at home from Reborn Home Care. Get compassionate and personalized healthcare support for your loved ones.",
    },

    "elder-care": {
      title: "Elder Care at Home",
      description:
        "Compassionate elder care services at home from Reborn Home Care, providing personalized support, assistance and comfort for senior citizens.",
    },

    "cancer-care": {
      title: "Cancer Patient Care at Home",
      description:
        "Compassionate home care support for cancer patients from Reborn Home Care, providing personalized assistance and comfort at home.",
    },

    "wound-care": {
      title: "Wound Dressing at Home",
      description:
        "Professional wound dressing and wound care services at home from Reborn Home Care with trained healthcare professionals.",
    },

    "nursing-care": {
      title: "Nurse Home Visit",
      description:
        "Book professional nurse home visits with Reborn Home Care for nursing assistance, healthcare support and personalized care at home.",
    },

    "diabetes-care": {
      title: "Diabetes Care at Home",
      description:
        "Home diabetes care services from Reborn Home Care, including monitoring, assistance and personalized support for patients at home.",
    },

    "physiotherapy": {
      title: "Physiotherapy at Home",
      description:
        "Professional physiotherapy services at home from Reborn Home Care to support mobility, recovery, rehabilitation and better physical health.",
    },

    "dementia-care": {
      title: "Dementia Care at Home",
      description:
        "Compassionate dementia care and personalized home support from Reborn Home Care for patients and their families.",
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

  // Get SEO information for the current service
  const currentSEO = seoData[slug] || {
    title: service.title,
    description:
      service.description ||
      `Learn more about ${service.title} from Reborn Home Care.`,
  };

  return (
    <div className="bg-gray-50">

      {/* =========================
          SEO
      ========================== */}

      <SEO
        title={currentSEO.title}
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
          alt={`${service.title} - Reborn Home Care`}
          className="w-full h-[400px] object-cover"
          loading="eager"
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {service.title}
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
          About {service.title}
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

            {/* Experienced Team */}
            <div className="bg-blue-50 p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">
                Experienced Team
              </h3>

              <p className="text-gray-700">
                Qualified nurses and caregivers providing professional
                and compassionate home healthcare support.
              </p>
            </div>

            {/* Affordable Care */}
            <div className="bg-blue-50 p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">
                Affordable Care
              </h3>

              <p className="text-gray-700">
                High-quality healthcare services designed to provide
                reliable and affordable support for families.
              </p>
            </div>

            {/* 24x7 Support */}
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

          {/* FAQ 1 */}
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="font-bold text-lg">
              Is {service.title} available at home?
            </h3>

            <p className="mt-2 text-gray-600">
              Yes. Reborn Home Care provides professional healthcare
              services directly at your home.
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="font-bold text-lg">
              Are your healthcare professionals trained?
            </h3>

            <p className="mt-2 text-gray-600">
              Our healthcare professionals are trained and experienced
              in providing home healthcare support.
            </p>
          </div>

          {/* FAQ 3 */}
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
            Need {service.title}?
          </h2>

          <p className="mb-8">
            Our healthcare team is ready to help you with professional
            home healthcare support.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            {/* Booking */}
            <Link
              to="/booking"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Book Appointment
            </Link>

            {/* WhatsApp */}
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

            {/* Phone */}
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