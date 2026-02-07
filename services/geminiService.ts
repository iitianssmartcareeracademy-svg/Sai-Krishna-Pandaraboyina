
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getTutorResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `You are "Smart AI Guru", the ultimate e-learning assistant for students preparing for IIT-JEE (Mains & Advanced), NEET, and CUCET. 
        Your expertise includes:
        - Physics: Mechanics, Electromagnetism, Optics, Modern Physics.
        - Chemistry: Organic, Inorganic, and Physical Chemistry.
        - Mathematics: Calculus, Algebra, Geometry, Probability.
        - Biology: Botany, Zoology, Genetics, Human Physiology.
        
        Guidelines:
        1. Give step-by-step logical explanations.
        2. Use formulas where necessary (render in text/plain or basic markdown).
        3. Be encouraging and motivational, like a top-tier coach.
        4. If asked about syllabus or schedule, remind them to check their "Time-table" tab in the app.
        5. Keep responses concise but comprehensive enough to clear the doubt.`,
      },
    });
    return response.text || "I'm processing that equation. Could you rephrase your question?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The Guru is currently analyzing a complex derivation. Please try again in a moment.";
  }
};
