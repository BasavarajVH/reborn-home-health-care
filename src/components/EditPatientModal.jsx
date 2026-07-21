import { useEffect, useState } from "react";
import axios from "axios";

const EditPatientModal = ({ isOpen, onClose, patient, onUpdated }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (patient) {
      setFormData(patient);
    }
  }, [patient]);

  if (!isOpen || !patient) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:5000/api/patients/${patient.id}`,
        formData
      );

      onUpdated();
      onClose();
    } catch (err) {
      console.error(err);
      alert("Failed to update patient");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          Edit Patient
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">

          <input
            name="full_name"
            value={formData.full_name || ""}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            placeholder="Full Name"
          />

          <input
            name="phone"
            value={formData.phone || ""}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            placeholder="Phone"
          />

          <input
            name="age"
            value={formData.age || ""}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            placeholder="Age"
          />

          <input
            name="blood_group"
            value={formData.blood_group || ""}
            onChange={handleChange}
            className="border p-3 rounded-lg"
            placeholder="Blood Group"
          />

          <textarea
            name="address"
            value={formData.address || ""}
            onChange={handleChange}
            className="border p-3 rounded-lg col-span-2"
            placeholder="Address"
          />

          <textarea
            name="medical_notes"
            value={formData.medical_notes || ""}
            onChange={handleChange}
            className="border p-3 rounded-lg col-span-2"
            placeholder="Medical Notes"
          />

          <div className="col-span-2 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white px-5 py-2 rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
              Update Patient
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default EditPatientModal;