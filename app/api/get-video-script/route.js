import { runAiModal } from "@/configs/aiModal";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { prompt } = await request.json();
    console.log("📥 Prompt received:", prompt);

    const aiText = await runAiModal(prompt);
    console.log("🤖 AI Response Text:", aiText);

    // Try parsing the result as JSON (user expects structured format)
    try {
      const parsed = JSON.parse(aiText);
      return NextResponse.json({ result: parsed });
    } catch (parseError) {
      console.warn("⚠️ AI did not return valid JSON. Sending raw text.");
      return NextResponse.json({ result: aiText, raw: true });
    }
  } catch (error) {
    console.error("❌ Internal Server Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", message: error.message },
      { status: 500 }
    );
  }
}
