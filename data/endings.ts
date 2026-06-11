import type { PlayerStats } from "../lib/gameStats";

export type Ending = {
  id: number;
  title: string;
  tagline: string;
  conditionLabel: string;
  highest: keyof PlayerStats;
  lowest: keyof PlayerStats;
  athleteExample: string;
  athleteWhy: string;
  image: string;
};

export const endings: Ending[] = [
  {
    id: 1,
    title: "SPIRITUAL WEALTH",
    tagline: "I am not rich, but I am fulfilled.",
    conditionLabel: "Highest: Satisfaction · Lowest: Salary",
    highest: "satisfaction",
    lowest: "salary",
    athleteExample: "Simone Biles (USA, gymnastics)",
    athleteWhy:
      "At the 2020 Tokyo Olympics, Biles withdrew from multiple finals to protect her mental health — a decision that cost her medals and potential bonuses, but she stood by it for her own well-being.",
    image: "/endings/1.jpeg",
  },
  {
    id: 2,
    title: "CALM WARRIOR",
    tagline: "I accept my limits, but I never surrender.",
    conditionLabel: "Highest: Satisfaction · Lowest: Energy",
    highest: "satisfaction",
    lowest: "energy",
    athleteExample: "Li Na (China, tennis)",
    athleteWhy:
      "After winning two Grand Slams and ranking world No. 2, Li Na retired on her own terms in 2014. She walked away not because she was forced out, but because she was at peace with her body and her legacy.",
    image: "/endings/2.jpeg",
  },
  {
    id: 3,
    title: "BURNING CANDLE",
    tagline: "I gave my body, and I regret nothing.",
    conditionLabel: "Highest: Satisfaction · Lowest: Health",
    highest: "satisfaction",
    lowest: "health",
    athleteExample: "Florence Griffith-Joyner (USA, sprinting)",
    athleteWhy:
      '"Flo-Jo" set world records in the 100m and 200m that still stand today. She retired at 29 and died suddenly at 38 from an epileptic seizure. Her brilliance burned fast and bright.',
    image: "/endings/3.png",
  },
  {
    id: 4,
    title: "ANGRY BULL",
    tagline: "I am not happy, but I will never quit.",
    conditionLabel: "Highest: Energy · Lowest: Satisfaction",
    highest: "energy",
    lowest: "satisfaction",
    athleteExample: "Martina Navratilova (USA/Czech, tennis)",
    athleteWhy:
      "She came out as gay in 1981, losing major sponsors and facing relentless media attacks. Despite the hostility, she kept competing and became one of the greatest tennis players of all time — and never stopped speaking out.",
    image: "/endings/4.jpeg",
  },
  {
    id: 5,
    title: "POOR MARATHONER",
    tagline: "I have no money, but I still have fire.",
    conditionLabel: "Highest: Energy · Lowest: Salary",
    highest: "energy",
    lowest: "salary",
    athleteExample: "Lauryn Williams (USA, track & bobsled)",
    athleteWhy:
      'She won Olympic medals in both Summer and Winter Games — yet at 30, she was working a $12/hour internship. "The media coverage was everywhere. The sponsors were nowhere," she said.',
    image: "/endings/5.jpeg",
  },
  {
    id: 6,
    title: "SELF-DESTRUCTOR",
    tagline: "I broke my body chasing greatness.",
    conditionLabel: "Highest: Energy · Lowest: Health",
    highest: "energy",
    lowest: "health",
    athleteExample: "Caroline Garcia (France, tennis)",
    athleteWhy:
      'Former world No. 4 played through "unbearable" pain — anti-inflammatories, cortisone injections, plasma treatments just to step on the court. She retired when she realized she was happier when tournaments ended.',
    image: "/endings/6.jpeg",
  },
  {
    id: 7,
    title: "RICH EMPTY SHELL",
    tagline: "I have money. But I am not happy.",
    conditionLabel: "Highest: Salary · Lowest: Satisfaction",
    highest: "salary",
    lowest: "satisfaction",
    athleteExample: "Maria Sharapova (Russia, tennis)",
    athleteWhy:
      'She built a $300 million fortune — but beneath the glamour, she played through chronic shoulder pain for years. "People think I have everything," she once said. "They don\'t see what it cost."',
    image: "/endings/7.jpeg",
  },
  {
    id: 8,
    title: "WELL-OILED MACHINE",
    tagline: "I am expensive. And I am exhausted.",
    conditionLabel: "Highest: Salary · Lowest: Energy",
    highest: "salary",
    lowest: "energy",
    athleteExample: "Naomi Osaka (Japan, tennis)",
    athleteWhy:
      "She became the highest-paid female athlete in history ($55 million/year). But the price was burnout, anxiety, and stepping away from the sport she loved. She revealed she had suffered from depression since 2018.",
    image: "/endings/8.jpeg",
  },
  {
    id: 9,
    title: "GOLDEN CAGE PATIENT",
    tagline: "I am rich. But my body is ruined.",
    conditionLabel: "Highest: Salary · Lowest: Health",
    highest: "salary",
    lowest: "health",
    athleteExample: "Monica Seles (USA/Yugoslavia, tennis)",
    athleteWhy:
      "She was world No. 1, earning millions. Then a fan stabbed her on court in 1993. She survived, but her body — and her career — never fully recovered. The money couldn't fix what was taken.",
    image: "/endings/9.jpeg",
  },
  {
    id: 10,
    title: "HEALTHY EMPTY SHELL",
    tagline: "My body is fine. But my spirit is dead.",
    conditionLabel: "Highest: Health · Lowest: Satisfaction",
    highest: "health",
    lowest: "satisfaction",
    athleteExample: "Kim Min-ji (South Korea, volleyball)",
    athleteWhy:
      "A promising volleyball player who retired early after relentless online abuse about her body and appearance. Her body could still play. But her heart couldn't take another comment.",
    image: "/endings/10.jpeg",
  },
  {
    id: 11,
    title: "POWER-SAVE MODE",
    tagline: "I am alive. But I have stopped moving.",
    conditionLabel: "Highest: Health · Lowest: Energy",
    highest: "health",
    lowest: "energy",
    athleteExample: "Bridgette Gordon (USA, basketball)",
    athleteWhy:
      "Olympic gold medalist forced to quit basketball at 31 because a bone condition (osteonecrosis) would otherwise put her in a wheelchair. She walked away healthy enough to coach. But her playing career ended too soon.",
    image: "/endings/11.jpeg",
  },
  {
    id: 12,
    title: "HEALTHY BUT BROKE",
    tagline: "I am healthy. But I have no bread.",
    conditionLabel: "Highest: Health · Lowest: Salary",
    highest: "health",
    lowest: "salary",
    athleteExample: "Katrin Krabbe (Germany, sprinting)",
    athleteWhy:
      "German sprint champion banned for a doping violation many believe was politically motivated (German reunification tensions). Her health remained. Her career and income were destroyed.",
    image: "/endings/12.jpeg",
  },
];
