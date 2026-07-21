import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import db from "./config/db.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

import dashboardRoutes from "./routes/dashboardRoutes.js";

import analyticsRoutes from "./routes/analyticsRoutes.js";

import todayRoutes from "./routes/todayRoutes.js";

import recentRoutes from "./routes/recentRoutes.js";

import patientRoutes from "./routes/patientRoutes.js";

dotenv.config();

const app = express();



// Middleware (must come before routes)
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/bookings", bookingRoutes);
app.use("/api/admin", adminRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/analytics", analyticsRoutes);

app.use("/api/today", todayRoutes);

app.use("/api/recent", recentRoutes);

app.use("/api/patients", patientRoutes);

app.get("/", (req, res) => {
  res.send("Reborn Home Health Care API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});