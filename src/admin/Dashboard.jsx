import { useEffect, useState } from "react";
import axios from "axios";

import DashboardCards from "../components/DashboardCards";
import MonthlyChart from "../components/MonthlyChart";
import ServicePieChart from "../components/ServicePieChart";
import TodayAppointments from "../components/TodayAppointments";
import RecentAppointments from "../components/RecentAppointments";

function Dashboard() {
  const [stats, setStats] = useState({
    totalAppointments: 0,
    pending: 0,
    confirmed: 0,
    completed: 0,
    cancelled: 0,
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/dashboard/stats"
      );

      if (res.data.success) {
        setStats(res.data.stats);
      }
    } catch (err) {
      console.error("Dashboard Error:", err);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Dashboard
      </h1>

      {/* Statistics */}
      <DashboardCards stats={stats} />

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <MonthlyChart />
        <ServicePieChart />
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <TodayAppointments />
        <RecentAppointments />
      </div>
    </div>
  );
}

export default Dashboard;