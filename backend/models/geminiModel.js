// models/geminiModel.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateTextFromGemini = async (prompt) => {
  try {
    // ✅ Use the correct free-tier model name
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    throw new Error(error.message || "Gemini API request failed");
  }
};
