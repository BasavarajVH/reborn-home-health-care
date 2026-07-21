import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917829094405?text=Hello%21%20%F0%9F%91%8B%20I%20would%20like%20to%20book%20a%20home%20healthcare%20service."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition z-50"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}

export default WhatsAppButton;