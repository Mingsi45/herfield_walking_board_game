import { MAX_TURNS, STORAGE_KEY } from "./constants";
import type { PlayerStats } from "./gameStats";
import { INITIAL_STATS } from "./gameStats";
import { createInitialTilePools, type TilePools } from "./tilePool";

export type SavedGameState = {
  stats: PlayerStats;
  position: number;
  displayPosition: number;
  turnCount: number;
  skipTurns: number;
  eventPool: number[];
  resourcePool: number[];
  specialPool: number[];
};

export function saveGameState(state: SavedGameState) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* ignore quota errors */
  }
}

export function loadGameState(): SavedGameState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<SavedGameState>;
    if (
      parsed.stats === undefined ||
      parsed.position === undefined ||
      parsed.displayPosition === undefined ||
      parsed.turnCount === undefined ||
      parsed.skipTurns === undefined
    ) {
      return null;
    }

    const pools = createInitialTilePools();
    return {
      stats: parsed.stats,
      position: parsed.position,
      displayPosition: parsed.displayPosition,
      turnCount: parsed.turnCount,
      skipTurns: parsed.skipTurns,
      eventPool: parsed.eventPool ?? pools.eventPool,
      resourcePool: parsed.resourcePool ?? pools.resourcePool,
      specialPool: parsed.specialPool ?? pools.specialPool,
    };
  } catch {
    return null;
  }
}

export function clearGameState() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}

export function hasResumableGame(): boolean {
  const saved = loadGameState();
  return saved !== null && saved.turnCount < MAX_TURNS;
}

export function createNewGameState(): SavedGameState {
  const pools = createInitialTilePools();
  return {
    stats: { ...INITIAL_STATS },
    position: 0,
    displayPosition: 0,
    turnCount: 0,
    skipTurns: 0,
    eventPool: pools.eventPool,
    resourcePool: pools.resourcePool,
    specialPool: pools.specialPool,
  };
}
