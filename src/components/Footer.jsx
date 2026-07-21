

import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <h2 className="text-3xl font-bold text-blue-400">
            Reborn
          </h2>

          <p className="text-gray-400 mt-3">
            Compassionate Care, Right at Your Doorstep.
          </p>

          <div className="flex gap-4 mt-6">

            <a
              href="https://www.facebook.com/share/18CqrFDqti/"
              className="bg-blue-600 p-3 rounded-full hover:bg-blue-700"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/rebornhomehealthcare?igsh=MTltaGZianp1ZGh4cQ=="
              className="bg-pink-500 p-3 rounded-full hover:bg-pink-600"
            >
              <FaInstagram />
            </a>

            

          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/booking">Book a Visit</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Our Services
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>Patient Care</li>
            <li>Elder Care</li>
            <li>Cancer Care</li>
            <li>Physiotherapy</li>
            <li>Nurse Home Visits</li>
            <li>Dementia Care</li>
          </ul>
        </div>

        {/* Contact */}
        <div>

          <h3 className="text-xl font-semibold mb-5">
            Contact Us
          </h3>

          <div className="space-y-4 text-gray-400">

            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-400" />
              +91 7829094405
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400" />
              rebornhomehealthcareservice@gmail.com
            </p>

            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-red-400 mt-1" />
              Bengaluru, Karnataka, India
            </p>

          </div>

        </div>

      </div>

      <div className="border-t border-gray-700 py-6 text-center text-gray-400">
        © 2026 Reborn Home Health Care Service. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;