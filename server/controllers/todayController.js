import db from "../config/db.js";

export const getTodayAppointments = (req, res) => {
  const sql = `
    SELECT *
    FROM appointments
    WHERE appointment_date = CURDATE()
    ORDER BY appointment_time ASC
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