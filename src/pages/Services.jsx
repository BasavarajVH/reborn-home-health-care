import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import {
  FaUserNurse,
  FaWheelchair,
  FaHeartbeat,
  FaBandAid,
  FaSyringe,
  FaWalking,
  FaBrain,
  FaClinicMedical,
} from "react-icons/fa";

const services = [
  {
    slug: "patient-care",
    title: "Patient Care",
    icon: <FaUserNurse />,
    desc: "Complete patient care at home with trained caregivers.",
    image: "images/patient-care.jpg",
  },
  {
    slug: "elder-care",
    title: "Elder Care",
    icon: <FaWheelchair />,
    desc: "Compassionate care and support for senior citizens.",
    image: "/images/elder-care.jpg",
  },
  {
    slug: "cancer-care",
    title: "Cancer Care",
    icon: <FaHeartbeat />,
    desc: "Professional cancer patient care at home.",
    image: "/images/cancer-care.jpg",
  },
  {
    slug: "wound-care",
    title: "Wound Dressing",
    icon: <FaBandAid />,
    desc: "Expert wound dressing by qualified nurses.",
    image: "/images/wound-care.jpg",
  },
  {
    slug: "nursing-care",
    title: "Nurse Home Visit",
    icon: <FaClinicMedical />,
    desc: "Qualified nurses available for home visits.",
    image: "/images/nurse-home.jpg",
  },
  {
    slug: "diabetes-care",
    title: "Diabetes Care",
    icon: <FaSyringe />,
    desc: "Blood sugar monitoring and diabetes care.",
    image: "/images/diabetes.jpg",
  },
  {
    slug: "physiotherapy",
    title: "Physiotherapy",
    icon: <FaWalking />,
    desc: "Home physiotherapy for pain relief and recovery.",
    image: "/images/physiotherapy.jpg",
  },
  {
    slug: "dementia-care",
    title: "Dementia Care",
    icon: <FaBrain />,
    desc: "Specialized care for dementia patients.",
    image: "/images/dementia.jpg",
  },
];

function Services() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">
          <p className="text-green-600 font-semibold uppercase">
            Our Services
          </p>

          <h2 className="text-4xl font-bold text-gray-800 mt-2">
            We Care Like Family
          </h2>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Professional healthcare services delivered at your doorstep by
            experienced nurses and caregivers.
          </p>
        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          {services.map((service) => (

            <div
              key={service.slug}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >

              <img
                src={service.image}
                alt={service.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">

                <div className="text-4xl text-blue-600 mb-4">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-800">
                  {service.title}
                </h3>

                <p className="text-gray-500 mt-3 leading-7">
                  {service.desc}
                </p>

                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center mt-5 text-blue-600 font-semibold hover:text-blue-800 transition"
                >
                  Learn More →
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

      <SEO
      title="Home Healthcare Services"
      description="Explore Reborn Home Care services including patient care, elder care, cancer care, wound dressing, nurse home visits, diabetes care, physiotherapy and dementia care."
      path="/services"
      image="/images/patient-care.jpg"
/>
    </section>
  );
}

export default Services;