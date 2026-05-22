"use client";

type DiceRollOverlayProps = {
  phase: "rolling" | "result";
  displayValue: number;
};

export default function DiceRollOverlay({
  phase,
  displayValue,
}: DiceRollOverlayProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
      <div
        className={`flex h-16 w-16 flex-col items-center justify-center rounded-xl border-2 border-stone-600/30 bg-[#f7f3ed] shadow-[0_8px_24px_rgba(68,64,60,0.28)] sm:h-20 sm:w-20 ${
          phase === "rolling" ? "animate-dice-shake" : ""
        }`}
      >
        <span className="text-[8px] uppercase tracking-widest text-stone-500 sm:text-[9px]">
          {phase === "rolling" ? "Rolling…" : "Rolled"}
        </span>
        <span className="font-serif text-3xl font-bold tabular-nums text-stone-800 sm:text-4xl">
          {displayValue}
        </span>
      </div>
    </div>
  );
}
