import express from "express";

import {
  authUser,
  getUserById,
  getUsers,
  registerUser,
  deleteUser,
} from "../controllers/userControllers.js";

import { admin, protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.route("/login").post(authUser);
router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById);

export default router;
