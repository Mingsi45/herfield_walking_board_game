import type { Effects } from "../data/events";

export type PlayerStats = {
  satisfaction: number;
  energy: number;
  salary: number;
  health: number;
};

/** Display order matches rules: Satisfaction → Energy → Salary → Health */
export const STAT_KEYS: (keyof PlayerStats)[] = [
  "satisfaction",
  "energy",
  "salary",
  "health",
];

export const INITIAL_STATS: PlayerStats = {
  satisfaction: 100,
  energy: 100,
  salary: 100,
  health: 100,
};

export const STAT_LABELS: Record<keyof PlayerStats, string> = {
  satisfaction: "Satisfaction",
  energy: "Energy",
  salary: "Salary",
  health: "Health",
};

export function applyEffects(
  stats: PlayerStats,
  effects: Effects,
): PlayerStats {
  return {
    satisfaction: stats.satisfaction + (effects.satisfaction ?? 0),
    salary: stats.salary + (effects.salary ?? 0),
    health: stats.health + (effects.health ?? 0),
    energy: stats.energy + (effects.energy ?? 0),
  };
}

export function getEffectEntries(
  effects: Effects,
  labels: Record<keyof PlayerStats, string> = STAT_LABELS,
) {
  return STAT_KEYS
    .map((key) => ({
      key,
      label: labels[key],
      delta: effects[key] ?? 0,
    }))
    .filter((entry) => entry.delta !== 0);
}

export function randomItem<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}
