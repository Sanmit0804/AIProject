// app.js
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import geminiRoutes from "./routes/gemini.routes.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/gemini", geminiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
