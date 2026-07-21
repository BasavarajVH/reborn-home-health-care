import db from "../config/db.js";

// Get all patients
export const getPatients = (req, res) => {
  db.query("SELECT * FROM patients ORDER BY id DESC", (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    res.json({
      success: true,
      patients: results,
    });
  });
};

// Add patient
export const addPatient = (req, res) => {
  const {
    full_name,
    gender,
    age,
    phone,
    email,
    address,
    blood_group,
    emergency_contact,
    medical_notes,
  } = req.body;

  const sql = `
    INSERT INTO patients
    (full_name, gender, age, phone, email, address, blood_group, emergency_contact, medical_notes)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      full_name,
      gender,
      age,
      phone,
      email,
      address,
      blood_group,
      emergency_contact,
      medical_notes,
    ],
    (err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      res.json({
        success: true,
        message: "Patient added successfully",
      });
    }
  );
};

// Get one patient
export const getPatient = (req, res) => {
  db.query(
    "SELECT * FROM patients WHERE id = ?",
    [req.params.id],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      res.json({
        success: true,
        patient: result[0],
      });
    }
  );
};

// Update patient
export const updatePatient = (req, res) => {
  const {
    full_name,
    gender,
    age,
    phone,
    email,
    address,
    blood_group,
    emergency_contact,
    medical_notes,
  } = req.body;

  const sql = `
    UPDATE patients
    SET
      full_name = ?,
      gender = ?,
      age = ?,
      phone = ?,
      email = ?,
      address = ?,
      blood_group = ?,
      emergency_contact = ?,
      medical_notes = ?
    WHERE id = ?
  `;

  db.query(
    sql,
    [
      full_name,
      gender,
      age,
      phone,
      email,
      address,
      blood_group,
      emergency_contact,
      medical_notes,
      req.params.id,
    ],
    (err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      res.json({
        success: true,
        message: "Patient updated successfully",
      });
    }
  );
};

// Delete patient
export const deletePatient = (req, res) => {
  db.query(
    "DELETE FROM patients WHERE id = ?",
    [req.params.id],
    (err) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      res.json({
        success: true,
        message: "Patient deleted successfully",
      });
    }
  );
};