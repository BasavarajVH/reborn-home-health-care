import express from "express";

const router = express.Router();

import {
  getPatients,
  addPatient,
  getPatient,
  updatePatient,
  deletePatient,
} from "../controllers/patientController.js";

router.get("/", getPatients);
router.post("/", addPatient);
router.get("/:id", getPatient);
router.put("/:id", updatePatient);
router.delete("/:id", deletePatient);

export default router;