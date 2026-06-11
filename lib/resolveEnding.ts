import { endings, type Ending } from "../data/endings";
import type { PlayerStats } from "./gameStats";

export function getHighestAndLowest(stats: PlayerStats): {
  highest: keyof PlayerStats;
  lowest: keyof PlayerStats;
} {
  const keys = Object.keys(stats) as (keyof PlayerStats)[];
  let highest = keys[0];
  let lowest = keys[0];

  for (const key of keys) {
    if (stats[key] > stats[highest]) highest = key;
    if (stats[key] < stats[lowest]) lowest = key;
  }

  return { highest, lowest };
}

export function resolveEnding(stats: PlayerStats): Ending {
  const { highest, lowest } = getHighestAndLowest(stats);
  const match = endings.find(
    (e) => e.highest === highest && e.lowest === lowest,
  );
  return match ?? endings[0];
}
