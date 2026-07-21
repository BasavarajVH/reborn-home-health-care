import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-green-600 font-semibold uppercase">
            Contact Us
          </p>

          <h1 className="text-5xl font-bold text-gray-800 mt-2">
            Get In Touch
          </h1>

          <p className="text-gray-500 mt-4">
            We're here to help you and your loved ones with compassionate home healthcare.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-3xl font-bold mb-8">
              Contact Information
            </h2>

            <div className="space-y-8">

              <div className="flex items-center gap-5">
                <FaPhoneAlt className="text-2xl text-green-600" />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p>+91 7829094405</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaEnvelope className="text-2xl text-blue-600" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p>rebornhomehealthcareservice@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaMapMarkerAlt className="text-2xl text-red-600" />
                <div>
                  <h3 className="font-bold">Location</h3>
                  <p>Bengaluru, Karnataka, India</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaClock className="text-2xl text-yellow-500" />
                <div>
                  <h3 className="font-bold">Working Hours</h3>
                  <p>24 Hours / 7 Days</p>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-3xl font-bold mb-8">
              Send a Message
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-xl p-4"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl p-4"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-xl p-4"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border rounded-xl p-4"
              />

              <button
                className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

        {/* Google Map */}
        <div className="mt-16 rounded-3xl overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4789927636552!2d77.55763259999999!3d13.0051407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d0068777847%3A0x705ac4e4dc5070c8!2sReborn%20home%20health%20care%20service!5e0!3m2!1sen!2sin!4v1784610057428!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}

export default Contact;