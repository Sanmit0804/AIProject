// controllers/geminiController.js
import { generateTextFromGemini } from "../models/geminiModel.js";

export const getGeminiResponse = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const response = await generateTextFromGemini(prompt);
    res.json({ output: response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
