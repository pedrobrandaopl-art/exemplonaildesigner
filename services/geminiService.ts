import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize only if key is present to avoid immediate crash, though functionality will depend on it.
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const getNailArtSuggestion = async (userInput: string): Promise<string> => {
  if (!ai) {
    throw new Error("API Key não configurada.");
  }

  try {
    const model = 'gemini-2.5-flash';
    const prompt = `Você é uma Nail Designer especialista e sofisticada do 'Studio Rose'.
    O usuário vai descrever uma ocasião, uma roupa ou um humor.
    Sua tarefa é sugerir um estilo de unha (Nail Art), cor e formato que combine perfeitamente.
    
    Contexto do usuário: "${userInput}"
    
    Responda em Português do Brasil. Seja breve (máximo 3 frases), use emojis elegantes (💅, ✨, 🌸) e mantenha um tom profissional, acolhedor e fashionista. Não use nomes pessoais na resposta.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Desculpe, não consegui pensar em um design agora. Tente novamente!";
  } catch (error) {
    console.error("Erro ao chamar Gemini:", error);
    throw new Error("Houve um problema ao conectar com a assistente de estilo.");
  }
};