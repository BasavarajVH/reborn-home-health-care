import { useEffect, useState } from "react";
import axios from "axios";

import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function MonthlyChart() {
  const [monthlyData, setMonthlyData] = useState([]);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const res = await axios.get(
        "https://reborn-home-health-care-api.onrender.com/api/analytics"
      );

      setMonthlyData(res.data.monthlyData || []);
    } catch (err) {
      console.error(err);
    }
  };

  const data = {
    labels: monthlyData.map((item) => `Month ${item.month}`),
    datasets: [
      {
        label: "Appointments",
        data: monthlyData.map((item) => item.total),
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">
        Monthly Appointments
      </h2>

      <Bar data={data} />
    </div>
  );
}

export default MonthlyChart;