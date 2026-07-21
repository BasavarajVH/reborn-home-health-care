import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "How do I book a home healthcare service?",
    answer:
      "You can book online through our website or call our support team. Choose your service, preferred date, and we'll confirm your appointment.",
  },
  {
    question: "Are your nurses qualified and verified?",
    answer:
      "Yes. All our nurses and caregivers are qualified, experienced, and background verified before joining our team.",
  },
  {
    question: "Which areas do you provide services in?",
    answer:
      "We provide home healthcare services across our service locations. Contact us to confirm availability in your area.",
  },
  {
    question: "Do you provide emergency home visits?",
    answer:
      "Yes. Depending on staff availability, we provide emergency home healthcare support 24/7.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept UPI, Debit/Credit Cards, Net Banking, Cash, and other online payment methods.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-green-600 font-semibold uppercase">
            Frequently Asked Questions
          </p>

          <h2 className="text-4xl font-bold text-gray-800 mt-3">
            Have Questions? We Have Answers.
          </h2>

          <p className="text-gray-500 mt-4">
            Everything you need to know about our home healthcare services.
          </p>
        </div>

        {faqData.map((item, index) => (
          <div
            key={index}
            className="mb-5 border rounded-2xl overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-blue-50 transition"
            >
              <span className="font-semibold text-lg">
                {item.question}
              </span>

              {openIndex === index ? (
                <FaMinus className="text-blue-600" />
              ) : (
                <FaPlus className="text-blue-600" />
              )}
            </button>

            {openIndex === index && (
              <div className="px-5 pb-5 text-gray-600">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;