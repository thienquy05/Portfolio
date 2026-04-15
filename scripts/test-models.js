import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { loadEnvConfig } from '@next/env';
loadEnvConfig(process.cwd());

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY
});

// we can't directly list via ai-sdk, so let's just make a raw fetch to list models
async function doFetch() {
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GOOGLE_GENERATIVE_AI_API_KEY}`);
  const json = await res.json();
  const embeddings = json.models.filter(m => m.name.includes("embed"));
  console.log(embeddings.map(m => m.name));
}
doFetch();
