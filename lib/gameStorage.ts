import { STORAGE_KEY } from "./constants";
import type { PlayerStats } from "./gameStats";
import { INITIAL_STATS } from "./gameStats";

export type SavedGameState = {
  stats: PlayerStats;
  position: number;
  displayPosition: number;
  turnCount: number;
  skipTurns: number;
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
    return JSON.parse(raw) as SavedGameState;
  } catch {
    return null;
  }
}

export function clearGameState() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}

export function createNewGameState(): SavedGameState {
  return {
    stats: { ...INITIAL_STATS },
    position: 0,
    displayPosition: 0,
    turnCount: 0,
    skipTurns: 0,
  };
}
