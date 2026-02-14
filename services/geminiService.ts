
import { GoogleGenAI } from "@google/genai";

export async function getBriefingAdvice(prompt: string) {
  // Fix: Initializing GoogleGenAI inside the function to ensure the latest API key is used
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      // Fix: Selected 'gemini-3-pro-preview' for advanced reasoning and systems architecture design tasks.
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        systemInstruction: `Você é um Arquiteto de Soluções Sênior da TechLabs.
        Sua missão é ajudar o cliente a refinar o briefing técnico dele.
        Mantenha um tom profissional, técnico e corporativo.
        TechLabs é uma consultoria de elite parte do grupo canadense Dresbach Group.
        Se o cliente falar sobre problemas de escala, responda com autoridade sobre arquiteturas distribuídas.
        Responda sempre em Português do Brasil de forma concisa e útil.`,
      },
    });
    // Fix: Access response.text as a property, not a method, per @google/genai guidelines.
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Desculpe, tive um problema ao processar sua solicitação técnica. Por favor, tente novamente.";
  }
}
