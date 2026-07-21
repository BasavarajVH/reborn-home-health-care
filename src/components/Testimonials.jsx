import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Patient's Daughter",
    image: "/images/review1.jpg",
    review:
      "Reborn Home Health Care provided excellent service. The nurse was professional, caring, and treated my mother like family.",
  },
  {
    name: "Ramesh Kumar",
    role: "Patient",
    image: "/images/review2.jpg",
    review:
      "The booking process was simple, and the caregiver arrived on time. Highly recommended for home healthcare services.",
  },
  {
    name: "Anita Patel",
    role: "Family Member",
    image: "/images/review3.jpg",
    review:
      "Very compassionate staff. Their elder care service gave us peace of mind knowing our father was in safe hands.",
  },
];

function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold uppercase">
            Testimonials
          </span>

          <h2 className="text-4xl font-bold text-gray-800 mt-2">
            What Our Clients Say
          </h2>

          <p className="text-gray-500 mt-4">
            Trusted by families for compassionate home healthcare.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className="flex justify-center mb-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
                />
              </div>

              <div className="flex justify-center text-yellow-400 mb-4">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="text-gray-600 text-center italic">
                "{item.review}"
              </p>

              <h3 className="text-xl font-bold text-center mt-6">
                {item.name}
              </h3>

              <p className="text-blue-600 text-center">
                {item.role}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Testimonials;