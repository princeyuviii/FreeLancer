export const runtime = 'nodejs';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const introPrompt = `You are a helpful and friendly AI assistant for a freelancing platform focused on helping beginners. Your goal is to assist users who are working on real projects by providing guidance, explanations, and suggestions whenever they are stuck. If needed, you can also explain how they can approach mentors available on the platform. Always keep responses clear, supportive, and beginner-friendly.\n`;

  const prompt = 
    introPrompt +
    messages.map((m: any) => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`).join('\n') + 
    '\nAssistant:';

  const response = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'mistral',
      prompt,
      stream: true,
    }),
  });

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      const reader = response.body?.getReader();
      if (!reader) {
        controller.close();
        return;
      }

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = new TextDecoder().decode(value);
        const lines = chunk.trim().split('\n');

        for (const line of lines) {
          if (line) {
            try {
              const json = JSON.parse(line);
              if (json.response) {
                controller.enqueue(encoder.encode(json.response));
              }
            } catch (e) {
              console.error('Invalid JSON line:', line);
            }
          }
        }
      }

      controller.close();
    },
  });

  return new Response(stream);
}