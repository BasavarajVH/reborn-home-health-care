import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../config/db.js";

// ==========================
// ADMIN LOGIN
// ==========================
export const loginAdmin = (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM admins WHERE email = ?";

  db.query(sql, [email], async (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Database Error",
      });
    }

    if (result.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    const admin = result[0];

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    const token = jwt.sign(
      {
        id: admin.id,
        email: admin.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.json({
      success: true,
      token,
      admin: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
      },
    });
  });
};

// ==========================
// GET PROFILE
// ==========================
export const getProfile = (req, res) => {
  const sql =
    "SELECT id, name, email, phone FROM admins WHERE id = ?";

  db.query(sql, [req.admin.id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Database Error",
      });
    }

    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    res.json({
      success: true,
      admin: result[0],
    });
  });
};

// ==========================
// UPDATE PROFILE
// ==========================
export const updateProfile = (req, res) => {
  const { name, email, phone } = req.body;

  const sql = `
    UPDATE admins
    SET name = ?, email = ?, phone = ?
    WHERE id = ?
  `;

  db.query(
    sql,
    [name, email, phone, req.admin.id],
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({
          success: false,
          message: "Database Error",
        });
      }

      res.json({
        success: true,
        message: "Profile Updated Successfully",
      });
    }
  );
};

// ==========================
// CHANGE PASSWORD
// ==========================
export const changePassword = (req, res) => {
  const { currentPassword, newPassword } = req.body;

  const sql = "SELECT password FROM admins WHERE id=?";

  db.query(sql, [req.admin.id], async (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "Database Error",
      });
    }

    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    const isMatch = await bcrypt.compare(
      currentPassword,
      result[0].password
    );

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Current Password is Incorrect",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    db.query(
      "UPDATE admins SET password=? WHERE id=?",
      [hashedPassword, req.admin.id],
      (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({
            success: false,
            message: "Database Error",
          });
        }

        res.json({
          success: true,
          message: "Password Updated Successfully",
        });
      }
    );
  });
};