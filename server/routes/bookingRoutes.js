import express from "express";
import db from "../config/db.js";

const router = express.Router();

router.post("/", (req, res) => {
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);

  const {
    fullName,
    phone,
    service,
    date,
    time,
    address,
    notes,
  } = req.body || {};

  const sql = `
    INSERT INTO appointments
    (full_name, phone, service, appointment_date, appointment_time, address, notes)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [fullName, phone, service, date, time, address, notes],
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          success: false,
          message: "Database Error",
        });
      }

      res.status(201).json({
        success: true,
        message: "Appointment Booked Successfully",
      });
    }
  );
});

// Get All Appointments
router.get("/", (req, res) => {
  const sql = `
    SELECT * FROM appointments
    ORDER BY created_at DESC
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);

      return res.status(500).json({
        success: false,
        message: "Database Error",
      });
    }

    res.json({
      success: true,
      appointments: results,
    });
  });
});

// Update Appointment Status
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const sql = "UPDATE appointments SET status = ? WHERE id = ?";

  db.query(sql, [status, id], (err) => {
    if (err) {
      console.error(err);

      return res.status(500).json({
        success: false,
        message: "Database Error",
      });
    }

    res.json({
      success: true,
      message: "Status Updated Successfully",
    });
  });
});

// Delete Appointment
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM appointments WHERE id = ?";

  db.query(sql, [id], (err) => {
    if (err) {
      console.error(err);

      return res.status(500).json({
        success: false,
        message: "Database Error",
      });
    }

    res.json({
      success: true,
      message: "Appointment Deleted Successfully",
    });
  });
});

export default router;