import asynHandler from "express-async-handler";

/**
 * @description     Health Checker
 * @router          GET  /api/healthChecker
 * @access          public
 */

const healthChecker = asynHandler(async (req, res) => {
  const healthChecker = {
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now(),
  };

  try {
    res.send(healthChecker);
  } catch (error) {
    healthChecker.message = error;
    res.status(503).send();
  }
});

export default healthChecker;
