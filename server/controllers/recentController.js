import db from "../config/db.js";

export const getRecentAppointments = (req, res) => {
  const sql = `
    SELECT *
    FROM appointments
    ORDER BY created_at DESC
    LIMIT 5
  `;

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        error: err,
      });
    }

    res.json({
      success: true,
      appointments: results,
    });
  });
};