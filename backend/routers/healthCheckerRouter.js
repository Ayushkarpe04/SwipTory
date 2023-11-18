import express from "express";

import healthChecker from "../controllers/healthCheckerController.js";

const router = express.Router();

router.route("/").get(healthChecker);

export default router;
