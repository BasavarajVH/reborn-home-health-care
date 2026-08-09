import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Professional Home Healthcare
            <span className="text-blue-600 block">
              Services in Bengaluru
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            Compassionate home nursing, patient care, elder care and
            physiotherapy services delivered by experienced nurses and
            caregivers at your doorstep in Bengaluru.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            {/* Book Appointment */}
            <Link
              to="/booking"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Book Appointment
            </Link>

            {/* Call Now */}
            <a
              href="tel:+917829094405"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
            >
              Call Now
            </a>

          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="/hero.png"
            alt="Home healthcare nurse providing elder care in Bengaluru"
            className="w-full"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;