import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // TODO: Connect this to your future Kaggle model / RAG system.
    // For now, we return a mock response so you can test the UI.
    
    // Simulate AI processing delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return NextResponse.json({
      role: "assistant",
      content: "[CLASSIFIED] I am currently operating on limited data extraction protocols. My neural net is being trained to intercept queries regarding Operator Quy. Return later for full tactical clearance."
    });

  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Failed to process chat interrogation" },
      { status: 500 }
    );
  }
}
