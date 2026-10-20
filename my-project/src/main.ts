import { RealtimeAgent, RealtimeSession } from "@openai/agents/realtime";


async function main() {


  const agent = new RealtimeAgent({
    name: 'Assistant',
    instructions: 'You are a helpful assistant.',
  });

  const session = new RealtimeSession(agent, {
    model: 'gpt-realtime-2.1',
  });


  try {
    await session.connect({ apiKey: import.meta.env.VITE_OPENAI_EPHEMERAL_KEY });

    console.log('you are connected');

  }

  catch (e) {
    console.error(e);
  }

}
main().catch(console.error);
