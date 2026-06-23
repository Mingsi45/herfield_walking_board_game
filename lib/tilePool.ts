import { events, resources, specialTiles } from "../data/events";

export type TilePools = {
  eventPool: number[];
  resourcePool: number[];
  specialPool: number[];
};

export function createShuffledIndices(count: number): number[] {
  const indices = Array.from({ length: count }, (_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return indices;
}

export function createInitialTilePools(): TilePools {
  return {
    eventPool: createShuffledIndices(events.length),
    resourcePool: createShuffledIndices(resources.length),
    specialPool: createShuffledIndices(specialTiles.length),
  };
}

/** Draw one index without replacement; reshuffles when the pool is empty. */
export function drawIndex(
  pool: number[],
  totalCount: number,
): { index: number; pool: number[] } {
  let nextPool = pool;
  if (nextPool.length === 0) {
    nextPool = createShuffledIndices(totalCount);
  }
  const index = nextPool[0];
  return { index, pool: nextPool.slice(1) };
}
