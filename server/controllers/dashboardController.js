import db from "../config/db.js";

export const getDashboardStats = (req, res) => {
  const sql = `
    SELECT
      COUNT(*) AS totalAppointments,
      SUM(status='Pending') AS pending,
      SUM(status='Confirmed') AS confirmed,
      SUM(status='Completed') AS completed,
      SUM(status='Cancelled') AS cancelled
    FROM appointments;
  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Database Error",
      });
    }

    res.json({
      success: true,
      stats: result[0],
    });
  });
};