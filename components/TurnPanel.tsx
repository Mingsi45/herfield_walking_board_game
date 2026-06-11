"use client";

import { MAX_TURNS } from "../lib/constants";

type TurnPanelProps = {
  turnCount: number;
};

export default function TurnPanel({ turnCount }: TurnPanelProps) {
  const remaining = Math.max(0, MAX_TURNS - turnCount);

  return (
    <aside className="hidden w-28 shrink-0 sm:flex sm:w-32 md:w-36">
      <div className="flex w-full flex-col justify-center rounded-xl border-2 border-stone-500/40 bg-[#efe9df] px-3 py-5 shadow-[0_4px_16px_rgba(68,64,60,0.1)]">
        <p className="text-center text-[10px] font-semibold uppercase tracking-widest text-stone-500">
          Turns
        </p>
        <p className="mt-2 text-center font-serif text-3xl font-bold tabular-nums text-stone-800 md:text-4xl">
          {turnCount}
        </p>
        <p className="mt-1 text-center text-xs text-stone-600">of {MAX_TURNS}</p>
        <div className="my-3 h-px bg-stone-400/40" />
        <p className="text-center text-[10px] uppercase tracking-wide text-stone-500">
          Remaining
        </p>
        <p className="mt-1 text-center text-2xl font-semibold tabular-nums text-emerald-800">
          {remaining}
        </p>
      </div>
    </aside>
  );
}
