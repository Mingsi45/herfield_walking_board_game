export type DecorationType =
  | "soccer-ball"
  | "basketball"
  | "tennis-ball"
  | "ping-pong-ball"
  | "volleyball"
  | "tennis-racket"
  | "ping-pong-paddle"
  | "badminton-racket"
  | "water-bottle"
  | "sneaker"
  | "trophy"
  | "soccer-player"
  | "basketball-player"
  | "tennis-player"
  | "volleyball-player"
  | "badminton-player"
  | "ping-pong-player";

export type ScatteredDecoration = {
  type: DecorationType;
  left: string;
  top: string;
  size: number;
  rotate: number;
  opacity?: number;
};

/** Inside the board grid — center cluster */
export const innerDecorations: ScatteredDecoration[] = [
  { type: "soccer-player", left: "47%", top: "44%", size: 56, rotate: 4 },
  { type: "tennis-ball", left: "30%", top: "34%", size: 40, rotate: -14, opacity: 0.92 },
  { type: "basketball", left: "64%", top: "36%", size: 44, rotate: -6, opacity: 0.9 },
  { type: "tennis-racket", left: "36%", top: "56%", size: 50, rotate: 26, opacity: 0.88 },
  { type: "badminton-racket", left: "60%", top: "54%", size: 46, rotate: -18, opacity: 0.88 },
  { type: "ping-pong-ball", left: "50%", top: "26%", size: 30, rotate: 12, opacity: 0.85 },
  { type: "soccer-ball", left: "72%", top: "50%", size: 34, rotate: 10, opacity: 0.82 },
];

/** Outside the board grid — around the panel edges */
export const outerDecorations: ScatteredDecoration[] = [
  { type: "badminton-player", left: "1%", top: "52%", size: 44, rotate: -10, opacity: 0.85 },
  { type: "ping-pong-player", left: "99%", top: "48%", size: 42, rotate: 12, opacity: 0.85 },
  { type: "basketball-player", left: "5%", top: "78%", size: 40, rotate: -6, opacity: 0.82 },
  { type: "volleyball", left: "94%", top: "72%", size: 34, rotate: 16, opacity: 0.8 },
  { type: "water-bottle", left: "8%", top: "32%", size: 28, rotate: -14, opacity: 0.75 },
  { type: "sneaker", left: "92%", top: "32%", size: 32, rotate: 18, opacity: 0.72 },
  { type: "trophy", left: "96%", top: "86%", size: 36, rotate: 8, opacity: 0.78 },
  { type: "tennis-ball", left: "12%", top: "6%", size: 26, rotate: 14, opacity: 0.7 },
  { type: "basketball", left: "88%", top: "6%", size: 28, rotate: -12, opacity: 0.7 },
  { type: "badminton-racket", left: "2%", top: "68%", size: 38, rotate: 28, opacity: 0.68 },
  { type: "ping-pong-paddle", left: "98%", top: "64%", size: 34, rotate: -20, opacity: 0.68 },
  { type: "soccer-ball", left: "10%", top: "90%", size: 30, rotate: -16, opacity: 0.72 },
];
