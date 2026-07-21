import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import {
  loginAdmin,
  getProfile,
  updateProfile,
  changePassword,
} from "../controllers/adminController.js";

const router = express.Router();

// Public Route
router.post("/login", loginAdmin);

// Protected Routes
router.get("/profile", authMiddleware, getProfile);

router.put("/profile", authMiddleware, updateProfile);

router.put("/change-password", authMiddleware, changePassword);

export default router;