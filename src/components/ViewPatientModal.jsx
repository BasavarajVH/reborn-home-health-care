const ViewPatientModal = ({ isOpen, onClose, patient }) => {
  if (!isOpen || !patient) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-6">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-blue-700">
            Patient Details
          </h2>

          <button
            onClick={onClose}
            className="text-2xl font-bold text-gray-500 hover:text-red-500"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-2 gap-5">

          <div>
            <p className="text-gray-500">Full Name</p>
            <h3 className="font-semibold">{patient.full_name}</h3>
          </div>

          <div>
            <p className="text-gray-500">Gender</p>
            <h3 className="font-semibold">{patient.gender}</h3>
          </div>

          <div>
            <p className="text-gray-500">Age</p>
            <h3 className="font-semibold">{patient.age}</h3>
          </div>

          <div>
            <p className="text-gray-500">Phone</p>
            <h3 className="font-semibold">{patient.phone}</h3>
          </div>

          <div>
            <p className="text-gray-500">Email</p>
            <h3 className="font-semibold">{patient.email || "-"}</h3>
          </div>

          <div>
            <p className="text-gray-500">Blood Group</p>
            <h3 className="font-semibold">{patient.blood_group || "-"}</h3>
          </div>

          <div className="col-span-2">
            <p className="text-gray-500">Address</p>
            <h3 className="font-semibold">{patient.address || "-"}</h3>
          </div>

          <div className="col-span-2">
            <p className="text-gray-500">Medical Notes</p>
            <h3 className="font-semibold">{patient.medical_notes || "-"}</h3>
          </div>

        </div>

        <div className="flex justify-end mt-8">
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default ViewPatientModal;