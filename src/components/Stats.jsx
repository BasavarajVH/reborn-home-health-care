import {
  FaUserInjured,
  FaUserNurse,
  FaSmile,
  FaClock,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUserInjured />,
    number: "5000+",
    title: "Happy Patients",
  },
  {
    icon: <FaUserNurse />,
    number: "250+",
    title: "Qualified Nurses",
  },
  {
    icon: <FaSmile />,
    number: "98%",
    title: "Patient Satisfaction",
  },
  {
    icon: <FaClock />,
    number: "24/7",
    title: "Emergency Support",
  },
];

function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Trusted by Thousands of Families
          </h2>

          <p className="mt-4 text-blue-100">
            Delivering quality home healthcare with compassion and dedication.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center hover:scale-105 transition duration-300"
            >
              <div className="text-5xl mb-5 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold">
                {item.number}
              </h3>

              <p className="mt-3 text-lg">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;