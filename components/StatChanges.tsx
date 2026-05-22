import type { Effects } from "../data/events";
import { getEffectEntries, type PlayerStats } from "../lib/gameStats";

type StatChangesProps = {
  effects: Effects;
  before: PlayerStats;
  title?: string;
};

export default function StatChanges({
  effects,
  before,
  title = "Stat changes",
}: StatChangesProps) {
  const entries = getEffectEntries(effects);
  const after = {
    satisfaction: before.satisfaction + (effects.satisfaction ?? 0),
    salary: before.salary + (effects.salary ?? 0),
    health: before.health + (effects.health ?? 0),
    energy: before.energy + (effects.energy ?? 0),
  };

  if (entries.length === 0) {
    return (
      <p className="text-sm text-stone-500">No stat changes from this choice.</p>
    );
  }

  return (
    <div className="rounded-xl border border-stone-300/60 bg-[#faf7f2] p-4">
      <p className="mb-3 text-xs font-medium uppercase tracking-wide text-stone-500">
        {title}
      </p>
      <ul className="space-y-2">
        {entries.map(({ key, label, delta }) => (
          <li
            key={key}
            className="flex items-center justify-between gap-3 text-sm"
          >
            <span className="text-stone-700">{label}</span>
            <span className="flex items-center gap-2 tabular-nums">
              <span className="text-stone-500">
                {before[key]} → {after[key]}
              </span>
              <span
                className={`min-w-[3rem] text-right font-semibold ${
                  delta > 0 ? "text-emerald-700" : "text-red-700"
                }`}
              >
                {delta > 0 ? `+${delta}` : delta}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

