export type TileType = "start" | "event" | "resource" | "special";

export type BoardTile = {
  type: TileType;
  label: string;
};

export const BOARD_COLS = 7;
export const BOARD_ROWS = 6;
export const BOARD_SIZE = 22;

/** Clockwise path starting from the top-left Start tile */
export const boardPath: BoardTile[] = [
  { type: "start", label: "Start" },
  { type: "resource", label: "Resource" },
  { type: "event", label: "Event" },
  { type: "event", label: "Event" },
  { type: "resource", label: "Resource" },
  { type: "event", label: "Event" },
  { type: "special", label: "Special" },
  { type: "event", label: "Event" },
  { type: "event", label: "Event" },
  { type: "resource", label: "Resource" },
  { type: "event", label: "Event" },
  { type: "special", label: "Special" },
  { type: "event", label: "Event" },
  { type: "resource", label: "Resource" },
  { type: "event", label: "Event" },
  { type: "resource", label: "Resource" },
  { type: "event", label: "Event" },
  { type: "special", label: "Special" },
  { type: "event", label: "Event" },
  { type: "resource", label: "Resource" },
  { type: "event", label: "Event" },
  { type: "event", label: "Event" },
];

export const tileTypeLabels: Record<TileType, string> = {
  start: "Start",
  event: "Event",
  resource: "Resource",
  special: "Special",
};

export function pathIndexToCell(pathIndex: number): { row: number; col: number } {
  if (pathIndex <= 6) return { row: 0, col: pathIndex };
  if (pathIndex <= 10) return { row: pathIndex - 6, col: BOARD_COLS - 1 };
  if (pathIndex <= 17) return { row: BOARD_ROWS - 1, col: 17 - pathIndex };
  return { row: 22 - pathIndex, col: 0 };
}

export function buildBoardGrid(): (number | null)[][] {
  const grid: (number | null)[][] = Array.from({ length: BOARD_ROWS }, () =>
    Array(BOARD_COLS).fill(null),
  );

  for (let i = 0; i < BOARD_SIZE; i++) {
    const { row, col } = pathIndexToCell(i);
    grid[row][col] = i;
  }

  return grid;
}

export const tileLegend: { type: TileType; name: string; colorClass: string }[] =
  [
    { type: "start", name: "Start", colorClass: "border-blue-500/60 text-blue-800" },
    {
      type: "event",
      name: "Event",
      colorClass: "border-emerald-600/50 text-emerald-900",
    },
    {
      type: "resource",
      name: "Resource",
      colorClass: "border-amber-600/50 text-amber-900",
    },
    { type: "special", name: "Special", colorClass: "border-red-500/50 text-red-900" },
  ];

export function tileStyle(type: TileType, isCurrent: boolean): string {
  if (isCurrent) {
    return "border-stone-500/70 bg-[#faf7f2] ring-2 ring-stone-400/40 ring-offset-1 ring-offset-[#f7f3ed]";
  }

  switch (type) {
    case "start":
      return "border-blue-400/70 bg-blue-50/80 text-blue-900";
    case "event":
      return "border-emerald-600/40 bg-emerald-50/90 text-emerald-900";
    case "resource":
      return "border-amber-600/40 bg-amber-50/90 text-amber-900";
    case "special":
      return "border-red-500/40 bg-red-50/90 text-red-900";
    default:
      return "border-stone-300/60 bg-[#faf7f2] text-stone-500";
  }
}
