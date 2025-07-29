import { GoogleGenAI } from "@google/genai";

// ❗ DO NOT use NEXT_PUBLIC_ prefix for secrets on server side
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const model = "gemini-2.0-flash";

export async function runAiModal(userPrompt) {
  const contents = [
    {
      role: "user",
      parts: [
        {
          text: userPrompt,
        },
      ],
    },
  ];

  try {
    const stream = await ai.models.generateContentStream({
      model,
      contents,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    let output = "";
    for await (const chunk of stream) {
      if (chunk.text) output += chunk.text;
    }

    return output;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}
