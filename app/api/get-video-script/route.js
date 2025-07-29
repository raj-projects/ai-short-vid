import { runAiModal } from "@/configs/aiModal";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { prompt } = await request.json();
    console.log("📥 Received Prompt:", prompt);

    const result = await runAiModal(prompt);
    const text = await result.response.text();

    console.log("🤖 Raw AI Response Text:", text);

    // Safe JSON parse with fallback
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch (parseErr) {
      console.error("❌ JSON Parse Error:", parseErr);
      return NextResponse.json(
        { error: "AI returned invalid JSON", raw: text },
        { status: 500 }
      );
    }

    return NextResponse.json({ result: parsed });
  } catch (error) {
    console.error("❌ Server Error:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
        details: error.message || String(error),
      },
      { status: 500 }
    );
  }
}
