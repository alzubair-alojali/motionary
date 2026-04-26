import type { ExampleMeta } from "@/lib/types";

export const meta: ExampleMeta = {
  slug: "typewriter",
  title: "Typewriter",
  description: "Characters appear one by one with a blinking caret.",
  prompt: `Text appears character by character with a blinking caret next to it. Slice the source string from 0 to N, where N increments every ~60ms via setInterval or a recursive setTimeout. After the full text is shown, hold for ~1.4s, then reset N to 0 and start over. The caret is a 2px-wide vertical bar in accent color, positioned after the last character; it blinks via opacity keyframes [1, 0, 1] over 0.9s, infinite, easeInOut. Respect prefers-reduced-motion by showing the full text immediately and either hiding the caret or holding it static. Visual: monospace font, body size, comfortable line-height.`,
  tags: ["text", "reveal", "typewriter"],
};
