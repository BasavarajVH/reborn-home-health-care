import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Right Content */}
      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;