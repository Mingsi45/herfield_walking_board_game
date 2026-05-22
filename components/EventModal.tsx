"use client";

import { useEffect, useState } from "react";
import type { Choice, GameEvent } from "../data/events";
import { applyEffects, type PlayerStats } from "../lib/gameStats";
import StatChanges from "./StatChanges";

type EventModalProps = {
  event: Pick<GameEvent, "title" | "description" | "choices">;
  stats: PlayerStats;
  isOpen: boolean;
  onClose: () => void;
  onComplete: (choice: Choice, newStats: PlayerStats) => void;
};

export default function EventModal({
  event,
  stats,
  isOpen,
  onClose,
  onComplete,
}: EventModalProps) {
  const [phase, setPhase] = useState<"choose" | "result">("choose");
  const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null);

  useEffect(() => {
    if (isOpen) {
      setPhase("choose");
      setSelectedChoice(null);
    }
  }, [isOpen, event.title]);

  if (!isOpen) return null;

  function handleSelectChoice(choice: Choice) {
    setSelectedChoice(choice);
    setPhase("result");
  }

  function handleConfirmResult() {
    if (!selectedChoice) return;
    onComplete(selectedChoice, applyEffects(stats, selectedChoice.effects));
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="event-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-stone-800/25 backdrop-blur-[2px]"
        aria-label="Close"
        onClick={phase === "choose" ? onClose : undefined}
        disabled={phase === "result"}
      />

      <div className="relative w-full max-w-md rounded-2xl border border-stone-300/50 bg-[#f7f3ed] p-6 shadow-[0_8px_30px_rgba(68,64,60,0.12)]">
        {phase === "choose" && (
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 text-stone-500 transition-colors hover:text-stone-800"
            aria-label="Close"
          >
            <span className="text-xl leading-none">&times;</span>
          </button>
        )}

        <h2
          id="event-modal-title"
          className="pr-8 font-serif text-xl font-semibold tracking-tight text-stone-800"
        >
          {event.title}
        </h2>

        {phase === "choose" ? (
          <>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              {event.description}
            </p>

            <div className="mt-6 flex flex-col gap-2.5">
              {event.choices.map((choice) => (
                <button
                  key={choice.text}
                  type="button"
                  onClick={() => handleSelectChoice(choice)}
                  className="rounded-xl border border-stone-300/60 bg-[#efe9df] px-4 py-3 text-left text-sm text-stone-800 transition-colors hover:border-stone-400/70 hover:bg-[#e8e0d4] active:bg-[#e2d9cc]"
                >
                  {choice.text}
                </button>
              ))}
            </div>
          </>
        ) : (
          selectedChoice && (
            <>
              <p className="mt-3 text-sm text-stone-600">
                You chose: <span className="font-medium">{selectedChoice.text}</span>
              </p>

              <div className="mt-5">
                <StatChanges
                  effects={selectedChoice.effects}
                  before={stats}
                />
              </div>

              <button
                type="button"
                onClick={handleConfirmResult}
                className="mt-6 w-full rounded-xl border border-stone-300/60 bg-[#efe9df] px-4 py-3 text-sm font-medium text-stone-800 transition-colors hover:bg-[#e8e0d4]"
              >
                Continue
              </button>
            </>
          )
        )}
      </div>
    </div>
  );
}
