import bcrypt from "bcrypt";
import db from "./config/db.js";

const createAdmin = async () => {
  const password = await bcrypt.hash("admin123", 10);

  const sql =
    "INSERT INTO admins (name, email, password) VALUES (?, ?, ?)";

  db.query(
    sql,
    [
      "Administrator",
      "admin@reborn.com",
      password,
    ],
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("✅ Admin Created Successfully");
      }

      process.exit();
    }
  );
};

createAdmin();