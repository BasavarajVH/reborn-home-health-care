import {
  FaClipboardList,
  FaClock,
  FaCalendarCheck,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

function DashboardCards({ stats }) {
  const cards = [
    {
      title: "Total Appointments",
      value: stats?.totalAppointments || 0,
      icon: <FaClipboardList />,
      color: "bg-blue-600",
    },
    {
      title: "Pending",
      value: stats?.pending || 0,
      icon: <FaClock />,
      color: "bg-yellow-500",
    },
    {
      title: "Confirmed",
      value: stats?.confirmed || 0,
      icon: <FaCalendarCheck />,
      color: "bg-indigo-600",
    },
    {
      title: "Completed",
      value: stats?.completed || 0,
      icon: <FaCheckCircle />,
      color: "bg-green-600",
    },
    {
      title: "Cancelled",
      value: stats?.cancelled || 0,
      icon: <FaTimesCircle />,
      color: "bg-red-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${card.color} text-white rounded-xl shadow-lg p-6`}
        >
          <div className="text-4xl mb-4">{card.icon}</div>

          <h2 className="text-3xl font-bold">{card.value}</h2>

          <p>{card.title}</p>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;