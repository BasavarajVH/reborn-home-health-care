import express from "express";
import { getTodayAppointments } from "../controllers/todayController.js";

const router = express.Router();

router.get("/", getTodayAppointments);

export default router;