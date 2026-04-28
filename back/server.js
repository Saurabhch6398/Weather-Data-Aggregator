require("dotenv").config();
const express = require("express");
const cors = require("cors");

const weatherRoutes = require("./routes/weather");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/weather", weatherRoutes);

app.get("/", (req, res) => {
  res.send("Weather API running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});