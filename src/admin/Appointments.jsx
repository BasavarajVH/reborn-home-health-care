import { useEffect, useState } from "react";
import axios from "axios";

function Appointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/bookings");
      setAppointments(res.data.appointments || []);
    } catch (err) {
      console.error("Error fetching appointments:", err);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:5000/api/bookings/${id}`, {
        status,
      });

      fetchAppointments();
    } catch (err) {
      console.error(err);
      alert("Failed to update appointment status");
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "Confirmed":
        return "bg-blue-100 text-blue-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Appointment Management
      </h1>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-4 text-left">Patient</th>
              <th className="text-left">Phone</th>
              <th className="text-left">Service</th>
              <th className="text-left">Date</th>
              <th className="text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {appointments.length > 0 ? (
              appointments.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-4 font-medium">
                    {item.full_name}
                  </td>

                  <td>{item.phone}</td>

                  <td>{item.service}</td>

                  <td>
                    {new Date(
                      item.appointment_date
                    ).toLocaleDateString()}
                  </td>

                  <td>
                    <select
                      value={item.status}
                      onChange={(e) =>
                        updateStatus(item.id, e.target.value)
                      }
                      className={`px-3 py-2 rounded-lg border font-medium ${getStatusColor(
                        item.status
                      )}`}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-8 text-gray-500"
                >
                  No appointments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Appointments;