import { runAiModal } from "@/configs/aiModal";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { prompt } = await request.json();
    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required." },
        { status: 400 }
      );
    }

    console.log("Received prompt:", prompt);

    const resultText = await runAiModal(prompt);

    console.log("AI response:", resultText.response.text());

    const parsed = JSON.parse(resultText);
    return NextResponse.json({ result: parsed });
  } catch (error) {
    console.error("AI Error:", error);
    return NextResponse.json(
      { error: error.message || "Unexpected error" },
      { status: 500 }
    );
  }
}
