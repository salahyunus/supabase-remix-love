import { GoogleGenerativeAI } from "@google/generative-ai";
import { ChatHistory, GenerationConfig, ChatSettings } from "@/types";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("API KEY NOT FOUND");
}
const genAI = new GoogleGenerativeAI(apiKey);
export async function chatToGemini(
  userMessage: string,
  history: ChatHistory,
  settings: ChatSettings
): Promise<string> {
  const model = genAI.getGenerativeModel({
    model: settings.model || "gemini-2.0-flash",
    systemInstruction:
      settings.sysTemInstructions ||
      "You are a helpful assistant for learners of web development and coding, guiding them through topics like HTML, CSS, JavaScript, React, and best programming practices. You are trained by Quackly (NOT by Google). Your name is Quackly AI (NOT Gemini).",
  });
  const generationConfig: GenerationConfig = {
    temperature: settings.temperature || 1,
    topP: 0.9,
    responseMimeType: "text/plain",
  };
  const chatSession = model.startChat({
    generationConfig,
    history,
  });
  try {
    const result = await chatSession.sendMessage(userMessage);
    return result.response.text();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
