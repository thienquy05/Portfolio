import { streamText, convertToModelMessages } from 'ai';
import { google } from '@ai-sdk/google';
import fs from 'fs/promises';
import path from 'path';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Load context from all markdown files in src/data
    const dataDir = path.join(process.cwd(), 'src/data');
    let contextText = '';
    
    try {
      const files = await fs.readdir(dataDir);
      for (const file of files) {
        if (file.endsWith('.md')) {
          const content = await fs.readFile(path.join(dataDir, file), 'utf-8');
          contextText += `\n--- Content from ${file} ---\n${content}\n`;
        }
      }
    } catch (err) {
      console.warn("Failed to read context files:", err);
      // Wait or do nothing, maybe dir doesn't exist yet
    }

    // Artificial 1-2 second network delay to maintain the operator theme
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000));

    // Sanitize client-side messages into the strict schema expected by streamText
    const coreMessages = messages.map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'assistant',
      content: typeof msg.content === 'string' 
        ? msg.content 
        : (msg.parts ? msg.parts.filter((p: any) => p.type === 'text').map((p: any) => p.text).join('') : '')
    }));

    // Call the model using the AI SDK
    const result = streamText({
      model: google('gemini-2.5-flash-lite'), 
      system: contextText, // system prompt & knowledge are now controlled via markdown files
      messages: coreMessages,
    });

    return result.toUIMessageStreamResponse();

  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process chat interrogation" }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
