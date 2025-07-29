import { GoogleGenAI } from "@google/genai";

const model = "gemini-2.5-pro";

export async function runAiModal(prompt) {
  const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
  });

  const tools = [{ googleSearch: {} }];
  const config = {
    thinkingConfig: { thinkingBudget: -1 },
    tools,
  };

  const contents = [
    {
      role: "user",
      parts: [{ text: prompt }],
    },
  ];

  const result = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });

  let responseText = "";
  for await (const chunk of result) {
    if (chunk.text) {
      responseText += chunk.text;
    }
  }

  return {
    response: new Response(responseText),
  };
}
