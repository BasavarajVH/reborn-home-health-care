import { useEffect, useState } from "react";
import axios from "axios";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaSearch,
  FaEye,
} from "react-icons/fa";

import AddPatientModal from "../components/AddPatientModal";
import EditPatientModal from "../components/EditPatientModal";
import ViewPatientModal from "../components/ViewPatientModal";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);

  const [selectedPatient, setSelectedPatient] = useState(null);

  const fetchPatients = async () => {
    try {
      const res = await axios.get("https://reborn-home-health-care-api.onrender.com/api/patients");
      setPatients(res.data.patients);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this patient?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`https://reborn-home-health-care-api.onrender.com/api/patients/${id}`);
      alert("Patient deleted successfully.");
      fetchPatients();
    } catch (err) {
      console.error(err);
      alert("Failed to delete patient.");
    }
  };

  const filteredPatients = patients.filter(
    (patient) =>
      patient.full_name.toLowerCase().includes(search.toLowerCase()) ||
      patient.phone.includes(search)
  );

  return (
    <div className="p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-700">
          Patient Management
        </h1>

        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg flex items-center gap-2"
        >
          <FaPlus />
          Add Patient
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-5">
        <FaSearch className="absolute top-4 left-3 text-gray-500" />

        <input
          type="text"
          placeholder="Search by name or phone..."
          className="w-full border rounded-lg py-3 pl-10 pr-3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3">Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Blood Group</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredPatients.length > 0 ? (
              filteredPatients.map((patient) => (
                <tr
                  key={patient.id}
                  className="border-b hover:bg-gray-100"
                >
                  <td className="p-3">{patient.full_name}</td>
                  <td>{patient.age}</td>
                  <td>{patient.gender}</td>
                  <td>{patient.phone}</td>
                  <td>{patient.blood_group}</td>

                  <td className="p-3">
                    <div className="flex gap-4">

                      <button
                        onClick={() => {
                          setSelectedPatient(patient);
                          setShowViewModal(true);
                        }}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <FaEye />
                      </button>

                      <button
                        onClick={() => {
                          setSelectedPatient(patient);
                          setShowEditModal(true);
                        }}
                        className="text-green-600 hover:text-green-800"
                      >
                        <FaEdit />
                      </button>

                      <button
                        onClick={() => handleDelete(patient.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrash />
                      </button>

                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-6 text-gray-500"
                >
                  No patients found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <AddPatientModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onPatientAdded={fetchPatients}
      />

      <EditPatientModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        patient={selectedPatient}
        onUpdated={fetchPatients}
      />

      <ViewPatientModal
        isOpen={showViewModal}
        onClose={() => setShowViewModal(false)}
        patient={selectedPatient}
      />

    </div>
  );
};

export default Patients;