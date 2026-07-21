import {
  FaUserNurse,
  FaShieldAlt,
  FaClock,
  FaHome,
  FaHeart,
  FaStar,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserNurse />,
    title: "Qualified Nurses",
    desc: "Certified and experienced healthcare professionals.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Verified Staff",
    desc: "Police-verified caregivers for your safety and peace of mind.",
  },
  {
    icon: <FaClock />,
    title: "24/7 Support",
    desc: "Healthcare assistance available whenever you need it.",
  },
  {
    icon: <FaHome />,
    title: "Home Visits",
    desc: "Hospital-quality care delivered in the comfort of your home.",
  },
  {
    icon: <FaHeart />,
    title: "Personalized Care",
    desc: "Customized healthcare plans designed for every patient.",
  },
  {
    icon: <FaStar />,
    title: "Trusted Service",
    desc: "Reliable, compassionate, and affordable home healthcare.",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold uppercase">
            Why Choose Us
          </span>

          <h2 className="text-4xl font-bold text-gray-800 mt-3">
            Why Choose Reborn?
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            We provide compassionate, professional, and reliable home healthcare
            services with qualified nurses and caregivers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-3xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-500">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;