import { loadEnvConfig } from '@next/env';
const projectDir = process.cwd();
loadEnvConfig(projectDir);

import fs from 'fs/promises';
import path from 'path';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { embedMany } from 'ai';

async function generateEmbeddings() {
  const google = createGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY
  });
  const dataDir = path.join(process.cwd(), 'src/data');
  const files = await fs.readdir(dataDir);
  const chunks = [];

  for (const file of files) {
    if (!file.endsWith('.md')) continue;
    const content = await fs.readFile(path.join(dataDir, file), 'utf-8');
    
    // Simple naive chunking by H2 headers
    // If the file starts with content before any H2, that will be the first chunk.
    const sections = content.split('\n## ');
    
    for (let i = 0; i < sections.length; i++) {
        let section = sections[i].trim();
        if (!section) continue;
        if (i > 0) section = '## ' + section; // Restore header
        
        // Skip System Instructions if still present in markdown
        if (section.includes('SYSTEM INSTRUCTIONS') && section.includes('BOUNDARY PROTOCOLS')) {
            continue; 
        }

        chunks.push({
            file,
            content: section,
        });
    }
  }

  console.log(`Generating embeddings for ${chunks.length} chunks...`);

  // Generate embeddings
  const { embeddings } = await embedMany({
    model: google.textEmbeddingModel('gemini-embedding-001'),
    values: chunks.map(c => c.content),
  });

  const output = chunks.map((chunk, i) => ({
    ...chunk,
    embedding: embeddings[i],
  }));

  const outPath = path.join(dataDir, 'embeddings.json');
  await fs.writeFile(
    outPath,
    JSON.stringify(output)
  );

  console.log(`Successfully generated and saved embeddings to ${outPath}`);
}

generateEmbeddings().catch(console.error);
