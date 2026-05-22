import type { Effects } from "../data/events";

export type PlayerStats = {
  satisfaction: number;
  salary: number;
  health: number;
  energy: number;
};

export const INITIAL_STATS: PlayerStats = {
  satisfaction: 100,
  salary: 100,
  health: 100,
  energy: 100,
};

export const STAT_LABELS: Record<keyof PlayerStats, string> = {
  satisfaction: "Satisfaction",
  salary: "Salary",
  health: "Health",
  energy: "Energy",
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

export function getEffectEntries(effects: Effects) {
  return (Object.keys(STAT_LABELS) as (keyof PlayerStats)[])
    .map((key) => ({
      key,
      label: STAT_LABELS[key],
      delta: effects[key] ?? 0,
    }))
    .filter((entry) => entry.delta !== 0);
}

export function randomItem<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}
