import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Oleksii Tsymbal. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Oleksii Tsymbal, a 32-year-old developer specializing in AI. Formerly a high-level mountain biker",
    };
  },
});
