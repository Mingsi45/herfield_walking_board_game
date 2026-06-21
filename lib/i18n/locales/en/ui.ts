export const enUi = {
  languageButton: "language（语言）",
  languageTitle: "Choose language",
  start: {
    subtitle: "A board game about women in sports",
    startGame: "Start Game",
    continueGame: "Continue Game",
    rules: "Rules",
  },
  game: {
    rules: "Rules",
    exit: "Exit game",
    turnMobile: (turn: number, max: number, remaining: number) =>
      `Turn ${turn} / ${max} · ${remaining} left`,
    tileInfo: (n: number, tile: string) => `Tile ${n} · ${tile}`,
    rolled: (n: number) => `Rolled ${n}`,
    skipTurns: (n: number) => `Skip ${n} turn${n === 1 ? "" : "s"}`,
    gameOver: "Game over",
    skipTurn: "Skip Turn",
    rolling: "Rolling…",
    moving: "Moving…",
    rollDice: "Roll Dice",
  },
  turnPanel: {
    turns: "Turns",
    of: (max: number) => `of ${max}`,
    remaining: "Remaining",
  },
  eventModal: {
    close: "Close",
    youChose: "You chose:",
    viewReality: "View Reality",
    continue: "Continue",
    realityAlt: (title: string) => `Reality: ${title}`,
  },
  noticeModal: {
    close: "Close",
    seeChanges: "See changes",
    continue: "Continue",
  },
  statChanges: {
    title: "Stat changes",
    empty: "No stat changes from this choice.",
  },
  gameOver: {
    title: "Game Over",
    body: "You have completed 20 turns. Your journey on the board is over — now discover who you became.",
    viewIdentity: "View your identity",
  },
  ending: {
    yourResults: "Your Results",
    athleteExample: "Athlete example: ",
    why: "Why: ",
    save: "Save",
    backToMenu: "Back to menu",
  },
  exit: {
    title: "Exit game?",
    body: "Your progress is saved automatically during play. If you exit now, that saved progress will be deleted. Are you sure you want to leave?",
    back: "Back",
    confirm: "Exit",
    close: "Close",
  },
  rulesModal: {
    stepHeading: (id: number, title: string) => `Step ${id}: ${title}`,
    stepBtn: (id: number) => `Step ${id}`,
    next: "Next Step",
    back: "Back",
    close: "Close",
  },
  dice: {
    rolling: "Rolling…",
    rolled: "Rolled",
  },
  carousel: {
    prev: "Previous image",
    next: "Next image",
    indicator: (i: number, total: number) => `Image ${i} of ${total}`,
  },
  meta: {
    description: "A narrative board game about women in sports.",
  },
} as const;
