import { useEffect, useState } from "react";
import axios from "axios";

function RecentAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchRecentAppointments();
  }, []);

  const fetchRecentAppointments = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/recent"
      );

      if (res.data.success) {
        setAppointments(res.data.appointments);
      }
    } catch (error) {
      console.error("Recent Appointments Error:", error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-100 text-green-700";

      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Completed":
        return "bg-blue-100 text-blue-700";

      case "Cancelled":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          Recent Appointments
        </h2>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          View All
        </button>
      </div>

      {appointments.length === 0 ? (
        <p className="text-gray-500">
          No recent appointments found.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Patient</th>
                <th className="p-3 text-left">Service</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Time</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((appointment) => (
                <tr
                  key={appointment.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-3 font-medium">
                    {appointment.full_name}
                  </td>

                  <td className="p-3">
                    {appointment.service}
                  </td>

                  <td className="p-3">
                    {new Date(
                      appointment.appointment_date
                    ).toLocaleDateString()}
                  </td>

                  <td className="p-3">
                    {appointment.appointment_time}
                  </td>

                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                        appointment.status
                      )}`}
                    >
                      {appointment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default RecentAppointments;