import db from "../config/db.js";

export const getAnalytics = (req, res) => {

  const monthlySQL = `
    SELECT
      MONTH(appointment_date) AS month,
      COUNT(*) AS total
    FROM appointments
    GROUP BY MONTH(appointment_date)
    ORDER BY month
  `;

  const serviceSQL = `
    SELECT
      service,
      COUNT(*) AS total
    FROM appointments
    GROUP BY service
  `;

  db.query(monthlySQL, (err, monthlyData) => {

    if (err)
      return res.status(500).json(err);

    db.query(serviceSQL, (err2, serviceData) => {

      if (err2)
        return res.status(500).json(err2);

      res.json({
        success: true,
        monthlyData,
        serviceData,
      });

    });

  });

};