// models/geminiModel.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateTextFromGemini = async (prompt) => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  let attempts = 0;
  while (attempts < 3) {
    try {
      const result = await model.generateContent(prompt);
      return result.response.text();
    } catch (error) {
      if (error.message.includes("503") && attempts < 2) {
        await new Promise(res => setTimeout(res, (attempts + 1) * 2000));
        attempts++;
      } else {
        throw error;
      }
    }
  }
};
