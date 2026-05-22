"use client";

import { useEffect, useState } from "react";
import type { Effects } from "../data/events";
import { applyEffects, type PlayerStats } from "../lib/gameStats";
import StatChanges from "./StatChanges";

type NoticeModalProps = {
  title: string;
  description: string;
  isOpen: boolean;
  effects?: Effects;
  stats?: PlayerStats;
  onClose: () => void;
  onConfirm: (newStats: PlayerStats) => void;
};

export default function NoticeModal({
  title,
  description,
  isOpen,
  effects,
  stats,
  onClose,
  onConfirm,
}: NoticeModalProps) {
  const [phase, setPhase] = useState<"preview" | "result">("preview");

  useEffect(() => {
    if (isOpen) setPhase("preview");
  }, [isOpen, title]);

  if (!isOpen || stats === undefined) return null;

  const currentStats = stats;
  const hasEffects =
    effects &&
    Object.values(effects).some((v) => v !== undefined && v !== 0);

  function handleContinue() {
    if (!effects || !hasEffects) {
      onConfirm(currentStats);
      return;
    }

    if (phase === "preview") {
      setPhase("result");
      return;
    }

    onConfirm(applyEffects(currentStats, effects));
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        className="absolute inset-0 bg-stone-800/25 backdrop-blur-[2px]"
        aria-label="Close"
        onClick={phase === "preview" ? onClose : undefined}
        disabled={phase === "result"}
      />

      <div className="relative w-full max-w-md rounded-2xl border border-stone-300/50 bg-[#f7f3ed] p-6 shadow-[0_8px_30px_rgba(68,64,60,0.12)]">
        <h2 className="font-serif text-xl font-semibold tracking-tight text-stone-800">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-stone-600">
          {description}
        </p>

        {phase === "result" && effects && hasEffects && (
          <div className="mt-5">
            <StatChanges effects={effects} before={stats} />
          </div>
        )}

        <button
          type="button"
          onClick={handleContinue}
          className="mt-6 w-full rounded-xl border border-stone-300/60 bg-[#efe9df] px-4 py-3 text-sm font-medium text-stone-800 transition-colors hover:bg-[#e8e0d4]"
        >
          {phase === "preview" && hasEffects ? "See changes" : "Continue"}
        </button>
      </div>
    </div>
  );
}
