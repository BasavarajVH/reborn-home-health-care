import express from "express";
import { getRecentAppointments } from "../controllers/recentController.js";

const router = express.Router();

router.get("/", getRecentAppointments);

export default router;