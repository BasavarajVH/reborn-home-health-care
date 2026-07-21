import { Link, useParams } from "react-router-dom";
import services from "../data/servicesData";
import { FaCheckCircle, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function ServiceDetails() {
  const { slug } = useParams();

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Service Not Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">

      {/* Hero */}
      <section className="relative">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-[400px] object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-5xl font-bold mb-4">
            {service.title}
          </h1>

          <p className="max-w-2xl text-lg">
            {service.description}
          </p>
        </div>
      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-blue-600 mb-6">
          About {service.title}
        </h2>

        <p className="text-gray-700 leading-8 text-lg">
          {service.description}

          Our experienced healthcare professionals provide safe,
          compassionate and personalized treatment at home to improve
          your recovery and overall well-being.
        </p>

      </section>

      {/* Services Included */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <h2 className="text-3xl font-bold text-blue-600 mb-8">
          Services Included
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {service.features.map((item, index) => (

            <div
              key={index}
              className="bg-white shadow rounded-xl p-5 flex items-center gap-4"
            >
              <FaCheckCircle className="text-green-600 text-2xl" />

              <span className="text-lg font-medium">
                {item}
              </span>

            </div>

          ))}

        </div>

      </section>

      {/* Why Choose */}

      <section className="bg-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-blue-600 mb-8">
            Why Choose Reborn?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-blue-50 p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">
                Experienced Team
              </h3>

              <p>
                Qualified nurses and caregivers with years of experience.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">
                Affordable Care
              </h3>

              <p>
                High-quality healthcare services at affordable prices.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">
                24×7 Support
              </h3>

              <p>
                Emergency assistance whenever you need us.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-blue-600 mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="font-bold">
              Is this service available at home?
            </h3>

            <p className="mt-2 text-gray-600">
              Yes. We provide healthcare services directly at your home.
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="font-bold">
              Are your nurses certified?
            </h3>

            <p className="mt-2 text-gray-600">
              Yes. All our healthcare professionals are trained and experienced.
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="font-bold">
              How can I book this service?
            </h3>

            <p className="mt-2 text-gray-600">
              You can book online or contact us by phone or WhatsApp.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-blue-600 text-white py-16">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-4">
            Need {service.title}?
          </h2>

          <p className="mb-8">
            Our healthcare professionals are ready to help you.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <Link
              to="/booking"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100"
            >
              Book Appointment
            </Link>

            <a
              href="https://wa.me/917829094405?text=Hello!%20I%20would%20like%20to%20book%20a%20home%20healthcare%20service."
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-green-600"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            <a
              href="tel:+917829094405"
              className="bg-red-500 px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-red-600"
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