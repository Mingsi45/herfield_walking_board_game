export type Effects = {
  satisfaction?: number;
  salary?: number;
  health?: number;
  energy?: number;
};

export type Choice = {
  text: string;
  effects: Effects;
};

export type GameEvent = {
  id: number;
  title: string;
  description: string;
  image: string;
  choices: Choice[];
};

export const events: GameEvent[] = [
  {
    id: 1,
    title: "Dress Code Judgment",
    description:
      "At the 2021 European Beach Handball Championship, you and your teammates were fined for refusing to wear the required bikini bottoms and instead competing in athletic shorts. The ruling sparked global debate about the sexualization of female athletes.",
    image: "/events/1.png",
    choices: [
      {
        text: "Pay the fine and speak out publicly",
        effects: { salary: -50, satisfaction: 10, energy: -5 },
      },
      {
        text: "Refuse to pay and file an appeal",
        effects: { salary: -10, satisfaction: 15, energy: -20 },
      },
      {
        text: "Pay quietly and avoid attention",
        effects: { salary: -50, satisfaction: -5 },
      },
      {
        text: "Organize a collective shorts protest with other teams",
        effects: { salary: -70, satisfaction: 20, energy: -20 },
      },
    ],
  },
  {
    id: 2,
    title: "The Fall of a Prodigy",
    description:
      "You became an Olympic champion at 14 and were celebrated as a miracle athlete. As your body matures, critics attack your appearance and performance, turning admiration into pressure and cruelty.",
    image: "/events/2.png",
    choices: [
      {
        text: "Speak honestly about body changes",
        effects: { satisfaction: 5, energy: -10 },
      },
      {
        text: "Leave social media and focus on training",
        effects: { satisfaction: -10, energy: 10, health: 5 },
      },
      {
        text: "Attempt dangerous rapid weight loss",
        effects: { health: -20, satisfaction: -15, energy: -10 },
      },
      {
        text: "Train harder to silence critics",
        effects: { energy: -15, satisfaction: 20 },
      },
    ],
  },
  {
    id: 3,
    title: "The Ice Rink Pay Gap",
    description:
      "You play in the Professional Women's Hockey League (PWHL), where top salaries are around $100,000—while the NHL minimum is nearly eight times higher. U.S. women have won more Olympic gold medals than men in six straight Games.",
    image: "/events/3.png",
    choices: [
      {
        text: "Publicly call out unfair league pay",
        effects: { satisfaction: 20, energy: -15 },
      },
      {
        text: "Chase titles and sponsorships to make up income",
        effects: { energy: -20, salary: 20 },
      },
      {
        text: "Accept the status quo and survive",
        effects: { satisfaction: -10 },
      },
      {
        text: "Organize a players' union for collective bargaining",
        effects: { satisfaction: 25, energy: -25 },
      },
    ],
  },
  {
    id: 4,
    title: "Security Checkpoint Shadow",
    description:
      "Before a major world table tennis event, you were subjected to invasive contact during security screening as a Chinese Taipei athlete. The trauma affected your mental state and even team lineup decisions.",
    image: "/events/4.png",
    choices: [
      {
        text: "Confront staff on the spot and demand an investigation",
        effects: { energy: -20 },
      },
      {
        text: "Endure it and focus on the match",
        effects: { satisfaction: -25, energy: -10 },
      },
      {
        text: "Expose the incident publicly after the tournament",
        effects: { satisfaction: 10, energy: -5 },
      },
      {
        text: "Withdraw from the event and return home",
        effects: { satisfaction: -20, salary: -30 },
      },
    ],
  },
  {
    id: 5,
    title: "Pregnancy as a Trade",
    description:
      "As a WNBA star forward, telling your team you were pregnant brought accusations of being \"not committed\"—and you were traded to another city before the season began.",
    image: "/events/5.png",
    choices: [
      {
        text: "File a federal discrimination lawsuit",
        effects: { salary: -10, satisfaction: 5, energy: -20 },
      },
      {
        text: "Prove your worth on a new team",
        effects: { energy: -15, satisfaction: -20 },
      },
      {
        text: "Go public to gain public support",
        effects: { satisfaction: 15, energy: -15 },
      },
      {
        text: "Negotiate partial contractual protections",
        effects: { salary: 20, satisfaction: -10, energy: -10 },
      },
    ],
  },
  {
    id: 6,
    title: "No Protocol for Pregnancy",
    description:
      "In 2025, the U.S. women's national soccer team still lacked formal protections for pregnant players—training, match, and recovery rights were undefined, leaving athletes to navigate alone.",
    image: "/events/6.png",
    choices: [
      {
        text: "Publicly demand accelerated protective policies",
        effects: { satisfaction: 25, energy: -15 },
      },
      {
        text: "Negotiate private guarantees in your contract",
        effects: { salary: 30, satisfaction: -5, energy: -10 },
      },
      {
        text: "Hide the pregnancy and keep competing",
        effects: { health: -20, satisfaction: -1 },
      },
      {
        text: "Unite players to demand institutional safeguards",
        effects: { satisfaction: 35, energy: -25, salary: -20 },
      },
    ],
  },
  {
    id: 7,
    title: "Uniform Choice on the Track",
    description:
      "Women's track traditionally defaults to high-cut briefs that many athletes find distracting and exposing. Some events now allow shorts—but that freedom is not universal.",
    image: "/events/7.png",
    choices: [
      {
        text: "Request permission to wear shorts",
        effects: { satisfaction: 10, energy: -5 },
      },
      {
        text: "Default to shorts without asking",
        effects: { satisfaction: 5, energy: 10 },
      },
      {
        text: "Petition the federation for clothing choice",
        effects: { satisfaction: 30, energy: -25 },
      },
      {
        text: "Ignore the debate and focus on performance",
        effects: { satisfaction: -10, energy: 10 },
      },
    ],
  },
  {
    id: 8,
    title: "Taboo on the Dohyō",
    description:
      "Sumo is Japan's national sport, yet women cannot compete professionally—and even stepping on the sacred ring is taboo. When a woman collapsed at an event, female medics rushed in but were ordered off the dohyō.",
    image: "/events/8.png",
    choices: [
      {
        text: "Ignore the taboo and help save a life",
        effects: { satisfaction: 30 },
      },
      {
        text: "Stay off the ring and seek male help",
        effects: { satisfaction: -20 },
      },
      {
        text: "Protest the gender rule afterward",
        effects: { satisfaction: 15, energy: -10 },
      },
      {
        text: "Organize a symbolic women's dohyō action",
        effects: { satisfaction: 25, energy: -20 },
      },
    ],
  },
  {
    id: 9,
    title: "The Gaze in Detention",
    description:
      "Detained in Russia as a WNBA star, media focused less on your release than on your short hair, height, and \"non-traditional\" femininity. Commentators said you \"don't look like a woman.\"",
    image: "/events/9.png",
    choices: [
      {
        text: "Keep your style and refuse to apologize",
        effects: { satisfaction: 15, energy: 10 },
      },
      {
        text: "Change your look to win sympathy",
        effects: { satisfaction: -30, energy: -10 },
      },
      {
        text: "Launch a hunger strike with fellow detainees",
        effects: { health: -40, satisfaction: 20, energy: -20 },
      },
      {
        text: "Stay silent and wait for a prisoner swap",
        effects: { energy: -5, satisfaction: -10 },
      },
    ],
  },
  {
    id: 10,
    title: "Weight Loss Ultimatum While Nursing",
    description:
      "As a British jockey, one week after giving birth you received an ultimatum: return to race weight within six weeks or lose your license—forcing intense training and diet while breastfeeding.",
    image: "/events/10.png",
    choices: [
      {
        text: "Stop breastfeeding to meet the deadline",
        effects: { satisfaction: -35, health: -15, salary: 40 },
      },
      {
        text: "Unite jockeys to change the rules",
        effects: { energy: -30, satisfaction: 30 },
      },
      {
        text: "Pause your career for your child",
        effects: { salary: -20, satisfaction: 20 },
      },
      {
        text: "Work with a nutritionist to balance both",
        effects: { salary: -20, energy: -20, health: -5, satisfaction: 25 },
      },
    ],
  },
  {
    id: 11,
    title: "The \"Gift Bag\" Champion",
    description:
      "You won first place at an international event, but your \"prize\" was a cheap kit of toiletries while the men's champion took thousands in cash. Officials said women's events draw less revenue.",
    image: "/events/11.png",
    choices: [
      {
        text: "Publicly demand equal prize money",
        effects: { satisfaction: 25, energy: -15 },
      },
      {
        text: "Refuse the prize on the spot",
        effects: { satisfaction: 15 },
      },
      {
        text: "Accept quietly and focus on the next event",
        effects: { satisfaction: -15, energy: 5 },
      },
      {
        text: "Boycott the next event with other women",
        effects: { satisfaction: 20, salary: -20, energy: -20 },
      },
    ],
  },
  {
    id: 12,
    title: "Race Application Denied",
    description:
      "Your team applied to host a top women's road race matching men's format, prize, and broadcast—and the international cycling union rejected it as \"not in the best interest of women's cycling\" while approving a similar men's race.",
    image: "/events/12.png",
    choices: [
      {
        text: "Publicly challenge double standards",
        effects: { satisfaction: 25, energy: -15 },
      },
      {
        text: "File a joint discrimination complaint",
        effects: { satisfaction: 20, salary: -10, energy: -20 },
      },
      {
        text: "Accept the decision and fight for existing events",
        effects: { satisfaction: -10, energy: 5 },
      },
      {
        text: "Run a protest race on the same course",
        effects: { satisfaction: 30, salary: -30, energy: -25 },
      },
    ],
  },
  {
    id: 13,
    title: "\"Too Masculine\"",
    description:
      "As a top volleyball blocker at 1.93m, social media fills with comments like \"she looks like a man.\" The insults sometimes make you doubt your own femininity.",
    image: "/events/13.png",
    choices: [
      {
        text: "Channel anger into powerful spikes",
        effects: { energy: -5, satisfaction: 10 },
      },
      {
        text: "Share photos of your off-court femininity",
        effects: { satisfaction: 15, energy: -5 },
      },
      {
        text: "Launch an anti body-shaming campaign",
        effects: { satisfaction: 30, energy: -20 },
      },
      {
        text: "Leave social media for your mental health",
        effects: { satisfaction: 5, energy: 10 },
      },
    ],
  },
  {
    id: 14,
    title: "\"Back to the Kitchen\"",
    description:
      "After two World Cup losses, your team faces a flood of misogynistic posts—not about tactics, but telling you to \"go cook.\" People who never watch women's cricket suddenly claim funding is wasted.",
    image: "/events/14.png",
    choices: [
      {
        text: "Post a team dinner photo: \"Full stomachs, stronger wins\"",
        effects: { satisfaction: 15, energy: 10 },
      },
      {
        text: "Decline interviews; answer with the next victory",
        effects: { satisfaction: -10, energy: 15 },
      },
      {
        text: "Write about harm to young female players",
        effects: { satisfaction: 20, energy: -15 },
      },
      {
        text: "Unite women athletes against online abuse",
        effects: { satisfaction: 25, energy: -20 },
      },
    ],
  },
  {
    id: 15,
    title: "Body Shaming Online",
    description:
      "After a disappointing international result, you thanked fans online—and comments attacked your body, not your performance: \"too fat,\" \"not athlete material,\" \"go lose weight.\"",
    image: "/events/15.png",
    choices: [
      {
        text: "Speak out about the harm of body shaming",
        effects: { satisfaction: 20, energy: -10 },
      },
      {
        text: "Turn off comments and engage real fans only",
        effects: { satisfaction: 10, energy: 5 },
      },
      {
        text: "Let your next win be the reply",
        effects: { energy: 15, satisfaction: 5 },
      },
      {
        text: "Launch an anti-cyberbullying movement",
        effects: { satisfaction: 25, energy: -20 },
      },
    ],
  },
  {
    id: 16,
    title: "The \"Sexy\" Surf Ad",
    description:
      "A major surf brand's new women's campaign features bikini models and the tagline \"when surf culture meets sex appeal.\" A pro surfer asks: \"Why go back to being valued for bodies, not skill?\"",
    image: "/events/16.png",
    choices: [
      {
        text: "Support the critic publicly",
        effects: { satisfaction: 25, salary: -10 },
      },
      {
        text: "Stay neutral and focus on results",
        effects: { satisfaction: -10, energy: 10 },
      },
      {
        text: "Contact the brand privately",
        effects: { satisfaction: -5 },
      },
      {
        text: "Lead a #SurfAppeal campaign for skill-based ads",
        effects: { satisfaction: 30, energy: -25 },
      },
    ],
  },
  {
    id: 17,
    title: "Virginity Testing",
    description:
      "After breaking a national record, your federation required invasive \"gender verification\" including virginity testing. The humiliation outweighed any defeat.",
    image: "/events/17.png",
    choices: [
      {
        text: "Go public and demand abolition of invasive tests",
        effects: { satisfaction: 30, energy: -20 },
      },
      {
        text: "Endure it and train harder",
        effects: { energy: 15, health: 5, satisfaction: -20 },
      },
      {
        text: "Reject the test and forfeit the record",
        effects: { satisfaction: -10, salary: -20 },
      },
      {
        text: "Sue the federation for harm",
        effects: { salary: -30, satisfaction: 30 },
      },
    ],
  },
  {
    id: 18,
    title: "Ranked High, Still Unsponsored",
    description:
      "You're world No. 11 in tennis with a Grand Slam final—but no apparel or racket sponsor. Lower-ranked peers have multiple deals. You said: \"Maybe I'm not blonde, thin, or tall enough.\"",
    image: "/events/18.png",
    choices: [
      {
        text: "Call out brands for appearance bias",
        effects: { satisfaction: 25, energy: -15 },
      },
      {
        text: "Accept reality and climb the rankings",
        effects: { energy: 10, satisfaction: -10 },
      },
      {
        text: "Hire an image consultant",
        effects: { salary: -20, satisfaction: 5, energy: -10 },
      },
      {
        text: "Unite unsponsored top players to speak out",
        effects: { satisfaction: 20, energy: -20 },
      },
    ],
  },
  {
    id: 19,
    title: "The Cost of Being Public",
    description:
      "After a loss you posted that you'd keep going while \"the fire still burns.\" Trolls twisted your words into death threats. Teammates say attacks target bodies and gender, not sport.",
    image: "/events/19.png",
    choices: [
      {
        text: "Expose the worst messages publicly",
        effects: { satisfaction: 20, energy: -15 },
      },
      {
        text: "Reduce social media exposure",
        effects: { energy: 10, satisfaction: -10 },
      },
      {
        text: "Give an interview on psychological harm",
        effects: { satisfaction: 15, energy: -20 },
      },
      {
        text: "Ask the federation for online protection",
        effects: { satisfaction: 25, energy: -20 },
      },
    ],
  },
  {
    id: 20,
    title: "A Mother's Dilemma",
    description:
      "You're in your career prime and a mother. Training and travel leave little time with your child. Society demands you be a \"good mom\" and a \"top athlete\" at once.",
    image: "/events/20.png",
    choices: [
      {
        text: "Request childcare and nursing facilities at events",
        effects: { energy: -20, satisfaction: 15 },
      },
      {
        text: "Leave parenting to family and focus on training",
        effects: { satisfaction: -30, health: 10, salary: 20 },
      },
      {
        text: "Speak publicly about dual pressure",
        effects: { satisfaction: 25, energy: -10 },
      },
      {
        text: "Consider pausing your career for family",
        effects: { salary: -40, satisfaction: 30 },
      },
    ],
  },
];

export type Resource = {
  title: string;
  description: string;
  effects: Effects;
};

export const resources: Resource[] = [
  {
    title: "Letters From Fans",
    description:
      "Handwritten fan letters praise your courage on court—one says you are who her daughter wants to become. You pin them in your locker.",
    effects: { satisfaction: 15 },
  },
  {
    title: "A Young Fan's Hug",
    description:
      "After training, a little girl hugs your leg and says she wants to be like you someday. You sleep soundly that night.",
    effects: { satisfaction: 15 },
  },
  {
    title: "Mom's Home Cooking",
    description:
      "Your mother brings braised ribs and tomato eggs in a thermos—you eat three bowls and feel ready to run.",
    effects: { satisfaction: 10, energy: 15, health: 5 },
  },
  {
    title: "Match Postponed",
    description:
      "A key match is delayed a week because of weather. Relief hits first—you realize how exhausted you are.",
    effects: { energy: 20, satisfaction: 10 },
  },
  {
    title: "Training Through Your Period",
    description:
      "On day two of your cycle, coaches schedule brutal conditioning. You push through on painkillers and slump against the wall afterward—no one checks on you.",
    effects: { energy: -10, health: -10, satisfaction: -10 },
  },
  {
    title: "Key Win and Prize Money",
    description:
      "You upset a favored opponent and the bonus lands—enough to replace your parents' old refrigerator at home.",
    effects: { salary: 30, satisfaction: 20, energy: -5 },
  },
  {
    title: "Clean Bill of Health",
    description:
      "Annual labs show iron, bone density, and hormones all in excellent athletic range. Your body is working with you.",
    effects: { health: 15, satisfaction: 10 },
  },
  {
    title: "Underfunded Medical Care",
    description:
      "With only a part-time team doctor, a knee sprain was dismissed. Months later, an MRI shows meniscus damage—past the best treatment window.",
    effects: { health: -25, salary: -20, satisfaction: -15 },
  },
];

export type SpecialTile = {
  title: string;
  description: string;
  effect: "skip_turns";
  turns: number;
};

export const specialTiles: SpecialTile[] = [
  {
    title: "Suspension",
    description:
      "Ruled dangerous play, you are suspended for two turns. Appeals take time—you watch from the stands as tiles pass without triggering events.",
    effect: "skip_turns",
    turns: 2,
  },
  {
    title: "Injury Recovery",
    description:
      "After minor surgery you must rest. You scroll teammates' training videos while physiotherapy visits fill the days.",
    effect: "skip_turns",
    turns: 2,
  },
];
