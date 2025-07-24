import { runAiModal } from "@/configs/aiModal";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { prompt } = await request.json();
    console.log("Received prompt:", prompt);

    const result = await runAiModal(prompt);
    console.log(resultText.response.text());

    return NextResponse.json({ result: JSON.parse(resultText) });
  } catch (error) {
    return NextResponse.json("Error", error);
  }
}
