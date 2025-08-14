// routes/geminiRoutes.js
import express from "express";
import { getGeminiResponse } from "../controllers/geminiController.js";

const router = express.Router();

router.post("/generate", getGeminiResponse);

export default router;
