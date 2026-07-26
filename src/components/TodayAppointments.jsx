import { useEffect, useState } from "react";
import axios from "axios";

function TodayAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchTodayAppointments();
  }, []);

  const fetchTodayAppointments = async () => {
    try {
      const res = await axios.get(
        "https://reborn-home-health-care-api.onrender.com/api/today"
      );

      if (res.data.success) {
        setAppointments(res.data.appointments);
      }
    } catch (error) {
      console.error(error);
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
      <h2 className="text-2xl font-bold mb-6">
        Today's Appointments
      </h2>

      {appointments.length === 0 ? (
        <p className="text-gray-500">
          No appointments scheduled for today.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Patient</th>
                <th className="p-3 text-left">Service</th>
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
                  <td className="p-3">
                    {appointment.full_name}
                  </td>

                  <td className="p-3">
                    {appointment.service}
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

export default TodayAppointments;