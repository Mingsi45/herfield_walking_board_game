export const zhUi = {
  languageButton: "language（语言）",
  languageTitle: "选择语言",
  start: {
    subtitle: "一款关于女性运动员的棋盘游戏",
    startGame: "开始游戏",
    continueGame: "继续游戏",
    rules: "规则",
  },
  game: {
    rules: "规则",
    exit: "退出游戏",
    turnMobile: (turn: number, max: number, remaining: number) =>
      `第 ${turn} / ${max} 回合 · 剩余 ${remaining}`,
    tileInfo: (n: number, tile: string) => `第 ${n} 格 · ${tile}`,
    rolled: (n: number) => `掷出 ${n}`,
    skipTurns: (n: number) => `跳过 ${n} 回合`,
    gameOver: "游戏结束",
    skipTurn: "跳过回合",
    rolling: "掷骰中…",
    moving: "移动中…",
    rollDice: "掷骰子",
  },
  turnPanel: {
    turns: "回合",
    of: (max: number) => `/ ${max}`,
    remaining: "剩余",
  },
  eventModal: {
    close: "关闭",
    youChose: "你的选择：",
    viewReality: "查看现实",
    continue: "继续",
    realityAlt: (title: string) => `现实：${title}`,
  },
  noticeModal: {
    close: "关闭",
    seeChanges: "查看变化",
    continue: "继续",
  },
  statChanges: {
    title: "属性变化",
    empty: "此选项没有属性变化。",
  },
  gameOver: {
    title: "游戏结束",
    body: "你已完成 20 个回合。棋盘上的旅程告一段落——现在看看你成为了谁。",
    viewIdentity: "查看你的身份",
  },
  ending: {
    yourResults: "你的结局",
    athleteExample: "运动员案例：",
    why: "原因：",
    save: "保存",
    backToMenu: "返回主菜单",
  },
  exit: {
    title: "退出游戏？",
    body: "对局过程中进度会自动保存。若现在退出，已保存的进度将被删除。确定要离开吗？",
    back: "返回",
    confirm: "退出",
    close: "关闭",
  },
  rulesModal: {
    stepHeading: (id: number, title: string) => `第 ${id} 步：${title}`,
    stepBtn: (id: number) => `第 ${id} 步`,
    next: "下一步",
    back: "返回",
    close: "关闭",
  },
  dice: {
    rolling: "掷骰中…",
    rolled: "掷出",
  },
  carousel: {
    prev: "上一张",
    next: "下一张",
    indicator: (i: number, total: number) => `第 ${i} / ${total} 张`,
  },
  meta: {
    description: "一款关于女性运动员的叙事棋盘游戏。",
  },
} as const;
