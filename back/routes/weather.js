const express = require("express");
const router = express.Router();
const { getWeather } = require("../services/weatherService");

router.get("/", async (req, res) => {
  try {
    const city = req.query.city;

    if (!city) {
      return res.status(400).json({ error: "City is required" });
    }

    console.log("Fetching weather for:", city); // DEBUG

    const result = await getWeather(city);

    console.log("Result:", result); // DEBUG

    res.json(result);

  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;