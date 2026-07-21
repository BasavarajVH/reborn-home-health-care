import { FaHeartbeat, FaUserNurse, FaHandsHelping } from "react-icons/fa";

function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-green-600 font-semibold uppercase">
            About Reborn
          </p>

          <h1 className="text-5xl font-bold text-gray-800 mt-3">
            Compassionate Healthcare at Your Doorstep
          </h1>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
            Reborn Home Health Care Service provides professional, reliable,
            and compassionate healthcare services in the comfort of your home.
            Our qualified nurses and caregivers are dedicated to improving the
            quality of life for every patient.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <img
            src="/images/about1.png"
            alt="Healthcare Team"
            className="rounded-3xl shadow-xl"
          />

          <div>

            <h2 className="text-4xl font-bold mb-6">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-8">
              Our mission is to provide affordable, personalized, and
              high-quality healthcare services at home, ensuring dignity,
              comfort, and peace of mind for every patient and their family.
            </p>

            <div className="grid grid-cols-1 gap-6 mt-10">

              <div className="flex gap-5">
                <FaHeartbeat className="text-4xl text-red-500" />
                <div>
                  <h3 className="font-bold text-xl">
                    Compassionate Care
                  </h3>
                  <p className="text-gray-500">
                    Every patient is treated with empathy, respect, and kindness.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <FaUserNurse className="text-4xl text-blue-600" />
                <div>
                  <h3 className="font-bold text-xl">
                    Skilled Professionals
                  </h3>
                  <p className="text-gray-500">
                    Certified nurses and caregivers delivering quality care.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <FaHandsHelping className="text-4xl text-green-600" />
                <div>
                  <h3 className="font-bold text-xl">
                    Personalized Support
                  </h3>
                  <p className="text-gray-500">
                    Care plans tailored to every patient's unique needs.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;