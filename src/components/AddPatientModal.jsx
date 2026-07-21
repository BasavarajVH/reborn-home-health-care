import { useState } from "react";
import axios from "axios";

const AddPatientModal = ({ isOpen, onClose, onPatientAdded }) => {
  const [formData, setFormData] = useState({
    full_name: "",
    gender: "Male",
    age: "",
    phone: "",
    email: "",
    address: "",
    blood_group: "",
    emergency_contact: "",
    medical_notes: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/patients", formData);

      alert("Patient added successfully!");

      onPatientAdded();
      onClose();

      setFormData({
        full_name: "",
        gender: "Male",
        age: "",
        phone: "",
        email: "",
        address: "",
        blood_group: "",
        emergency_contact: "",
        medical_notes: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to add patient");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-6">
        <h2 className="text-2xl font-bold text-blue-700 mb-5">
          Add Patient
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">

          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            value={formData.full_name}
            onChange={handleChange}
            className="border rounded-lg p-3"
            required
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border rounded-lg p-3"
          >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="border rounded-lg p-3"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="border rounded-lg p-3"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <input
            type="text"
            name="blood_group"
            placeholder="Blood Group"
            value={formData.blood_group}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <input
            type="text"
            name="emergency_contact"
            placeholder="Emergency Contact"
            value={formData.emergency_contact}
            onChange={handleChange}
            className="border rounded-lg p-3"
          />

          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="border rounded-lg p-3 col-span-2"
          />

          <textarea
            name="medical_notes"
            placeholder="Medical Notes"
            value={formData.medical_notes}
            onChange={handleChange}
            className="border rounded-lg p-3 col-span-2"
          />

          <div className="col-span-2 flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-gray-400 text-white"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Save Patient
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddPatientModal;