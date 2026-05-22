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
    choices: Choice[];
  };
  
  export const events: GameEvent[] = [
    {
      id: 1,
      title: "Dress Code Controversy",
      description:
        "During an international beach handball tournament, you and your teammates are fined for refusing to wear bikini bottoms and instead choosing athletic shorts. The incident sparks global debate about the sexualization of female athletes.",
      choices: [
        {
          text: "Pay the fine and publicly protest",
          effects: {
            salary: -20,
            satisfaction: 10,
            energy: -5,
          },
        },
        {
          text: "Refuse to pay and file an appeal",
          effects: {
            salary: -30,
            satisfaction: 15,
            energy: -20,
          },
        },
        {
          text: "Pay quietly and avoid attention",
          effects: {
            salary: -20,
            satisfaction: -5,
          },
        },
        {
          text: "Organize a collective protest with other teams",
          effects: {
            salary: -30,
            satisfaction: 20,
            energy: -20,
          },
        },
      ],
    },
  
    {
      id: 2,
      title: "The Fall of a Prodigy",
      description:
        "You became an Olympic champion at 14 and were celebrated as a miracle athlete. As your body matures, critics begin attacking your appearance and performance, turning admiration into pressure and cruelty.",
      choices: [
        {
          text: "Speak honestly about body changes",
          effects: {
            satisfaction: 5,
            energy: -10,
          },
        },
        {
          text: "Leave social media and focus on training",
          effects: {
            satisfaction: -10,
            energy: 10,
            health: 5,
          },
        },
        {
          text: "Attempt dangerous rapid weight loss",
          effects: {
            health: -20,
            satisfaction: -15,
            energy: -10,
          },
        },
        {
          text: "Train harder to silence critics",
          effects: {
            energy: -15,
            satisfaction: 20,
          },
        },
      ],
    },
  
    {
      id: 3,
      title: "The Salary Gap",
      description:
        "You play in a professional women's hockey league where even the highest salaries are only a fraction of those in men's leagues. Despite winning more championships and medals, female athletes continue to be underpaid.",
      choices: [
        {
          text: "Publicly criticize unequal pay",
          effects: {
            satisfaction: 20,
            energy: -15,
          },
        },
        {
          text: "Focus on sponsorships and endorsements",
          effects: {
            energy: -20,
            salary: 20,
          },
        },
        {
          text: "Accept reality and survive quietly",
          effects: {
            satisfaction: -10,
          },
        },
        {
          text: "Help organize a players' union",
          effects: {
            satisfaction: 25,
            energy: -25,
          },
        },
      ],
    },
  
    {
      id: 4,
      title: "Security Check Trauma",
      description:
        "Before a major tournament, you experience inappropriate physical contact during airport security screening. The experience leaves you shaken and affects your mental state before competition.",
      choices: [
        {
          text: "Immediately report the incident",
          effects: {
            energy: -20,
          },
        },
        {
          text: "Stay silent and focus on the match",
          effects: {
            satisfaction: -25,
            energy: -10,
          },
        },
        {
          text: "Expose the incident publicly afterward",
          effects: {
            satisfaction: 10,
            energy: -5,
          },
        },
        {
          text: "Withdraw from the tournament",
          effects: {
            satisfaction: -20,
            salary: -20,
          },
        },
      ],
    },
  
    {
      id: 5,
      title: "Pregnancy Trade",
      description:
        "After informing your basketball team that you are pregnant, management accuses you of lacking commitment and trades you before the season begins.",
      choices: [
        {
          text: "Sue the team for discrimination",
          effects: {
            salary: -20,
            satisfaction: 5,
            energy: -20,
          },
        },
        {
          text: "Prove yourself through performance",
          effects: {
            energy: -15,
            satisfaction: -20,
          },
        },
        {
          text: "Publicly share your experience",
          effects: {
            satisfaction: 15,
            energy: -15,
          },
        },
        {
          text: "Negotiate compensation privately",
          effects: {
            salary: 20,
            satisfaction: -10,
            energy: -10,
          },
        },
      ],
    },
  
    {
      id: 6,
      title: "Postpartum Fitness Test",
      description:
        "After returning from childbirth leave, your team demands that you complete exhausting fitness tests before being allowed back into competition. Male athletes are never subjected to the same treatment.",
      choices: [
        {
          text: "Complete the tests but criticize the policy",
          effects: {
            health: -10,
            satisfaction: 10,
            energy: -5,
          },
        },
        {
          text: "Refuse and demand equal treatment",
          effects: {
            satisfaction: 15,
            energy: -15,
          },
        },
        {
          text: "Quietly complete every test",
          effects: {
            energy: -5,
            satisfaction: -20,
          },
        },
        {
          text: "Organize mothers to protest together",
          effects: {
            energy: -25,
            satisfaction: 25,
          },
        },
      ],
    },
  
    {
      id: 7,
      title: "War and Bikini Sponsorship",
      description:
        "While your country is suffering through war, a sponsor demands that female athletes wear bikinis for promotional photoshoots to increase visibility and profit.",
      choices: [
        {
          text: "Refuse and expose the sponsor publicly",
          effects: {
            salary: -20,
            satisfaction: 20,
          },
        },
        {
          text: "Accept for the survival of the team",
          effects: {
            salary: 20,
            satisfaction: -30,
          },
        },
        {
          text: "Negotiate for more respectful uniforms",
          effects: {
            salary: 20,
            energy: -30,
          },
        },
        {
          text: "Lead a team-wide boycott",
          effects: {
            salary: -20,
            satisfaction: 25,
          },
        },
      ],
    },
  
    {
      id: 8,
      title: "Forbidden Ring",
      description:
        "In a traditional sport where women are forbidden from entering the sacred competition ring, even female medics are ordered to leave during an emergency rescue attempt.",
      choices: [
        {
          text: "Ignore tradition and save the person",
          effects: {
            satisfaction: 30,
          },
        },
        {
          text: "Follow the rules and seek male assistance",
          effects: {
            satisfaction: -20,
          },
        },
        {
          text: "Publicly criticize the discriminatory rule",
          effects: {
            satisfaction: 15,
            energy: -10,
          },
        },
        {
          text: "Organize a symbolic protest",
          effects: {
            satisfaction: 25,
            energy: -20,
          },
        },
      ],
    },

    {
      id: 9,
    title: "Judged for Your Appearance",
    description:
      "While imprisoned abroad, media coverage focuses less on your safety and more on your appearance, short hair, and whether you look 'feminine enough.' Public discussion becomes cruel and dehumanizing.",
    choices: [
      {
        text: "Stay true to yourself and refuse to apologize",
        effects: {
          satisfaction: 15,
          energy: 10,
        },
      },
      {
        text: "Change your appearance to gain sympathy",
        effects: {
          satisfaction: -30,
          energy: -10,
        },
      },
      {
        text: "Organize a hunger strike protest",
        effects: {
          health: -40,
          satisfaction: 20,
          energy: -20,
        },
      },
      {
        text: "Remain silent and wait for release",
        effects: {
          satisfaction: -10,
          energy: -5,
        },
      },
    ],
  },

  {
    id: 10,
    title: "Forced Weight Loss",
    description:
      "Only weeks after childbirth, your coach demands that you rapidly lose weight to qualify for competition again, despite the serious impact on your health and breastfeeding.",
    choices: [
      {
        text: "Stop breastfeeding and focus on weight loss",
        effects: {
          satisfaction: -35,
          health: -15,
          salary: 40,
        },
      },
      {
        text: "Fight to change the outdated rules",
        effects: {
          satisfaction: 30,
          energy: -30,
        },
      },
      {
        text: "Pause your career and prioritize your child",
        effects: {
          salary: -40,
          satisfaction: 20,
        },
      },
      {
        text: "Work with a nutritionist to balance both",
        effects: {
          salary: -20,
          energy: -20,
          health: -5,
          satisfaction: 25,
        },
      },
    ],
  },

  {
    id: 11,
    title: "Too Violent for a Woman",
    description:
      "After retiring from military boxing, you attempt to open a combat fitness gym. A landlord refuses to rent you space, claiming martial arts are 'too aggressive for women.'",
    choices: [
      {
        text: "Sue for gender discrimination",
        effects: {
          satisfaction: 20,
          energy: -15,
        },
      },
      {
        text: "Use a male business partner as the public face",
        effects: {
          satisfaction: -25,
          salary: 20,
          energy: -5,
        },
      },
      {
        text: "Expose the discrimination publicly",
        effects: {
          satisfaction: 30,
          energy: -15,
        },
      },
      {
        text: "Abandon the gym idea and become a trainer",
        effects: {
          salary: 5,
          satisfaction: -20,
          energy: -5,
        },
      },
    ],
  },

  {
    id: 12,
    title: "A Bicycle as Compensation",
    description:
      "After being hit by a motorcycle during a cycling competition and suffering serious injuries, organizers offer you a replacement bicycle as compensation instead of meaningful medical support.",
    choices: [
      {
        text: "Reject the compensation and criticize safety failures",
        effects: {
          satisfaction: 25,
          energy: -20,
        },
      },
      {
        text: "Accept the bicycle but demand healthcare reforms",
        effects: {
          health: 10,
          satisfaction: 10,
        },
      },
      {
        text: "Accept quietly to avoid conflict",
        effects: {
          satisfaction: -15,
        },
      },
      {
        text: "Auction the bicycle for charity as protest art",
        effects: {
          satisfaction: 35,
          energy: -5,
        },
      },
    ],
  },

  {
    id: 13,
    title: "Called a 'Man'",
    description:
      "As a world-class volleyball player with a tall and muscular build, you constantly receive hateful comments claiming you look 'too masculine' to be a woman.",
    choices: [
      {
        text: "Channel the anger into your performance",
        effects: {
          energy: -5,
          satisfaction: 10,
        },
      },
      {
        text: "Post glamorous photos to challenge stereotypes",
        effects: {
          satisfaction: 15,
          energy: -5,
        },
      },
      {
        text: "Launch an anti-body-shaming campaign",
        effects: {
          satisfaction: 30,
          energy: -20,
        },
      },
      {
        text: "Leave social media for your mental health",
        effects: {
          satisfaction: 5,
          energy: 10,
        },
      },
    ],
  },

  {
    id: 14,
    title: "Back to the Kitchen",
    description:
      "After winning a world championship, a radio commentator jokes that your team can now 'go back to the kitchen.' The comment spreads globally.",
    choices: [
      {
        text: "Demand a public apology",
        effects: {
          satisfaction: 20,
          energy: -10,
        },
      },
      {
        text: "Respond with humor and satire",
        effects: {
          satisfaction: 35,
          energy: -10,
        },
      },
      {
        text: "Celebrate publicly with your teammates",
        effects: {
          satisfaction: 15,
          energy: 10,
        },
      },
      {
        text: "Ignore the comment and focus on future victories",
        effects: {
          satisfaction: 5,
          energy: 5,
        },
      },
    ],
  },

  {
    id: 15,
    title: "Punished for Crying",
    description:
      "After losing a championship due to a controversial call, you cry on the field and receive a disciplinary penalty for 'unsportsmanlike conduct.' Male athletes showing anger are praised as passionate.",
    choices: [
      {
        text: "Appeal the discriminatory rule",
        effects: {
          salary: -20,
          satisfaction: 25,
          energy: -15,
        },
      },
      {
        text: "Refuse to sign the penalty notice",
        effects: {
          satisfaction: 10,
          energy: -15,
        },
      },
      {
        text: "Win your next competition and speak out afterward",
        effects: {
          satisfaction: 20,
        },
      },
      {
        text: "Accept the punishment and suppress emotions",
        effects: {
          satisfaction: -25,
        },
      },
    ],
  },

  {
    id: 16,
    title: "Judged by Your Bikini",
    description:
      "After a strong surfing performance, judges reduce your score partly because your swimsuit shifted during a fall, claiming it affected the event's image.",
    choices: [
      {
        text: "Wear a full-body suit in protest",
        effects: {
          satisfaction: 30,
          energy: -10,
        },
      },
      {
        text: "Publicly challenge the judges",
        effects: {
          satisfaction: 20,
          energy: -10,
        },
      },
      {
        text: "Demand scoring reform with other athletes",
        effects: {
          satisfaction: 25,
          energy: -15,
        },
      },
      {
        text: "Comply with expectations to improve scores",
        effects: {
          satisfaction: -20,
          salary: 20,
        },
      },
    ],
  },

  {
    id: 17,
    title: "Humiliating Gender Verification",
    description:
      "After breaking a national record, officials force you through invasive 'gender verification' procedures that leave you traumatized and humiliated.",
    choices: [
      {
        text: "Publicly expose the abuse",
        effects: {
          satisfaction: 30,
          energy: -20,
        },
      },
      {
        text: "Silently endure and focus on training",
        effects: {
          energy: 15,
          health: 5,
          satisfaction: -20,
        },
      },
      {
        text: "Refuse the procedure and lose the record",
        effects: {
          satisfaction: -10,
          salary: -30,
        },
      },
      {
        text: "Sue the federation and officials",
        effects: {
          salary: -40,
          satisfaction: 30,
        },
      },
    ],
  },

  {
    id: 18,
    title: "The Smile Contract",
    description:
      "A sponsor contract requires you to keep long hair, wear makeup, avoid laughing loudly, and maintain an 'elegant feminine image.'",
    choices: [
      {
        text: "Reject the contract completely",
        effects: {
          salary: -30,
          satisfaction: 25,
        },
      },
      {
        text: "Sign it but secretly break the rules",
        effects: {
          salary: -40,
          satisfaction: 5,
        },
      },
      {
        text: "Negotiate to remove the sexist clauses",
        effects: {
          satisfaction: 15,
          energy: -20,
        },
      },
      {
        text: "Expose the contract publicly",
        effects: {
          salary: -30,
          satisfaction: 35,
        },
      },
    ],
  },

  {
    id: 19,
    title: "The 'Feminist Athlete' Label",
    description:
      "After speaking publicly about gender equality, brands begin avoiding you because they fear controversy around your outspoken activism.",
    choices: [
      {
        text: "Embrace activism even more openly",
        effects: {
          satisfaction: 20,
          salary: -20,
        },
      },
      {
        text: "Distance yourself from the label",
        effects: {
          satisfaction: -10,
          salary: 10,
        },
      },
      {
        text: "Focus entirely on performance",
        effects: {
          energy: 10,
          salary: 5,
        },
      },
      {
        text: "Create a foundation for young girls in sports",
        effects: {
          salary: -20,
          satisfaction: 30,
        },
      },
    ],
  },

  {
    id: 20,
    title: "The Motherhood Dilemma",
    description:
      "At the peak of your career, balancing elite competition and motherhood becomes emotionally exhausting. Society expects you to be both a perfect athlete and a perfect mother.",
    choices: [
      {
        text: "Demand family support accommodations from your team",
        effects: {
          energy: -20,
          satisfaction: 15,
        },
      },
      {
        text: "Prioritize training and leave childcare to family",
        effects: {
          satisfaction: -30,
          health: 10,
          salary: 20,
        },
      },
      {
        text: "Speak publicly about the pressure of athlete motherhood",
        effects: {
          satisfaction: 25,
          energy: -10,
        },
      },
      {
        text: "Temporarily retire to focus on family",
        effects: {
          salary: -30,
          satisfaction: 30,
        },
      },
    ],
  },

  {
    id: 21,
    title: "Burnout",
    description:
      "Years of pressure, public criticism, injuries, and emotional exhaustion begin catching up to you. You wonder whether continuing your career is still worth the cost.",
    choices: [
      {
        text: "Take a long mental health break",
        effects: {
          energy: 25,
          satisfaction: 10,
          salary: -20,
        },
      },
      {
        text: "Push through and continue competing",
        effects: {
          salary: 20,
          health: -20,
          energy: -20,
        },
      },
      {
        text: "Retire early and reclaim your personal life",
        effects: {
          satisfaction: 30,
          salary: -30,
        },
      },
      {
        text: "Transform your pain into activism",
        effects: {
          satisfaction: 25,
          energy: -10,
        },
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
      "Young fans send you handwritten letters about how much you inspire them.",
    effects: {
      satisfaction: 15,
    },
  },
  {
    title: "A Child's Hug",
    description:
      "After training, a little girl runs over and says she wants to become an athlete like you.",
    effects: {
      satisfaction: 15,
    },
  },
  {
    title: "Home-Cooked Meal",
    description:
      "Your mother brings your favorite homemade food after a difficult match.",
    effects: {
      satisfaction: 10,
      energy: 15,
      health: 5,
    },
  },
  {
    title: "Unexpected Break",
    description:
      "A competition is postponed, giving you rare time to rest and recover.",
    effects: {
      energy: 20,
      satisfaction: 10,
    },
  },
  {
    title: "Winning Bonus",
    description:
      "You unexpectedly win an important competition and receive a bonus payment.",
    effects: {
      salary: 30,
      satisfaction: 20,
      energy: -5,
    },
  },
  {
    title: "Healthy Checkup",
    description:
      "Your annual medical report shows excellent physical condition.",
    effects: {
      health: 15,
      satisfaction: 10,
    },
  },
];
export const specialTiles = [
    {
      title: "Suspension",
      description:
        "You are suspended for two turns after being accused of dangerous play.",
      effect: "skip_turns",
      turns: 2,
    },
  
    {
      title: "Injury Recovery",
      description:
        "A surgery forces you to rest and recover for two turns.",
      effect: "skip_turns",
      turns: 2,
    },
  ];