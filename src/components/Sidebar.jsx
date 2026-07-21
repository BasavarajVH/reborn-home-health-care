import { NavLink, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaCalendarCheck,
  FaUsers,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  const navigate = useNavigate();

  const menu = [
    {
      name: "Dashboard",
      icon: <FaTachometerAlt />,
      path: "/admin/dashboard",
    },
    {
      name: "Appointments",
      icon: <FaCalendarCheck />,
      path: "/admin/appointments",
    },
    {
      name: "Patients",
      icon: <FaUsers />,
      path: "/admin/patients",
    },
    {
      name: "Settings",
      icon: <FaCog />,
      path: "/admin/settings",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove if you store login token
    navigate("/admin/login");
  };

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white flex flex-col">
      {/* Logo */}
      <div className="p-6 text-center border-b border-slate-700">
        <h2 className="text-2xl font-bold">Reborn Admin</h2>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-2">
        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-600 text-gray-200"
              }`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-slate-700">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 p-3 w-full rounded-lg bg-red-600 hover:bg-red-700 transition"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;