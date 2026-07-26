import { useEffect, useState } from "react";
import axios from "axios";

import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function ServicePieChart() {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const res = await axios.get(
        "https://reborn-home-health-care-api.onrender.com/api/analytics"
      );

      if (res.data.success) {
        setServiceData(res.data.serviceData || []);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const chartData = {
    labels: serviceData.map((item) => item.service),

    datasets: [
      {
        label: "Services",
        data: serviceData.map((item) => item.total),

        backgroundColor: [
          "#3B82F6",
          "#10B981",
          "#F59E0B",
          "#EF4444",
          "#8B5CF6",
          "#06B6D4",
          "#EC4899",
        ],

        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">
        Service Distribution
      </h2>

      {serviceData.length === 0 ? (
        <p className="text-gray-500 text-center">
          No service data available
        </p>
      ) : (
        <Pie data={chartData} />
      )}
    </div>
  );
}

export default ServicePieChart;