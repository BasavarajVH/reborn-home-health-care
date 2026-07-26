import { useState } from "react";
import axios from "axios";

function Booking() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    address: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "https://reborn-home-health-care-api.onrender.com/api/bookings",
      formData
    );

    alert(response.data.message);

    setFormData({
      fullName: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      address: "",
      notes: "",
    });
  } catch (error) {
    console.error(error);

    alert(
      error.response?.data?.message ||
      "Failed to book appointment."
    );
  }
};

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-3xl p-10">

        <div className="text-center mb-10">
          <p className="text-green-600 font-semibold uppercase">
            Appointment
          </p>

          <h1 className="text-4xl font-bold text-gray-800 mt-2">
            Book a Home Visit
          </h1>

          <p className="text-gray-500 mt-3">
            Fill in your details and we'll contact you shortly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <select
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          >
            <option value="">Select Service</option>
            <option>Patient Care</option>
            <option>Elder Care</option>
            <option>Cancer Care</option>
            <option>Wound Dressing</option>
            <option>Nurse Home Visit</option>
            <option>Diabetes Care</option>
            <option>Physiotherapy</option>
            <option>Dementia Care</option>
          </select>

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="border rounded-xl p-4"
            />

            <input
              type="time"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              className="border rounded-xl p-4"
            />

          </div>

          <textarea
            rows="4"
            name="address"
            placeholder="Complete Address"
            required
            value={formData.address}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <textarea
            rows="3"
            name="notes"
            placeholder="Additional Notes (Optional)"
            value={formData.notes}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
          >
            Book Appointment
          </button>

        </form>

      </div>
    </section>
  );
}

export default Booking;