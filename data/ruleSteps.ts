export type RuleStepImage = {
  src: string;
  alt: string;
};

export type RuleStep = {
  id: number;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  images: RuleStepImage[];
};

/** Content and images from 规则介绍.docx */
export const RULE_STEPS: RuleStep[] = [
  {
    id: 1,
    title: "Goal",
    paragraphs: [
      "You play as a professional female athlete.",
      "Walk for 20 turns in total.",
      "After 20 turns, the game ends automatically and gives you an ending.",
    ],
    images: [{ src: "/rules/image1.png", alt: "Game goal" }],
  },
  {
    id: 2,
    title: "The Four Stats",
    paragraphs: ["The game has four stats:"],
    bullets: [
      "Satisfaction: Your happiness and sense of purpose",
      "Energy: Your energy level",
      "Salary: Your income from competitions and sponsorships",
      "Health: Your physical condition",
      "All four stats start at 100 and will change throughout the game.",
    ],
    images: [{ src: "/rules/image2.png", alt: "Four stats" }],
  },
  {
    id: 3,
    title: "Event Tiles",
    paragraphs: ["When you land on an Event tile:"],
    bullets: [
      "The game gives you a real-life scenario",
      "You choose one of four options",
      "Each option changes your stats differently",
      "After choosing, the game shows the real news story behind it",
    ],
    images: [
      { src: "/rules/image3.png", alt: "Event tile example 1" },
      { src: "/rules/image4.png", alt: "Event tile example 2" },
      { src: "/rules/image5.png", alt: "Event tile example 3" },
    ],
  },
  {
    id: 4,
    title: "Resource Tiles",
    paragraphs: [
      "Resource Tiles:",
      "A daily event happens. Your stats go up or down directly. No choices available.",
    ],
    images: [
      { src: "/rules/image6.png", alt: "Resource tile example 1" },
      { src: "/rules/image7.png", alt: "Resource tile example 2" },
    ],
  },
  {
    id: 5,
    title: "Special Tiles",
    paragraphs: [
      "Special Tiles:",
      "Injury or suspension. You must skip several turns and cannot move.",
    ],
    images: [{ src: "/rules/image8.png", alt: "Special tile example" }],
  },
  {
    id: 6,
    title: "Ending",
    paragraphs: [
      "After 20 turns, the game checks your highest stat and lowest stat.",
      "The combination triggers one of 12 endings.",
      "Each ending has: a title + a representative athlete + a short description.",
      'Tap "Save" to save the ending as an image.',
    ],
    images: [{ src: "/rules/image9.png", alt: "Ending example" }],
  },
];

export const RULE_STEP_COUNT = RULE_STEPS.length;
